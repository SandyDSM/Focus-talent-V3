import ApiService from './appiService';

/**
 * Servicio para obtener datos del organigrama
 */
class OrganizationService extends ApiService {
  constructor() {
    super('ORGCHART'); // Usar el nombre de la API de Amplify
  }

  /**
   * Obtiene los datos del colaborador principal
   * @param {string} collaboratorId - ID del colaborador
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Datos del colaborador principal
   */
  async getMainCollaborator(collaboratorId, idioma, options = {}) {
    const path = '/orgchartmanagerdata';
    
     options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${idioma}'`,
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

    // Combinar opciones del usuario con mockData para simulación
    const fetchOptions = { ...options, mockData: mockData };

    // Por defecto, usar Amplify. Si necesitas simular, pasa { useAmplify: false } en el config
    return this.fetchData(path, fetchOptions, { useAmplify: true }); 
  }

  /**
   * Obtiene los miembros del equipo
   * @param {string} managerId - ID del manager
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Array de miembros del equipo
   */
  async getTeamMembers(collaboratorId, idioma, options = {}) {
     const path = '/orgchartteamdata';
     options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${idioma}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };
    
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

    const fetchOptions = { ...options, mockData: mockData };
    return this.fetchData(path, fetchOptions, { useAmplify: true });
  }

  /**
   * Obtiene los datos completos del organigrama
   * @param {string} organizationId - ID de la organización
   * @param {Object} options - Opciones para la llamada (headers, queryStringParameters, etc.)
   * @returns {Promise} Datos completos del organigrama
   */
  async getOrganizationChart(collaboratorId, idioma, options = {}) {
    const path = '/orgchartteamdata';
    
     options = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        IDIOMA: `'${idioma}'`,
        USER_ID: `'${collaboratorId}'`
      }
    };
    
    try {
      // Cargar datos en paralelo
      const [mainCollaboratorResponse, teamMembersResponse] = await Promise.all([
        this.getMainCollaborator(collaboratorId, idioma, options),
        this.getTeamMembers(collaboratorId, idioma, options)
      ]);

      const organizationData = {
        mainCollaborator: mainCollaboratorResponse.data[0],
        teamMembers: teamMembersResponse.data,
        lastUpdated: new Date().toISOString()
      };

      const fetchOptions = { ...options, mockData: organizationData };

      //console.log("HERE_____Col",mainCollaboratorResponse.data[0])
      //console.log("TEAM",organizationData.teamMembers)
      return this.fetchData(path, fetchOptions, { delay: false, useAmplify: false });
    } catch (error) {
      console.error('Error cargando datos del organigrama:', error);
      throw error;
    }
  }
}

export default OrganizationService;

