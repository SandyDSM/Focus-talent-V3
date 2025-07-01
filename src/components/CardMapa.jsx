import React, { useState } from "react";
import { motion } from "framer-motion";

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

const TriangularChart = ({ altoPotencial, talentoPromesa, talentoEsencial }) => {
  const total = altoPotencial + talentoPromesa + talentoEsencial;
  const width = 280;
  const height = 180;

  const heightAltoPotencial = (altoPotencial / total) * height;
  const heightTalentoPromesa = (talentoPromesa / total) * height;
  const heightTalentoEsencial = (talentoEsencial / total) * height;

  const getTriangleWidthAtY = (y) => {
    const halfBase = (width / 2) * (y / height);
    return [width / 2 - halfBase, width / 2 + halfBase];
  };

  const buildPolygon = (y1, y2) => {
    const [x1Left, x1Right] = getTriangleWidthAtY(y1);
    const [x2Left, x2Right] = getTriangleWidthAtY(y2);
    return `${x1Left},${y1} ${x1Right},${y1} ${x2Right},${y2} ${x2Left},${y2}`;
  };

  let currentY = 0;

  // Colores que coinciden con la imagen de referencia
  const secciones = [
    { 
      label: "Alto Potencial", 
      color: "#0A5DEE", // Azul oscuro
      height: heightAltoPotencial, 
      value: altoPotencial 
    },
    { 
      label: "Talento Promesa", 
      color: "#3EC4FA", // Turquesa/Cyan
      height: heightTalentoPromesa, 
      value: talentoPromesa 
    },
    { 
      label: "Talento Esencial", 
      color: "#81DE8D", // Verde
      height: heightTalentoEsencial, 
      value: talentoEsencial 
    },
  ];

  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, label: "" });

  return (
    <div className="flex items-center gap-4">
      {/* Gráfico triangular */}
      <div className="relative">
        <svg
          role="img"
          aria-label="Gráfico triangular de evaluación de talento"
          viewBox={`0 0 ${width} ${height}`}
          className="w-48 h-auto drop-shadow-sm"
          onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
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
          {secciones.map((s, i) => {
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
        {secciones.map((s, i) => (
          <motion.div 
            key={i} 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="flex justify-between gap-3 w-full">
              <span className="text-sm text-gray-700">{s.label}</span>
              <span className="text-sm font-medium text-gray-900">{s.value}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [data, setData] = useState({ 
    altoPotencial: 20, 
    talentoPromesa: 30, 
    talentoEsencial: 50 
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-md mx-auto border border-gray-100">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Mapa de talento</h2>
      </div>
      <TriangularChart {...data}/>
    </div>
  );
}

