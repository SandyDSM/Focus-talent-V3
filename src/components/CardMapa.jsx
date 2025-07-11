import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTalentContext } from '../context/organigram/DataProvider';
import { SkeletonLoader } from './LoadingSpinner';
import { useTranslation } from 'react-i18next';


const Tooltip = ({ x, y, label, visible }) => {
  if (!visible) return null;
  return (
    <foreignObject x={x - 75} y={y - 40} width="150" height="40">
      <div
        role="tooltip"
        aria-live="polite"
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          fontSize: "12px",
          textAlign: "center",
          boxSizing: "border-box",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          whiteSpace: "nowrap",
          minWidth: "max-content",
        }}
      >
        {label}
      </div>
    </foreignObject>
  );
};

const TriangularChart = ({ sections, isLoading = false }) => {
  const width = 280;
  const height = 180;

  // Declaración del estado tooltip
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, label: "" });

  // Si está cargando, mostrar valores por defecto
  if (isLoading || !sections || sections.length === 0) {
    return (
      <div className="flex items-center gap-4">
        <div className="relative">
          <SkeletonLoader className="w-48 h-32 rounded" />
        </div>
        <div className="content-start space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex justify-between gap-3 w-full">
                <SkeletonLoader className="h-4 w-24" />
                <SkeletonLoader className="h-4 w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  let currentY = 0;

  const getTriangleWidthAtY = (y) => {
    const halfBase = (width / 2) * (y / height);
    return [width / 2 - halfBase, width / 2 + halfBase];
  };

  const buildPolygon = (y1, y2) => {
    const [x1Left, x1Right] = getTriangleWidthAtY(y1);
    const [x2Left, x2Right] = getTriangleWidthAtY(y2);
    return `${x1Left},${y1} ${x1Right},${y1} ${x2Right},${y2} ${x2Left},${y2}`;
  };

  return (
    <div className="flex items-center gap-4">
      {/* Gráfico triangular */}
      <div className="relative">
        <svg
          role="img"
          aria-label="Gráfico triangular de evaluación de talento"
          viewBox={`0 0 ${width} ${height}`}
          className="w-48 h-auto drop-shadow-sm"
          onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0, label: "" })}
        >
          <title>Mapa de talento</title>

          {/* Triángulo base con sombra sutil */}
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.1"/>
            </filter>
          </defs>
          
          <polygon
            points={`0,${height} ${width},${height} ${width / 2},0`}
            fill="#F8FAFC"
            stroke="#E2E8F0"
            strokeWidth={1}
            filter="url(#shadow)"
          />

          {/* Secciones animadas */}
          {sections.map((s, i) => {
            const y1 = currentY;
            const y2 = y1 + s.height;
            const polygon = buildPolygon(y1, y2);
            currentY = y2;

            return (
              <g key={i}>
                <motion.polygon
                  points={polygon}
                  fill={s.color}
                  stroke="#fff"
                  strokeWidth={4}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                  onMouseMove={(e) =>
                    setTooltip({
                      visible: true,
                      x: e.nativeEvent.offsetX,
                      y: e.nativeEvent.offsetY,
                      label: `${s.label}: ${s.value}%`,
                    })
                  }
                  style={{ cursor: "pointer" }}
                  role="presentation"
                  tabIndex={0}
                  aria-label={`${s.label}: ${s.value}%`}
                >
                  <title>{`${s.label}: ${s.value}%`}</title>
                </motion.polygon>
              </g>
            );
          })}

          <Tooltip {...tooltip} />
        </svg>
      </div>

      {/* Leyenda a la derecha */}
      <div className="content-start space-y-6">
        {sections.map((s, i) => (
          <motion.div 
            key={i} 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="flex justify-between gap-3 w-full">
              <span className="text-sm text-gray-700">{s.label}</span>
              <span className="text-sm font-medium text-gray-900">{s.value || "0"}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * Componente principal del mapa de talento
 * Ahora obtiene los datos desde el contexto de talent
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.levels - Niveles de talento (opcional, usa contexto por defecto)
 * @returns {JSX.Element} Componente del mapa de talento
 */
export default function CardMapa({ levels = null }) {
  // Obtener datos del contexto si no se proporcionan levels
  const { levels: contextLevels, isLoading, isError } = useTalentContext();
  
  // Usar levels proporcionados o del contexto
  const displayLevels = levels || contextLevels;

  //Para realizar traducciones
  const { t } = useTranslation();

  // Datos por defecto como fallback
  const defaultSections = [
    { label: t("Alto_Potencial"), percentage: 0, color: '#0A5DEE' },
    { label: t("Talento_Promesa"), percentage: 0, color: '#3EC4FA' },
    { label: t("Talento_Esencial"), percentage: 0, color: '#81DE8D' },
  ];

  const color = {
    '1' : '#0A5DEE',
    '2': '#3EC4FA',
    '3': '#81DE8D',
  };
  // Convertir datos de levels a formato del gráfico
  const getChartSections = (levelsData) => {
    if (!levelsData || levelsData.length === 0) {
      return defaultSections;
    }

    const total = 100;
    const height = 180; // Altura total del triángulo


    let sections = [];
    levelsData.forEach(level => {
      const sectionHeight = (level.PORCENTAJE / total) * height;
      sections.push({
        label: level.CLASIFICACION, // Usar CLASIFICACION si existe, sino name
        color: color[level.ID_CLASIF],
        height: sectionHeight,
        value: level.PORCENTAJE
      });
    });

    return sections;
  };

  const chartSections = getChartSections(displayLevels);

  // Mostrar skeleton mientras carga
  if (isLoading && !levels) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 w-md mx-auto border border-gray-100">
        <div className="mb-6">
          <SkeletonLoader className="h-6 w-32" />
        </div>
        <TriangularChart sections={defaultSections} isLoading={true} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-md mx-auto border border-gray-100">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 text-center">{t('Mapa_Talento')}</h2>
        {isError && !levels && (
          <p className="text-xs text-red-600 mt-1">Error al cargar datos - Mostrando valores por defecto</p>
        )}
      </div>
      <TriangularChart sections={chartSections} isLoading={isLoading && !levels} />
      
      {/* Indicador de fuente de datos */}
      {!levels && (
        <div className="mt-4 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            {isLoading ? 'Actualizando datos...' : 'Datos actualizados'}
          </p>
        </div>
      )}
    </div>
  );
}

