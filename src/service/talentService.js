import ApiService from './appiService.js';

/**
 * Servicio para obtener datos del mapa de talento
 */
class TalentService extends ApiService {
  constructor() {
    super('ORGCHART'); // Usar el nombre de la API de Amplify
  }

  /**
   * Obtiene los niveles de talento
   * @param {string} organizationId - ID de la organización
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Datos de niveles de talento
   */
  async getTalentLevels(collaboratorId = '1111111', usuarioActualDatos = 'Spanish (Latin America)') {
     const path = "/orgchartmapatalento";
     const options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${usuarioActualDatos}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };
    
    const mockData = [
      { 
        name: 'Alto Potencial', 
        percentage: 20, 
        color: '#0052CC',
        description: 'Colaboradores con alto potencial de crecimiento',
        count: 45
      },
      { 
        name: 'Talento promesa', 
        percentage: 30, 
        color: '#00B8D9',
        description: 'Colaboradores con potencial prometedor',
        count: 67
      },
      { 
        name: 'Talento Esencial', 
        percentage: 50, 
        color: '#36B37E',
        description: 'Colaboradores esenciales para la operación',
        count: 112
      }
    ];

    const fetchOptions = { ...options, mockData: mockData };
    return this.fetchData(path, fetchOptions, { useAmplify: true });
  }

  /**
   * Obtiene estadísticas detalladas del talento
   * @param {string} organizationId - ID de la organización
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Estadísticas detalladas
   */

  /*
  async getTalentStatistics(collaboratorId = '1111111', usuarioActualDatos = 'Spanish (Latin America)') {
     const path = "/orgchartmapatalento";
     const options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${usuarioActualDatos}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };
    
    const mockData = {
      totalEmployees: 224,
      talentDistribution: {
        altoPotencial: 20,
        talentoPromesa: 30,
        talentoEsencial: 50
      },
      trends: {
        monthlyGrowth: 2.5,
        retentionRate: 94.2,
        promotionRate: 8.7
      },
      lastAssessment: "2024-03-15",
      nextAssessment: "2024-09-15"
    };

    const fetchOptions = { ...options, mockData: mockData };
    return this.fetchData(path, fetchOptions, { useAmplify: false });
  }
*/
  /**
   * Obtiene los datos completos del mapa de talento
   * @param {string} organizationId - ID de la organización
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Datos completos del mapa de talento
   */
 async getTalentMap(collaboratorId = '1111111', usuarioActualDatos = 'Spanish (Latin America)') {
     const path = "/orgchartmapatalento";
     const options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${usuarioActualDatos}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };
    
    try {
      // Cargar datos en paralelo
      const [levelsResponse] = await Promise.all([
        this.getTalentLevels(collaboratorId, usuarioActualDatos, options)
      ]);

      const talentMapData = {
        levels: levelsResponse.data,
        chartConfig: {
          type: 'triangular',
          animated: true,
          showTooltips: true
        },
        lastUpdated: new Date().toISOString()
      };

      const fetchOptions = { ...options, mockData: talentMapData };
      console.log("MAP",talentMapData)
      return this.fetchData(path, fetchOptions, { delay: false, useAmplify: true });
    } catch (error) {
      console.error('Error cargando datos del mapa de talento:', error);
      throw error;
    }
  }
}

export default TalentService;

