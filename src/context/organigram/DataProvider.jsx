import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { loadOrganizationData } from '../../service/index.js';

// Estados de carga
const LOADING_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};

// Acciones del reducer
const DATA_ACTIONS = {
  START_LOADING: 'START_LOADING',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  LOAD_ERROR: 'LOAD_ERROR',
  UPDATE_PROGRESS: 'UPDATE_PROGRESS',
  RESET: 'RESET'
};

// Estado inicial
const initialState = {
  status: LOADING_STATES.IDLE,
  data: null,
  error: null,
  progress: 0,
  lastUpdated: null
};

// Reducer para manejar el estado de los datos
const dataReducer = (state, action) => {
  switch (action.type) {
    case DATA_ACTIONS.START_LOADING:
      return {
        ...state,
        status: LOADING_STATES.LOADING,
        error: null,
        progress: 0
      };
    
    case DATA_ACTIONS.UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };
    
    case DATA_ACTIONS.LOAD_SUCCESS:
      return {
        ...state,
        status: LOADING_STATES.SUCCESS,
        data: action.payload,
        error: null,
        progress: 100,
        lastUpdated: new Date().toISOString()
      };
    
    case DATA_ACTIONS.LOAD_ERROR:
      return {
        ...state,
        status: LOADING_STATES.ERROR,
        error: action.payload,
        progress: 0
      };
    
    case DATA_ACTIONS.RESET:
      return initialState;
    
    default:
      return state;
  }
};

// Contexto de datos
const DataContext = createContext();

/**
 * Proveedor de datos para el organigrama
 * @param {Object} props - Propiedades del componente
 * @param {string} props.organizationId - ID de la organización
 * @param {string} props.collaboratorId - ID del colaborador principal
 * @param {ReactNode} props.children - Componentes hijos
 * @returns {JSX.Element} Proveedor de contexto
 */
export const DataProvider = ({ 
  collaboratorId, idioma,
  children 
}) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  // Función para cargar datos
  const loadData = async () => {
    try {
      dispatch({ type: DATA_ACTIONS.START_LOADING });
      
      // Simular progreso de carga
      const progressInterval = setInterval(() => {
        dispatch({ 
          type: DATA_ACTIONS.UPDATE_PROGRESS, 
          payload: Math.min(state.progress + 10, 90) 
        });
      }, 200);

      const result = await loadOrganizationData(collaboratorId, idioma);
      
      clearInterval(progressInterval);
      dispatch({ 
        type: DATA_ACTIONS.LOAD_SUCCESS, 
        payload: result 
      });
      
      return result;
    } catch (error) {
      dispatch({ 
        type: DATA_ACTIONS.LOAD_ERROR, 
        payload: error.message 
      });
      throw error;
    }
  };

  // Función para recargar datos
  const reloadData = () => {
    return loadData();
  };

  // Función para resetear estado
  const resetData = () => {
    dispatch({ type: DATA_ACTIONS.RESET });
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    loadData();
  }, [collaboratorId]);

  // Valor del contexto
  const contextValue = {
    // Estado
    ...state,
    
    // Estados derivados
    isLoading: state.status === LOADING_STATES.LOADING,
    isSuccess: state.status === LOADING_STATES.SUCCESS,
    isError: state.status === LOADING_STATES.ERROR,
    hasData: !!state.data,
    
    // Datos específicos
    organizationData: state.data?.organization || null,
    talentData: state.data?.talent || null,
    performanceData: state.data?.performance || null,
    successionData: state.data?.succession || null,
    
    // Funciones
    loadData,
    reloadData,
    resetData,
    
    // Configuración
    collaboratorId
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

/**
 * Hook para usar el contexto de datos
 * @returns {Object} Contexto de datos
 */
export const useDataContext = () => {
  const context = useContext(DataContext);
  
  if (!context) {
    throw new Error('useDataContext debe ser usado dentro de un DataProvider');
  }
  
  return context;
};

/**
 * Hook para obtener datos específicos del organigrama
 * @returns {Object} Datos del organigrama
 */
export const useOrganizationContext = () => {
  const { organizationData, isLoading, isError, error } = useDataContext();
  
  return {
    mainCollaborator: organizationData?.mainCollaborator || null,
    teamMembers: organizationData?.teamMembers || [],
    headerTitle: organizationData?.headerTitle || "",
    bannerSearch: organizationData?.bannerSearch || "",
    isLoading,
    isError,
    error
  };
};

/**
 * Hook para obtener datos del mapa de talento
 * @returns {Object} Datos del mapa de talento
 */
export const useTalentContext = () => {
  const { talentData, isLoading, isError, error } = useDataContext();
  //console.log("h",talentData)
  return {
    levels: talentData || [],
    chartConfig: talentData?.chartConfig || {},
    isLoading,
    isError,
    error
  };
  
};

/**
 * Hook para obtener datos de desempeño
 * @returns {Object} Datos de desempeño
 */
export const usePerformanceContext = () => {
  const { performanceData, isLoading, isError, error } = useDataContext();
  
  return {
    categories: performanceData || [],
    isLoading,
    isError,
    error
  };
};

/**
 * Hook para obtener datos de sucesión
 * @returns {Object} Datos de sucesión
 */
export const useSuccessionContext = () => {
  const { successionData, isLoading, isError, error } = useDataContext();
  
  //console.log("SCSD",successionData)
  return {
    mainCollaborator: successionData?.mainCollaborator || null,
    candidates: successionData || [],
    isLoading,
    isError,
    error
  };
};

export default DataProvider;

