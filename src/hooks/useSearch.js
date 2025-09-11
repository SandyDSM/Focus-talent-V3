// Hook personalizado para manejar la lógica de búsqueda de usuarios

import { useState, useCallback, useEffect, useRef } from 'react';
import { searchUsers } from '../search/searchService'; // MODIFICADO: Apunta al nuevo servicio
import { DEFAULT_PARAMS } from '../search/apiConfig';

// Hook principal para la búsqueda
export const useSearch = (initialUserId = null) => {
  // Estados
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Referencias para manejar debounce y cancelación
  const debounceTimeoutRef = useRef(null);
  const abortControllerRef = useRef(null); // Aunque el ApiService no lo use, lo mantenemos por si se quiere implementar
  
  // Función para limpiar timeouts
  const cleanup = useCallback(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = null;
    }
  }, []);
  
  // Función principal de búsqueda
  const performSearch = useCallback(async (term, userId = null) => {
    cleanup();
    
    if (!term || !term.trim()) {
      setError('Por favor ingresa un término de búsqueda');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    
    try {
      const finalUserId = userId || initialUserId || DEFAULT_PARAMS.DEFAULT_USER_ID;
      // LLAMADA AL NUEVO SERVICIO
      const results = await searchUsers(term.trim(), finalUserId);
      setSearchResults(results);

    } catch (err) {
        setError(err.message || 'Error al realizar la búsqueda');
        console.error('Error en búsqueda:', err);
    } finally {
        setIsLoading(false);
    }
  }, [initialUserId, cleanup]);
  
  // Función de búsqueda con debounce
  const debouncedSearch = useCallback((term, userId = null) => {
    cleanup();
    
    debounceTimeoutRef.current = setTimeout(() => {
      performSearch(term, userId);
    }, DEFAULT_PARAMS.SEARCH_DEBOUNCE_MS);
  }, [performSearch, cleanup]);
  
  // Función para búsqueda inmediata (sin debounce)
  const searchNow = useCallback((term = searchTerm, userId = null) => {
    performSearch(term, userId);
  }, [performSearch, searchTerm]);
  
  // Función para actualizar el término de búsqueda
  const updateSearchTerm = useCallback((term) => {
    setSearchTerm(term);
    setError(null);
    
    if (!term.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      cleanup();
    }
  }, [cleanup]);
  
  // Función para limpiar la búsqueda
  const clearSearch = useCallback(() => {
    cleanup();
    setSearchTerm('');
    setSearchResults([]);
    setError(null);
    setHasSearched(false);
    setIsLoading(false);
  }, [cleanup]);
  
  // Limpiar al desmontar el componente
  useEffect(() => {
    return cleanup;
  }, [cleanup]);
  
  // Retornar estado y funciones
  return {
    searchTerm,
    searchResults,
    isLoading,
    error,
    hasSearched,
    updateSearchTerm,
    searchNow,
    debouncedSearch,
    clearSearch,
    resultsCount: searchResults.length,
    hasResults: searchResults.length > 0,
    isEmpty: hasSearched && searchResults.length === 0
  };
};

// El hook de historial no cambia
export const useSearchHistory = (maxItems = 10) => {
  const [history, setHistory] = useState([]);
  
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('searchHistory');
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error('Error cargando historial de búsquedas:', error);
    }
  }, []);
  
  const addToHistory = useCallback((searchTerm) => {
    if (!searchTerm || !searchTerm.trim()) return;
    
    setHistory(prevHistory => {
      const filtered = prevHistory.filter(item => 
        item.term.toLowerCase() !== searchTerm.toLowerCase()
      );
      
      const newHistory = [
        { term: searchTerm.trim(), timestamp: new Date().toISOString() },
        ...filtered
      ].slice(0, maxItems);
      
      try {
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      } catch (error) {
        console.error('Error guardando historial:', error);
      }
      
      return newHistory;
    });
  }, [maxItems]);
  
  const clearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem('searchHistory');
    } catch (error) {
      console.error('Error limpiando historial:', error);
    }
  }, []);
  
  const removeFromHistory = useCallback((index) => {
    setHistory(prevHistory => {
      const newHistory = prevHistory.filter((_, i) => i !== index);
      
      try {
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      } catch (error) {
        console.error('Error actualizando historial:', error);
      }
      
      return newHistory;
    });
  }, []);
  
  return {
    history,
    addToHistory,
    clearHistory,
    removeFromHistory,
    hasHistory: history.length > 0
  };
};

