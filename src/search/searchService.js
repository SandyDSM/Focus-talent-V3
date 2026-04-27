// Servicio específico para la búsqueda de usuarios, utilizando la clase ApiService

import { API_ENDPOINTS, DEFAULT_PARAMS, createApiServiceInstance } from "./apiConfig";

// Crear una instancia del servicio base
const apiService = createApiServiceInstance();

/**
 * Realiza la búsqueda de usuarios utilizando el ApiService configurado.
 * @param {string} searchTerm - El término para buscar.
 * @param {string} userId - El ID del usuario que realiza la búsqueda.
 * @returns {Promise<Array>} - Una promesa que resuelve a un array de usuarios transformados.
 */
export const searchUsers = async (searchTerm, userId) => {
  // Validar el término de búsqueda
  if (!searchTerm || typeof searchTerm !== 'string' || !searchTerm.trim()) {
    throw new Error("El término de búsqueda es requerido y no puede estar vacío.");
  }

  // Usar el ID de usuario proporcionado o el valor por defecto
  const finalUserId = userId || DEFAULT_PARAMS.DEFAULT_USER_ID;

  // Configurar los parámetros de la consulta para la API
  const options = {
    queryStringParameters: {
      BUSQUEDA: searchTerm.trim(),
      USERID: finalUserId,
    },
  };

  console.log("Iniciando búsqueda con ApiService:", {
    path: API_ENDPOINTS.SEARCH_ORG,
    params: options.queryStringParameters,
  });

  try {
    // Llamar al método fetchData del ApiService
    const response = await apiService.fetchData(API_ENDPOINTS.SEARCH_ORG, options, {
      useAmplify: true, // Forzar el uso de Amplify real
    });

    // El ApiService del usuario devuelve { success, data, ... }
    if (response.success && response.data) {
      // Transformar los datos recibidos a un formato consistente
        console.log("BUSQ",response.data)
      return transformSearchResults(response.data);
    } else {
      // Si success es false o no hay data, lanzar un error
      throw new Error(response.message || "La respuesta de la API no fue exitosa o no contenía datos.");
    }
  } catch (error) {
    console.error("Error durante la llamada a searchUsers:", error);
    // Re-lanzar el error para que sea manejado por el componente o hook que lo llamó
    throw new Error(`Error al realizar la búsqueda: ${error.message}`);
  }
};

/**
 * Transforma los datos crudos de la API a un formato estandarizado para la UI.
 * @param {any} apiData - Los datos recibidos de la API.
 * @returns {Array} - Un array de objetos de usuario estandarizados.
 */
const transformSearchResults = (apiData) => {
  let results = [];

  // Determinar si la data es un array o un objeto con una propiedad que es un array
  if (Array.isArray(apiData)) {
    results = apiData;
  } else if (apiData && Array.isArray(apiData.results)) {
    results = apiData.results;
  } else if (apiData && Array.isArray(apiData.data)) {
    results = apiData.data;
  } else if (apiData && typeof apiData === 'object') {
    // Si es un solo objeto, lo envolvemos en un array
    results = [apiData];
  }

  // Mapear cada resultado al formato de usuario deseado
  return results.map(transformUserData);
};

/**
 * Transforma un único objeto de usuario de la API al formato de la UI.
 * @param {Object} userData - El objeto de usuario de la API.
 * @returns {Object} - El objeto de usuario transformado.
 */
const transformUserData = (userData) => {
  return {
    id: userData.ID_COLABORADOR || 'N/A',
    name: userData.NOMBRE || 'Usuario',
    lastName: userData.APELLIDOS || 'Desconocido',
    organization: userData.ORGANIZACION || 'Organización no especificada',
    position: userData.PUESTO || 'Puesto no especificado',
    country: userData.PAIS || 'País no especificado',
    ubicacion: userData.UBICACION_GEOGRAFICA || null,
    avatar: userData.FOTO || null,
    email: userData.EMAIL || null,
    organization_id: userData.ORGANIZACION_ID || null,
    organization: userData.ORGANIZACION || null,
    nivel: userData.NIVEL || null,
    area: userData.AREA_FUNCIONAL || null,
    equipo: userData.EQUIPO || null,
    contratacion: userData.FECHA_CONTRATACION || null,
    internal_id: userData.INTERNAL_ID || null,
    id_jefe: userData.ID_JEFE || null,
    nombre_jefe: userData.NOMBRE_JEFE || null,
  };
};



