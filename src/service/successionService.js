import ApiService from './appiService';

/**
 * Servicio para obtener datos de planes de sucesión
 */
class SuccessionService extends ApiService {
  constructor() {
    super('https://api.succession.com');
  }

  /**
   * Obtiene los candidatos de sucesión para un colaborador
   * @param {string} collaboratorId - ID del colaborador
   * @returns {Promise} Candidatos de sucesión
   */
  async getSuccessionCandidates(collaboratorId = '2786036') {
    const endpoint = `/api/v1/collaborators/${collaboratorId}/succession-candidates`;
    
    const mockData = [
      {
        name: "Ricardo Fernández",
        id: "3456789",
        organization: "Marketing Digital",
        location: "MEX",
        age: "35 años",
        companyAntiquity: "8/10/2019",
        positionAntiquity: "8/10/2019",
        potential: "Talento promesa",
        performanceConclusion: "Supera",
        leadershipSkills: "Gran trabajo",
        businessContribution: "Sobresaliente",
        assessmentKF: "2023",
        profileMatch: "-",
        pid: "85%",
        pidColor: "#36B37E",
        avatarUrl: null,
        borderColor: "#9254DE",
        statusColor: "#36B37E",
        readiness: "short-term",
        riskLevel: "low"
      },
      {
        name: "Laura Mendoza",
        id: "4567890",
        organization: "Finanzas Corporativas",
        location: "COL",
        age: "42 años",
        companyAntiquity: "3/5/2018",
        positionAntiquity: "3/5/2018",
        potential: "Alto potencial",
        performanceConclusion: "Sobresaliente",
        leadershipSkills: "Sobresaliente",
        businessContribution: "Por encima de lo esperado",
        assessmentKF: "2024",
        profileMatch: "-",
        pid: "92%",
        pidColor: "#36B37E",
        avatarUrl: null,
        borderColor: "#F759AB",
        statusColor: "#FFAB00",
        readiness: "medium-term",
        riskLevel: "medium"
      },
      {
        name: "Carlos Vega",
        id: "5678901",
        organization: "Operaciones Logísticas",
        location: "ARG",
        age: "39 años",
        companyAntiquity: "12/7/2020",
        positionAntiquity: "12/7/2020",
        potential: "Talento Esencial",
        performanceConclusion: "Gran trabajo",
        leadershipSkills: "Supera",
        businessContribution: "Gran trabajo",
        assessmentKF: "2023",
        profileMatch: "-",
        pid: "78%",
        pidColor: "#36B37E",
        avatarUrl: null,
        borderColor: "#13C2C2",
        statusColor: "#FF5630",
        readiness: "long-term",
        riskLevel: "high"
      }
    ];

    return this.fetchData(endpoint, mockData);
  }

  /**
   * Obtiene el plan de desarrollo para un candidato
   * @param {string} candidateId - ID del candidato
   * @returns {Promise} Plan de desarrollo
   */
  async getDevelopmentPlan(candidateId) {
    const endpoint = `/api/v1/candidates/${candidateId}/development-plan`;
    
    const mockData = {
      candidateId: candidateId,
      currentProgress: Math.floor(Math.random() * 100),
      milestones: [
        {
          title: "Completar certificación en liderazgo",
          status: "completed",
          dueDate: "2024-02-15",
          progress: 100
        },
        {
          title: "Liderar proyecto cross-funcional",
          status: "in-progress",
          dueDate: "2024-06-30",
          progress: 65
        },
        {
          title: "Mentoría con ejecutivo senior",
          status: "pending",
          dueDate: "2024-09-15",
          progress: 0
        }
      ],
      competencyGaps: [
        "Gestión financiera avanzada",
        "Negociación estratégica",
        "Transformación digital"
      ],
      estimatedReadiness: "18 meses",
      lastReview: "2024-03-01"
    };

    return this.fetchData(endpoint, mockData);
  }

  /**
   * Obtiene métricas de riesgo de sucesión
   * @param {string} organizationId - ID de la organización
   * @returns {Promise} Métricas de riesgo
   */
  async getSuccessionRisk(organizationId = 'bimbo-brasil') {
    const endpoint = `/api/v1/organizations/${organizationId}/succession-risk`;
    
    const mockData = {
      organizationId: organizationId,
      overallRisk: "medium",
      keyPositionsAtRisk: 12,
      totalKeyPositions: 45,
      riskDistribution: {
        high: 8,
        medium: 15,
        low: 22
      },
      criticalGaps: [
        "Gerencia de Operaciones",
        "Dirección Comercial",
        "Jefatura de TI"
      ],
      averageReadiness: "24 meses",
      lastAssessment: "2024-03-01"
    };

    return this.fetchData(endpoint, mockData);
  }

  /**
   * Obtiene los datos completos de sucesión para un colaborador
   * @param {string} collaboratorId - ID del colaborador
   * @returns {Promise} Datos completos de sucesión
   */
  async getSuccessionData(collaboratorId = '2786036') {
    const endpoint = `/api/v1/collaborators/${collaboratorId}/succession-data`;
    
    try {
      // Cargar datos en paralelo
      const [candidatesResponse, riskResponse] = await Promise.all([
        this.getSuccessionCandidates(collaboratorId),
        this.getSuccessionRisk()
      ]);

      // Obtener planes de desarrollo para cada candidato
      const developmentPlans = await Promise.all(
        candidatesResponse.data.map(candidate => 
          this.getDevelopmentPlan(candidate.id)
        )
      );

      const successionData = {
        mainCollaborator: {
          id: collaboratorId,
          name: "Zurita Robles Kadir",
          position: "Supervisor Production",
          riskLevel: "medium"
        },
        candidates: candidatesResponse.data.map((candidate, index) => ({
          ...candidate,
          developmentPlan: developmentPlans[index].data
        })),
        riskMetrics: riskResponse.data,
        lastUpdated: new Date().toISOString()
      };

      return this.fetchData(endpoint, successionData, { delay: false });
    } catch (error) {
      console.error('Error cargando datos de sucesión:', error);
      throw error;
    }
  }
}

export default SuccessionService;

