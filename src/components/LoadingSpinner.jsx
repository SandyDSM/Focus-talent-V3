import React from 'react';

/**
 * Componente de spinner de carga con progreso
 * @param {Object} props - Propiedades del componente
 * @param {boolean} props.loading - Si está cargando
 * @param {number} props.progress - Progreso de 0 a 100
 * @param {string} props.message - Mensaje de carga
 * @param {string} props.size - Tamaño del spinner (small, medium, large)
 * @returns {JSX.Element} Componente de loading
 */
const LoadingSpinner = ({ 
  loading = true, 
  progress = 0, 
  message = "Cargando datos...", 
  size = "medium" 
}) => {
  if (!loading) return null;

  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-12 h-12"
  };

  const containerSizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8"
  };

  return (
    <div className={`flex flex-col items-center justify-center ${containerSizeClasses[size]}`}>
      {/* Spinner animado */}
      <div className="relative">
        <div 
          className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}
        ></div>
        
        {/* Círculo de progreso si se proporciona */}
        {progress > 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className={sizeClasses[size]} viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-600"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${progress}, 100`}
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        )}
      </div>
      
      {/* Mensaje de carga */}
      <p className="mt-4 text-sm text-gray-600 text-center">{message}</p>
      
      {/* Barra de progreso si se proporciona */}
      {progress > 0 && (
        <div className="mt-2 w-32 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      
      {/* Porcentaje de progreso */}
      {progress > 0 && (
        <span className="mt-1 text-xs text-gray-500">{Math.round(progress)}%</span>
      )}
    </div>
  );
};

/**
 * Componente de overlay de carga para pantalla completa
 */
export const LoadingOverlay = ({ 
  loading = true, 
  progress = 0, 
  message = "Cargando organigrama...",
  children 
}) => {
  if (!loading) {
    return children;
  }

  return (
    <div className="relative">
      {/* Contenido con overlay */}
      <div className="opacity-30 pointer-events-none">
        {children}
      </div>
      
      {/* Overlay de carga */}
      <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full mx-4">
          <LoadingSpinner 
            loading={true} 
            progress={progress} 
            message={message} 
            size="large" 
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Componente de skeleton para cargar contenido
 */
export const SkeletonLoader = ({ className = "", children }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {children || (
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;

