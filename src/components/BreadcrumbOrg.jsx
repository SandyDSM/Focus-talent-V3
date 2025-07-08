import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Componente BreadcrumbOrg para mostrar la ruta de navegación en el organigrama
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.breadcrumbs - Array de objetos con la información de los colaboradores visitados
 * @param {Function} props.onBreadcrumbClick - Función que se ejecuta al hacer clic en un breadcrumb
 * @returns {JSX.Element} Componente de breadcrumbs
 */
const BreadcrumbOrg = ({ breadcrumbs = [], onBreadcrumbClick }) => {
  const navigate = useNavigate();

  // Función para manejar el clic en un breadcrumb
  const handleBreadcrumbClick = (breadcrumb, index) => {
    if (onBreadcrumbClick) {
      onBreadcrumbClick(breadcrumb, index);
    }
    
    // Navegar a la vista del organigrama con el ID del colaborador seleccionado
    if (breadcrumb.id) {
      navigate(`/org/${breadcrumb.id}`);
    }else{
      navigate(`/org`);
    }
    // Para el inicio, solo ejecutar onBreadcrumbClick que limpiará los breadcrumbs
    // No navegar a ninguna ruta específica
  };

  // Si no hay breadcrumbs, mostrar solo el icono de inicio
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return (
      <nav className="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
        <Home 
          className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" 
          onClick={() => handleBreadcrumbClick({ id: null, name: 'Inicio' }, -1)}
          title="Inicio"
        />
        <span className="text-gray-500">Organigrama</span>
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
      {/* Icono de inicio */}
      <Home 
        className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" 
        onClick={() => handleBreadcrumbClick({ id: null, name: 'Inicio' }, -1)}
        title="Ir al inicio"
      />
      
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={`${breadcrumb.id}-${index}`}>
          {/* Separador */}
          <ChevronRight className="w-4 h-4 text-gray-400" />
          
          {/* Breadcrumb item */}
          <span
            className={`cursor-pointer transition-colors ${
              index === breadcrumbs.length - 1
                ? 'text-gray-800 font-semibold' // Último elemento (actual)
                : 'text-blue-600 hover:text-blue-800 hover:underline' // Elementos navegables
            }`}
            onClick={() => {
              if (index < breadcrumbs.length - 1) {
                handleBreadcrumbClick(breadcrumb, index);
              }
            }}
            title={`${breadcrumb.name} - ${breadcrumb.position || ''}`}
          >
            {breadcrumb.name}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadcrumbOrg;

