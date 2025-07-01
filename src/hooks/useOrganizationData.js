import { useState, useEffect, useCallback } from 'react';
import { loadOrganizationData } from '../services/index.js';

/**
 * Hook personalizado para manejar la carga de datos del organigrama
 * @param {string} organizationId - ID de la organización
 * @param {string} collaboratorId - ID del colaborador principal
 * @returns {Object} Estado de carga con datos, loading, error y funciones de control
 */
export const useOrganizationData = (
  organizationId = 'bimbo-brasil', 
  collaboratorId = '2786036'
) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
    progress: 0
  });

  // Función para actualizar el progreso de carga
  const updateProgress = useCallback((progress) => {
    setState(prev => ({ ...prev, progress }));
  }, []);

  // Función para cargar datos
  const loadData = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null, progress: 0 }));
      
      // Simular progreso de carga
      updateProgress(25);
      
      const result = await loadOrganizationData(organizationId, collaboratorId);
      
      updateProgress(100);
      
      setState({ 
        data: result, 
        loading: false, 
        error: null, 
        progress: 100 
      });
      
      return result;
    } catch (error) {
      setState({ 
        data: null, 
        loading: false, 
        error: error.message, 
        progress: 0 
      });
      throw error;
    }
  }, [organizationId, collaboratorId, updateProgress]);

  // Función para recargar datos
  const reload = useCallback(() => {
    return loadData();
  }, [loadData]);

  // Cargar datos al montar el componente
  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    ...state,
    reload,
    isLoading: state.loading,
    hasError: !!state.error,
    hasData: !!state.data
  };
};

/**
 * Hook para cargar datos específicos de un servicio
 * @param {Function} serviceFunction - Función del servicio a ejecutar
 * @param {Array} dependencies - Dependencias para recargar
 * @returns {Object} Estado de carga
 */
export const useServiceData = (serviceFunction, dependencies = []) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  const loadData = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const result = await serviceFunction();
      setState({ 
        data: result.data, 
        loading: false, 
        error: null 
      });
    } catch (error) {
      setState({ 
        data: null, 
        loading: false, 
        error: error.message 
      });
    }
  }, dependencies);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    ...state,
    reload: loadData,
    isLoading: state.loading,
    hasError: !!state.error,
    hasData: !!state.data
  };
};

export default useOrganizationData;

