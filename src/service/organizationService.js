import ApiService from './apiService.js';

/**
 * Servicio para obtener datos del organigrama
 */
class OrganizationService extends ApiService {
  constructor() {
    super('/orgchartmanagerdata');
  }

  /**
   * Obtiene los datos del colaborador principal
   * @param {string} collaboratorId - ID del colaborador
   * @returns {Promise} Datos del colaborador principal
   */
  async getMainCollaborator(collaboratorId = '2786036', usuarioActualDatos = 'Spanish (Latin America)') {
    const options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${usuarioActualDatos}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };
    
    const mockData = {
      name: "Zurita Robles Kadir",
      id: "2786036",
      organization: "Organización Bimbo Brasil",
      position: "Key Position",
      positionClass: "ELDP Class 26",
      role: "Supervisor production",
      avatarUrl: null,
      age: "42 años",
      companyAntiquity: "15/03/2018",
      positionAntiquity: "15/03/2018"
    };

    return this.fetchData(path, options, mockData);
  }

  /**
   * Obtiene los miembros del equipo
   * @param {string} managerId - ID del manager
   * @returns {Promise} Array de miembros del equipo
   */
  async getTeamMembers(managerId = '2786036') {
    const endpoint = `/api/v1/collaborators/${managerId}/team`;
    
    const mockData = [
      {
        name: "Connor O'Malley",
        id: "2786037",
        organization: "Organización Bimbo Brasil",
        position: "Key Position",
        positionClass: "ELDP Class 26",
        role: "Supervisor production",
        avatarUrl: null,
        borderColor: "#36B37E"
      },
      {
        name: "Mateo Ríos",
        id: "2786038",
        organization: "Organización Bimbo Brasil",
        position: "Key Position",
        positionClass: "D Class 26",
        role: "Supervisor production",
        avatarUrl: null,
        borderColor: "#FFAB00"
      },
      {
        name: "Sofia Dimitrova",
        id: "2786039",
        organization: "Organización Bimbo Brasil",
        position: "Key Position",
        positionClass: "D Class 26",
        role: "Supervisor production",
        avatarUrl: null,
        borderColor: "#00B8D9"
      },
      {
        name: "Alejandro Guzmán",
        id: "2786040",
        organization: "Organización Bimbo Brasil",
        position: "Key Position",
        positionClass: "D Class 26",
        role: "Supervisor production",
        avatarUrl: null,
        borderColor: "#FF5630"
      }
    ];

    return this.fetchData(endpoint, mockData);
  }

  /**
   * Obtiene los datos completos del organigrama
   * @param {string} organizationId - ID de la organización
   * @returns {Promise} Datos completos del organigrama
   */
  async getOrganizationChart(organizationId = 'bimbo-brasil') {
    const endpoint = `/api/v1/organizations/${organizationId}/chart`;
    
    try {
      // Cargar datos en paralelo
      const [mainCollaboratorResponse, teamMembersResponse] = await Promise.all([
        this.getMainCollaborator(),
        this.getTeamMembers()
      ]);

      const organizationData = {
        mainCollaborator: mainCollaboratorResponse.data,
        teamMembers: teamMembersResponse.data,
        headerTitle: "Daniel Jones / Zurita Robles Kadir",
        bannerSearch: "Equipo de Trabajo",
        lastUpdated: new Date().toISOString()
      };

      return this.fetchData(endpoint, organizationData, { delay: false });
    } catch (error) {
      console.error('Error cargando datos del organigrama:', error);
      throw error;
    }
  }
}

export default OrganizationService;

