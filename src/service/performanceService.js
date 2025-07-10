import ApiService from './appiService.js';

/**
 * Servicio para obtener datos de desempeño y competencias
 */
class PerformanceService extends ApiService {
  constructor() {
    super('ORGCHART'); // Usar el nombre de la API de Amplify
  }

  /**
   * Obtiene las categorías de desempeño
   * @param {string} organizationId - ID de la organización
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Datos de categorías de desempeño
   */
  async getPerformanceCategories(collaboratorId, idioma) {
    const path = '/orgchartperformance';
    const options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${idioma}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };

    
    const mockData = [
      { 
        name: 'Sobresaliente', 
        percentage: 15, 
        color: '#0052CC',
        description: 'Desempeño excepcional, supera todas las expectativas',
        count: 34
      },
      { 
        name: 'Supera', 
        percentage: 25, 
        color: '#00B8D9',
        description: 'Desempeño por encima de las expectativas',
        count: 56
      },
      { 
        name: 'Gran trabajo', 
        percentage: 35, 
        color: '#36B37E',
        description: 'Cumple con todas las expectativas',
        count: 78
      },
      { 
        name: 'Necesita mejora', 
        percentage: 20, 
        color: '#FFAB00',
        description: 'Desempeño por debajo de las expectativas',
        count: 45
      },
      { 
        name: 'Por debajo de lo esperado', 
        percentage: 5, 
        color: '#FF8B00',
        description: 'Desempeño significativamente por debajo de las expectativas',
        count: 11
      },
      { 
        name: 'Salida', 
        percentage: 0, 
        color: '#FF5630',
        description: 'Requiere plan de salida',
        count: 0
      }
    ];

    const fetchOptions = { ...options, mockData: mockData };
    return this.fetchData(path, fetchOptions, { useAmplify: true });
  }

  /**
   * Obtiene métricas de desempeño por período
   * @param {string} organizationId - ID de la organización
   * @param {string} period - Período de evaluación
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Métricas de desempeño
   */
  /*
  async getPerformanceMetrics(collaboratorId = '1111111', idioma = 'Spanish (Latin America)', options = {}) {
    const path = '/orgchartperformance';
    options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${idioma}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };

    
    const mockData = {
      period: period,
      totalEvaluations: 224,
      averageScore: 3.8,
      improvementRate: 12.5,
      topPerformers: 34,
      underPerformers: 11,
      trends: {
        quarterlyImprovement: 5.2,
        yearOverYear: 8.7,
        departmentComparison: {
          production: 3.9,
          sales: 4.1,
          administration: 3.6,
          logistics: 3.8
        }
      },
      lastEvaluation: "2024-03-31",
      nextEvaluation: "2024-06-30"
    };

    const fetchOptions = { ...options, mockData: mockData };
    return this.fetchData(path, fetchOptions, { useAmplify: false });
  }
*/
  /**
   * Obtiene competencias específicas de un colaborador
   * @param {string} collaboratorId - ID del colaborador
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Competencias del colaborador
   */
  /*
  async getCollaboratorCompetencies(collaboratorId = '1111111', idioma = 'Spanish (Latin America)', options = {}) {
    const path = '/orgchartperformance';
    options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${idioma}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };
    
    const mockData = {
      collaboratorId: collaboratorId,
      competencies: [
        {
          name: 'Liderazgo',
          score: 4.2,
          level: 'Avanzado',
          color: '#36B37E'
        },
        {
          name: 'Comunicación',
          score: 3.8,
          level: 'Intermedio',
          color: '#00B8D9'
        },
        {
          name: 'Resolución de problemas',
          score: 4.5,
          level: 'Experto',
          color: '#0052CC'
        },
        {
          name: 'Trabajo en equipo',
          score: 4.0,
          level: 'Avanzado',
          color: '#36B37E'
        },
        {
          name: 'Adaptabilidad',
          score: 3.5,
          level: 'Intermedio',
          color: '#FFAB00'
        }
      ],
      overallScore: 4.0,
      lastAssessment: "2024-03-15"
    };

    const fetchOptions = { ...options, mockData: mockData };
    return this.fetchData(path, fetchOptions, { useAmplify: true });
  }
*/
  /**
   * Obtiene los datos completos de desempeño
   * @param {string} organizationId - ID de la organización
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Datos completos de desempeño
   */
  async getPerformanceData(collaboratorId, idioma, options = {}) {
    const path = '/orgchartperformance';
    options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${idioma}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };
    
    try {
      // Cargar datos en paralelo
      const [categoriesResponse] = await Promise.all([
        this.getPerformanceCategories(collaboratorId, idioma, options)
      ]);

      const performanceData = {
        categories: categoriesResponse.data,
        chartConfig: {
          type: 'vertical-bar',
          showPercentages: true,
          colorScheme: 'performance'
        },
        lastUpdated: new Date().toISOString()
      };

      const fetchOptions = { ...options, mockData: performanceData };
      //console.log('PERFO', performanceData.categories)
      return this.fetchData(path, fetchOptions, { delay: false, useAmplify: true });
    } catch (error) {
      console.error('Error cargando datos de desempeño:', error);
      throw error;
    }
  }
}

export default PerformanceService;

