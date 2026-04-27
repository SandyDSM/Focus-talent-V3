import { API } from 'aws-amplify'; // Asegúrate de que aws-amplify esté instalado y configurado

/**
 * Servicio base para llamadas a API, adaptado para AWS Amplify API.get
 * Incluye simulación de latencia y errores para desarrollo/pruebas.
 */

// Función para simular delay de red
const simulateNetworkDelay = (min = 500, max = 1500) => {
  const delay = Math.random() * (max - min) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
};

// Función para simular posibles errores de red (5% de probabilidad)
const simulateNetworkError = () => {
  if (Math.random() < 0.05) {
    throw new Error('Error de conexión simulado');
  }
};

/**
 * Clase base para servicios de API
 */
class ApiService {
  constructor(apiName = 'ORGCHART') {
    this.apiName = apiName;
  }

  /**
   * Método genérico para realizar llamadas GET a endpoints de AWS Amplify.
   * Si `useAmplify` es true, utiliza `API.get`. De lo contrario, simula la llamada.
   * @param {string} path - Ruta del endpoint (ej: 
/ejemplo')
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @param {Object} config - Configuración adicional (useAmplify, delay, errorSimulation)
   * @returns {Promise} Promesa con los datos de la respuesta
   */
  async fetchData(path, options = {}, config = {}) {
    const { 
      useAmplify = true, // Controla si se usa AWS Amplify API.get o la simulación
      delay = false, 
      errorSimulation = false,
      minDelay = 500,
      maxDelay = 1500 
    } = config;

    try {
      if (useAmplify) {
        // Usar AWS Amplify API.get
        //console.log(`Llamada real a AWS Amplify: ${this.apiName}${path}`);
        const response = await API.get(this.apiName, path, options);
        //console.log(`Datos recibidos de Amplify:`, response);
        return { success: true, data: response, timestamp: new Date().toISOString(), path: path };
      } else {
        // Simular llamada (para desarrollo o si no se usa Amplify)
        if (delay) {
          await simulateNetworkDelay(minDelay, maxDelay);
        }
        if (errorSimulation) {
          simulateNetworkError();
        }

        // Aquí deberías proporcionar datos mock para la simulación si no usas Amplify
        // Por simplicidad, retornamos un objeto vacío o puedes pasar 'data' como un parámetro en config
        const mockData = options.mockData || {}; 
        //console.log(`Llamada simulada a: ${this.apiName}${path}`);
        //console.log(`Datos retornados (simulados):`, mockData);
        return { success: true, data: mockData, timestamp: new Date().toISOString(), path: path };
      }
    } catch (error) {
      console.error(`Error en endpoint ${path}:`, error.message);
      throw error;
    }
  }
}

export default ApiService;

