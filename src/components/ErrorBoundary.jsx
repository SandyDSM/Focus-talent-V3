import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

/**
 * Componente para mostrar errores de carga de datos
 * @param {Object} props - Propiedades del componente
 * @param {string} props.error - Mensaje de error
 * @param {Function} props.onRetry - Función para reintentar
 * @param {string} props.title - Título del error
 * @returns {JSX.Element} Componente de error
 */
const ErrorDisplay = ({ 
  error, 
  onRetry, 
  title = "Error al cargar datos" 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-red-50 rounded-lg border border-red-200">
      <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold text-red-800 mb-2">{title}</h3>
      <p className="text-red-600 text-center mb-4 max-w-md">
        {error || "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Reintentar
        </button>
      )}
    </div>
  );
};

/**
 * Error Boundary para capturar errores de React
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log del error para debugging
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full mx-4">
            <ErrorDisplay
              title="Error en la aplicación"
              error="Ha ocurrido un error inesperado en la aplicación. Por favor, recarga la página."
              onRetry={() => window.location.reload()}
            />
            
            {/* Información de debug en desarrollo */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 p-4 bg-gray-100 rounded-lg">
                <summary className="cursor-pointer font-medium">
                  Detalles del error (desarrollo)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Hook para manejo de errores en componentes funcionales
 */
export const useErrorHandler = () => {
  const [error, setError] = React.useState(null);

  const handleError = React.useCallback((error) => {
    console.error('Error manejado:', error);
    setError(error.message || 'Error desconocido');
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError,
    hasError: !!error
  };
};

/**
 * Componente wrapper para manejo de errores de carga
 */
export const DataErrorWrapper = ({ 
  loading, 
  error, 
  onRetry, 
  children, 
  fallback = null 
}) => {
  if (loading) {
    return fallback || children;
  }

  if (error) {
    return (
      <ErrorDisplay 
        error={error} 
        onRetry={onRetry}
        title="Error al cargar datos"
      />
    );
  }

  return children;
};

export { ErrorDisplay };
export default ErrorBoundary;

