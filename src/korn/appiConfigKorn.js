import ApiService from '../service/appiService';

/**
 * Servicio específico para la API 'ORGCHART'.
 * Extiende ApiService y define métodos específicos para los endpoints.
 */
class OrgchartService extends ApiService {
  constructor() {
    // Llama al constructor de ApiService con el nombre de la API
    super('ORGCHART');
  }

  /**
   * Llama al endpoint /pdfapi para obtener una URL certificada del PDF.
   * @param {string} idUsuario - El ID del usuario (member.ID_USUARIO)
   * @returns {Promise<string>} Promesa que resuelve con la URL certificada.
   */
  async getPDFUrl(idUsuario) {
    const path = '/pdfapi';
    const options = {
      queryStringParameters: {
        IDUSUARIO: idUsuario,
      }
    };

    try {
      const response = await this.fetchData(path, options);
      // Asumiendo que la respuesta contiene la URL en un campo llamado 'url'
      // Ajustar si el nombre del campo es diferente en la respuesta real de la API
      if (response && response.data && response.data.url) {
        return response.data.url;
      } else {
        throw new Error('La respuesta de la API no contiene la URL certificada esperada.');
      }
    } catch (error) {
      console.error('Error al obtener la URL del PDF:', error);
      throw error;
    }
  }

  // Aquí se pueden añadir otros métodos específicos para la API 'ORGCHART'
  // Por ejemplo:
  // async getOrgchartData(id) { ... }
}

export default new OrgchartService();