import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Componente que muestra una tarjeta de clasificación de desempeño en formato vertical
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título de la tarjeta
 * @param {Array} props.categories - Array de categorías con sus datos
 * @returns {JSX.Element} Componente de tarjeta de desempeño vertical
 */

const CardCompetencias = ({ title = "Calificación de desempeño", categories = [] }) => {
  // Si no se proporcionan categorías, usar datos por defecto basados en la imagen
  
    //Para realizar traducciones
    const { t } = useTranslation();
  
  const defaultCategories = [
    { name: t("Sobresaliente"), percentage: 0, color: '#0052CC' },
    { name: t("Supera"), percentage: 0, color: '#00B8D9' },
    { name: t("Gran_Trabajo"), percentage: 0, color: '#36B37E' },
    { name: t("Necesita_Mejora"), percentage: 0, color: '#FFAB00' },
    { name: t("Por_Debajo"), percentage: 0, color: '#FF8B00' },
    { name: t("Salida"), percentage: 0, color: '#FF5630' },
  ];

 // console.log("AQUI",categories)

  const colorMap = {
    '1' : '#0561F4',
    '2': '#00CDFF',
    '3': '#99C570',
    '4': '#FFFE03',
    '5': '#FCBF04',
    '6': '#FE0003'
  };

  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  return (
    <div className="performance-card-vertical bg-white rounded-lg shadow-md p-6 max-w-sm">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      
      <div className="space-y-2">
        {displayCategories?.map((category, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-2" 
                style={{ backgroundColor: colorMap[category.ID_CLASIF] || category.color }}
              ></div>
              <span className="text-sm text-gray-700">{category.CLASIFICACION || category.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{category.PORCENTAJE || category.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCompetencias;

