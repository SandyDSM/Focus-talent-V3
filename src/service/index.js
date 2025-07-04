import React from "react";

/**
 * Archivo índice para exportar todos los servicios
 * Facilita la importación de servicios en los componentes
 */

import ApiService from './appiService.js';
import OrganizationService from './organizationService.js';
import TalentService from './talentService.js';
import PerformanceService from './performanceService.js';
import SuccessionService from './successionService.js';


// Instancias de servicios para uso global
export const organizationService = new OrganizationService();
export const talentService = new TalentService();
export const performanceService = new PerformanceService();
export const successionService = new SuccessionService();

// Exportar clases para instanciación personalizada
export {
  ApiService,
  OrganizationService,
  TalentService,
  PerformanceService,
  SuccessionService
};

/**
 * Función utilitaria para cargar todos los datos necesarios para el organigrama
 * @param {string} organizationId - ID de la organización
 * @param {string} collaboratorId - ID del colaborador principal
 * @returns {Promise} Objeto con todos los datos cargados
 */
export const loadOrganizationData = async (
  collaboratorId,
  idioma
) => {
  try {
    console.log('Iniciando carga de datos del organigrama...');

    // Mostrar indicador de carga
    const startTime = Date.now();
    
    // Cargar todos los datos en paralelo para mejor rendimiento
    const [
      organizationData,
      talentData,
      performanceData,
    ] = await Promise.all([
      organizationService.getOrganizationChart(collaboratorId, idioma),
      talentService.getTalentMap(collaboratorId, idioma),
      performanceService.getPerformanceData(collaboratorId, idioma),

    ]);

    const loadTime = Date.now() - startTime;
    console.log(`Datos cargados exitosamente en ${loadTime}ms`);

    return {
      organization: organizationData.data,
      talent: talentData.data,
      performance: performanceData.data,
      loadTime: loadTime,
      timestamp: new Date().toISOString()
    };

    

  } catch (error) {
    console.error('Error cargando datos del organigrama:', error);
    throw new Error(`Error al cargar datos: ${error.message}`);
  }
  
};

/**
 * Hook personalizado para manejar el estado de carga
 * @param {Function} loadFunction - Función de carga a ejecutar
 * @returns {Object} Estado de carga con datos, loading y error
 */
export const useAsyncData = (loadFunction) => {
  const [state, setState] = React.useState({
    data: null,
    loading: true,
    error: null
  });

  React.useEffect(() => {
    const loadData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const result = await loadFunction();
        setState({ data: result, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error.message });
      }
    };

    loadData();
  }, []);

  return state;
};


