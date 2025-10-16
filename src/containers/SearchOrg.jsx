import React, { useState, useCallback } from 'react';
import BannerUser from "../components/BannerUser";
import { Search, X, Loader2 } from "lucide-react";
import { SearchField } from "@aws-amplify/ui-react";
import GridSearch from '../components/GridSearch';
import { useSearch, useSearchHistory } from '../hooks/useSearch'; // Importar useSearch y useSearchHistory
import SearchHistory from '../components/SearchHistory'; // Importar el componente SearchHistory
import { useNavigate } from "react-router-dom";
import useBreadcrumbs from "../hooks/useBreadcrumbs";


function SearchOrg() {
  const { 
    searchTerm,
    searchResults,
    isLoading,
    error,
    hasSearched,
    updateSearchTerm,
    searchNow,
    clearSearch,
  } = useSearch();

  const { 
    history,
    addToHistory,
    clearHistory,
    removeFromHistory,
  } = useSearchHistory();

  const [showHistory, setShowHistory] = useState(false);
  const { clearBreadcrumbs } = useBreadcrumbs();

  const closeModal = () => {
    clearBreadcrumbs();
    navigate(`/org`);
  }

    const navigate = useNavigate();
     

  // Función para manejar el cambio en el campo de búsqueda
  const handleChange = useCallback((event) => {
    updateSearchTerm(event.target.value);
    setShowHistory(event.target.value.trim() === ''); // Mostrar historial si el campo está vacío
  }, [updateSearchTerm]);

  // Función para realizar la búsqueda
  const handleSearch = useCallback(() => {
    if (searchTerm.trim()) {
      searchNow();
      addToHistory(searchTerm); // Agregar al historial solo si hay un término
      setShowHistory(false); // Ocultar historial después de buscar
    }
  }, [searchTerm, searchNow, addToHistory]);

  // Función para limpiar la búsqueda
  const onClear = useCallback(() => {
    clearSearch();
    setShowHistory(false); // Ocultar historial al limpiar
  }, [clearSearch]);

  // Función para manejar Enter en el campo de búsqueda
  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

 
  // Función para seleccionar un elemento del historial
  const handleSelectHistory = useCallback((term) => {
    updateSearchTerm(term);
    searchNow(term); // Realizar búsqueda inmediata con el término del historial
    addToHistory(term); // Re-agregar al historial para actualizar timestamp
    setShowHistory(false); // Ocultar historial después de seleccionar
  }, [updateSearchTerm, searchNow, addToHistory]);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="z-40">
        <BannerUser />
      </div>
      
      <div className='p-12 flex flex-col gap-6'>
        {/* Encabezado con título y botón de cerrar */}
        <div className='flex justify-between items-center'>
          <div className='flex gap-2'>
            <Search />
            <h3 className='font-bold text-lg'>Buscador de Colaboradores</h3>
          </div>
          
          {/* Botón para cerrar el modal */}
          <button 
            onClick={closeModal}
            className="right-4 z-10 p-2 bg-blue-800 rounded-full shadow-md hover:bg-blue-900 transition-colors"
            aria-label="Cerrar"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Campo de búsqueda con botón y historial */}
        <div className="relative flex gap-4 items-center">
          <SearchField
            placeholder="Buscar Colaborador"
            width="50%"
            shrink="0"
            size="default"
            isDisabled={isLoading}
            labelHidden={true}
            variation="default"
            label="search"
            value={searchTerm}
            onChange={handleChange}
            onClear={onClear}
            hasSearchButton={false}
            id="busqueda"
            onFocus={() => setShowHistory(searchTerm.trim() === '')} // Mostrar historial al enfocar si el campo está vacío
            onBlur={() => setShowHistory(false)} // Ocultar historial al desenfocar (con delay para permitir clics)
          />
          
          <button
            onClick={handleSearch}
            disabled={isLoading || !searchTerm.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Buscando...
              </>
            ) : (
              <>
                <Search size={16} />
                Buscar
              </>
            )}
          </button>

          <SearchHistory
            history={history}
            onSelectHistory={handleSelectHistory}
            onClearHistory={clearHistory}
            onRemoveItem={removeFromHistory}
            isVisible={showHistory}
          />
        </div>

        {/* Mensajes de error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Indicador de carga */}
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <Loader2 size={32} className="animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Buscando colaboradores...</span>
          </div>
        )}

        {/* Resultados de búsqueda */}
        {!isLoading && hasSearched && (
          <>
            {searchResults.length > 0 ? (
              <>
                <div className="text-sm text-gray-600">
                  Se encontraron {searchResults.length} resultado(s) para "{searchTerm}"
                </div>
                <GridSearch users={searchResults} />
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No se encontraron colaboradores que coincidan con "{searchTerm}"
              </div>
            )}
          </>
        )}

        {/* Mensaje inicial */}
        {!hasSearched && !isLoading && (
          <div className="text-center py-8 text-gray-500">
            Ingresa un término de búsqueda para encontrar colaboradores
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchOrg;