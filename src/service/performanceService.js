import ApiService from './appiService';

/**
 * Servicio para obtener datos de desempeño y competencias
 */
class PerformanceService extends ApiService {
  constructor() {
    super('ORGCHART');
  }

  /**
   * Obtiene las categorías de desempeño
   * @param {string} organizationId - ID de la organización
   * @returns {Promise} Datos de categorías de desempeño
   */
  async getPerformanceCategories(collaboratorId = '1111111', usuarioActualDatos = 'Spanish (Latin America)') {
    const path = '/orgchartperformance';
    const options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${usuarioActualDatos}'`,
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

    return this.fetchData(path, options, mockData);
  }

  /**
   * Obtiene métricas de desempeño por período
   * @param {string} organizationId - ID de la organización
   * @param {string} period - Período de evaluación
   * @returns {Promise} Métricas de desempeño
   */
  /*
  async getPerformanceMetrics(organizationId = 'bimbo-brasil', period = '2024-Q1') {
    const endpoint = `/api/v1/organizations/${organizationId}/performance-metrics`;
    
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

    return this.fetchData(endpoint, mockData);
  }
*/
  /**
   * Obtiene competencias específicas de un colaborador
   * @param {string} collaboratorId - ID del colaborador
   * @returns {Promise} Competencias del colaborador
   */
  /*
  async getCollaboratorCompetencies(collaboratorId) {
    const endpoint = `/api/v1/collaborators/${collaboratorId}/competencies`;
    
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

    return this.fetchData(endpoint, mockData);
  }
*/
  /**
   * Obtiene los datos completos de desempeño
   * @param {string} organizationId - ID de la organización
   * @returns {Promise} Datos completos de desempeño
   */
  /*
  async getPerformanceData(organizationId = 'bimbo-brasil') {
    const endpoint = `/api/v1/organizations/${organizationId}/performance-data`;
    
    try {
      // Cargar datos en paralelo
      const [categoriesResponse, metricsResponse] = await Promise.all([
        this.getPerformanceCategories(organizationId),
        this.getPerformanceMetrics(organizationId)
      ]);

      const performanceData = {
        categories: categoriesResponse.data,
        metrics: metricsResponse.data,
        chartConfig: {
          type: 'vertical-bar',
          showPercentages: true,
          colorScheme: 'performance'
        },
        lastUpdated: new Date().toISOString()
      };

      return this.fetchData(endpoint, performanceData, { delay: false });
    } catch (error) {
      console.error('Error cargando datos de desempeño:', error);
      throw error;
    }
  }*/
}

export default PerformanceService;

