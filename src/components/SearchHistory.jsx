import React from 'react';
import { Clock, X, Search } from 'lucide-react';

function SearchHistory({ 
  history = [], 
  onSelectHistory, 
  onClearHistory, 
  onRemoveItem,
  isVisible = false 
}) {
  if (!isVisible || history.length === 0) {
    return null;
  }

  const formatTimestamp = (timestamp) => {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffMins < 1) return 'Hace un momento';
      if (diffMins < 60) return `Hace ${diffMins} min`;
      if (diffHours < 24) return `Hace ${diffHours}h`;
      if (diffDays < 7) return `Hace ${diffDays}d`;
      
      return date.toLocaleDateString();
    } catch (error) {
      return 'Fecha inválida';
    }
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1">
      {/* Encabezado */}
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Clock size={16} />
          Búsquedas recientes
        </div>
        
        <button
          onClick={onClearHistory}
          className="text-xs text-gray-500 hover:text-red-600 transition-colors"
          title="Limpiar historial"
        >
          Limpiar todo
        </button>
      </div>

      {/* Lista de búsquedas */}
      <div className="max-h-64 overflow-y-auto">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer group"
            onClick={() => onSelectHistory && onSelectHistory(item.term)}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Search size={14} className="text-gray-400 flex-shrink-0" />
              
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-900 truncate">
                  {item.term}
                </div>
                <div className="text-xs text-gray-500">
                  {formatTimestamp(item.timestamp)}
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveItem && onRemoveItem(index);
              }}
              className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all"
              title="Eliminar del historial"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Pie del historial */}
      <div className="p-2 border-t border-gray-100 text-xs text-gray-500 text-center">
        {history.length} búsqueda{history.length !== 1 ? 's' : ''} guardada{history.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
}

export default SearchHistory;

