import React from 'react';

/**
 * Componente que muestra una tarjeta de clasificación de desempeño en formato vertical
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título de la tarjeta
 * @param {Array} props.categories - Array de categorías con sus datos
 * @returns {JSX.Element} Componente de tarjeta de desempeño vertical
 */
const CardCompetencias = ({ title = "Calificación de desempeño", categories = [] }) => {
  // Si no se proporcionan categorías, usar datos por defecto basados en la imagen
  const defaultCategories = [
    { name: 'Sobresaliente', percentage: 20, color: '#0052CC' },
    { name: 'Supera', percentage: 20, color: '#00B8D9' },
    { name: 'Gran trabajo', percentage: 20, color: '#36B37E' },
    { name: 'Necesita mejora', percentage: 20, color: '#FFAB00' },
    { name: 'Por debajo de lo esperado', percentage: 20, color: '#FF8B00' },
    { name: 'Salida', percentage: 0, color: '#FF5630' },
  ];

  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  return (
    <div className="performance-card-vertical bg-white rounded-lg shadow-md p-6 max-w-sm">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      
      <div className="space-y-2">
        {displayCategories.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-2" 
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="text-sm text-gray-700">{category.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{category.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCompetencias;

