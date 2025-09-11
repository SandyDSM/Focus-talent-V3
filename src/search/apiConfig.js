import ApiService from '../service/appiService';

// Nombre de la API para el constructor de ApiService
export const API_NAME = 'ORGCHART'; // Este es el apiName que usa tu ApiService

// Endpoints específicos
export const API_ENDPOINTS = {
  SEARCH_ORG: '/searchorg',
  // Agregar otros endpoints aquí según sea necesario
};

// Configuración de la API (manteniendo las configuraciones que no dependen de la URL base)
export const API_CONFIG = {
  // Timeout para las peticiones (en milisegundos) - si tu ApiService lo usa
  timeout: 30000,
  
  // Headers por defecto - si tu ApiService los maneja
  defaultHeaders: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  
  // Configuración de reintentos - si tu ApiService lo usa
  retry: {
    attempts: 3,
    delay: 1000 // milisegundos
  }
};

// Parámetros por defecto
export const DEFAULT_PARAMS = {
  // ID de usuario por defecto si no se proporciona
  DEFAULT_USER_ID: '1111111',
  
  // Límite de resultados por página
  PAGE_SIZE: 50,
  
  // Tiempo mínimo de búsqueda (para evitar búsquedas muy frecuentes)
  SEARCH_DEBOUNCE_MS: 300
};

// Función para crear una instancia de ApiService
export const createApiServiceInstance = () => {
  return new ApiService(API_NAME);
};

// Función para obtener headers con autenticación si es necesaria
export const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  
  return {
    ...API_CONFIG.defaultHeaders,
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

