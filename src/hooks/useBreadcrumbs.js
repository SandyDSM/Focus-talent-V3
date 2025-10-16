import { useState, useEffect, useCallback } from 'react';

/**
 * Hook personalizado para manejar el estado de breadcrumbs del organigrama
 * @returns {Object} Objeto con breadcrumbs y funciones para manejarlos
 */
const useBreadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Cargar breadcrumbs desde localStorage al inicializar
  useEffect(() => {
    const savedBreadcrumbs = localStorage.getItem('orgBreadcrumbs');
    if (savedBreadcrumbs) {
      try {
        const parsed = JSON.parse(savedBreadcrumbs);
        setBreadcrumbs(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.error('Error parsing breadcrumbs from localStorage:', error);
        setBreadcrumbs([]);
      }
    }
  }, []);

  // Guardar breadcrumbs en localStorage cada vez que cambien
  useEffect(() => {
    try {
      localStorage.setItem('orgBreadcrumbs', JSON.stringify(breadcrumbs));
    } catch (error) {
      console.error('Error saving breadcrumbs to localStorage:', error);
    }
  }, [breadcrumbs]);

  /**
   * Agregar un nuevo breadcrumb
   * @param {Object} collaborator - Datos del colaborador
   * @param {string} collaborator.id - ID del colaborador
   * @param {string} collaborator.name - Nombre completo del colaborador
   * @param {string} collaborator.position - Puesto del colaborador
   */
  const addBreadcrumb = useCallback((collaborator) => {
    if (!collaborator || !collaborator.id) return;

    setBreadcrumbs(prevBreadcrumbs => {
      // Verificar si el colaborador ya existe en los breadcrumbs
      const existingIndex = prevBreadcrumbs.findIndex(b => b.id === collaborator.id);
      
      if (existingIndex !== -1) {
        // Si existe, truncar los breadcrumbs hasta ese punto
        return prevBreadcrumbs.slice(0, existingIndex + 1);
      } else {
        // Si no existe, agregarlo al final
        const newBreadcrumb = {
          id: collaborator.id,
          name: collaborator.name,
          position: collaborator.position
        };
        return [...prevBreadcrumbs, newBreadcrumb];
      }
    });
  }, []);

  /**
   * Navegar a un breadcrumb específico (truncar los breadcrumbs posteriores)
   * @param {number} index - Índice del breadcrumb al que navegar
   */
  const navigateToBreadcrumb = useCallback((index) => {
    if (index >= 0 && index < breadcrumbs.length) {
      setBreadcrumbs(prevBreadcrumbs => prevBreadcrumbs.slice(0, index + 1));
    } else if (index === -1) {
      // Navegar al inicio (limpiar todos los breadcrumbs)
      setBreadcrumbs([]);
    }
  }, [breadcrumbs.length]);

  /**
   * Limpiar todos los breadcrumbs
   */
 const STORAGE_KEY = 'orgBreadcrumbs';

const clearBreadcrumbs = useCallback(() => {
  try {
    // Opción A: eliminar la clave completamente
    localStorage.removeItem(STORAGE_KEY, JSON.stringify(breadcrumbs));
    console.log("borrando")
    // Opción B: dejarla como arreglo vacío (elige una y sé consistente)
    // localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 1, data: [] }));
  } catch (e) {
    console.error('No se pudo limpiar localStorage:', e);
  }
  // Actualiza el estado para la UI
  setBreadcrumbs([]);
}, []);


  /**
   * Obtener el colaborador actual (último breadcrumb)
   * @returns {Object|null} Datos del colaborador actual o null si no hay breadcrumbs
   */
  const getCurrentCollaborator = () => {
    return breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1] : null;
  };

  /**
   * Verificar si un colaborador ya está en los breadcrumbs
   * @param {string} collaboratorId - ID del colaborador a verificar
   * @returns {boolean} True si el colaborador está en los breadcrumbs
   */
  const isInBreadcrumbs = (collaboratorId) => {
    return breadcrumbs.some(b => b.id === collaboratorId);
  };

  return {
    breadcrumbs,
    addBreadcrumb,
    navigateToBreadcrumb,
    clearBreadcrumbs,
    getCurrentCollaborator,
    isInBreadcrumbs
  };
};

export default useBreadcrumbs;

