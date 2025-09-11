// Utilidades para búsqueda y validación de datos

// Función para validar términos de búsqueda
export const validateSearchTerm = (term) => {
  const errors = [];
  
  if (!term) {
    errors.push('El término de búsqueda es requerido');
    return { isValid: false, errors };
  }
  
  if (typeof term !== 'string') {
    errors.push('El término de búsqueda debe ser texto');
    return { isValid: false, errors };
  }
  
  const trimmedTerm = term.trim();
  
  if (trimmedTerm.length === 0) {
    errors.push('El término de búsqueda no puede estar vacío');
    return { isValid: false, errors };
  }
  
  if (trimmedTerm.length < 2) {
    errors.push('El término de búsqueda debe tener al menos 2 caracteres');
    return { isValid: false, errors };
  }
  
  if (trimmedTerm.length > 100) {
    errors.push('El término de búsqueda no puede exceder 100 caracteres');
    return { isValid: false, errors };
  }
  
  // Validar caracteres especiales peligrosos
  const dangerousChars = /[<>\"'&]/;
  if (dangerousChars.test(trimmedTerm)) {
    errors.push('El término de búsqueda contiene caracteres no permitidos');
    return { isValid: false, errors };
  }
  
  return { isValid: true, errors: [], cleanTerm: trimmedTerm };
};

// Función para validar ID de usuario
export const validateUserId = (userId) => {
  if (!userId) {
    return { isValid: false, error: 'ID de usuario es requerido' };
  }
  
  if (typeof userId !== 'string' && typeof userId !== 'number') {
    return { isValid: false, error: 'ID de usuario debe ser texto o número' };
  }
  
  const stringId = String(userId).trim();
  
  if (stringId.length === 0) {
    return { isValid: false, error: 'ID de usuario no puede estar vacío' };
  }
  
  // Validar formato (solo números y letras, guiones y guiones bajos)
  const validFormat = /^[a-zA-Z0-9_-]+$/;
  if (!validFormat.test(stringId)) {
    return { isValid: false, error: 'ID de usuario contiene caracteres no válidos' };
  }
  
  return { isValid: true, cleanId: stringId };
};

// Función para filtrar y ordenar resultados de búsqueda
export const filterAndSortResults = (results, options = {}) => {
  const {
    sortBy = 'name',
    sortOrder = 'asc',
    filterBy = null,
    filterValue = null,
    maxResults = null
  } = options;
  
  if (!Array.isArray(results)) {
    return [];
  }
  
  let filteredResults = [...results];
  
  // Aplicar filtros
  if (filterBy && filterValue) {
    filteredResults = filteredResults.filter(user => {
      const fieldValue = user[filterBy];
      if (!fieldValue) return false;
      
      return String(fieldValue)
        .toLowerCase()
        .includes(String(filterValue).toLowerCase());
    });
  }
  
  // Aplicar ordenamiento
  filteredResults.sort((a, b) => {
    const aValue = a[sortBy] || '';
    const bValue = b[sortBy] || '';
    
    const comparison = String(aValue).localeCompare(String(bValue));
    return sortOrder === 'desc' ? -comparison : comparison;
  });
  
  // Limitar resultados si se especifica
  if (maxResults && maxResults > 0) {
    filteredResults = filteredResults.slice(0, maxResults);
  }
  
  return filteredResults;
};

// Función para resaltar términos de búsqueda en texto
export const highlightSearchTerm = (text, searchTerm) => {
  if (!text || !searchTerm) return text;
  
  const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

// Función para escapar caracteres especiales en regex
const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// Función para formatear resultados para exportación
export const formatResultsForExport = (results, format = 'csv') => {
  if (!Array.isArray(results) || results.length === 0) {
    return '';
  }
  
  switch (format.toLowerCase()) {
    case 'csv':
      return formatToCsv(results);
    case 'json':
      return JSON.stringify(results, null, 2);
    case 'txt':
      return formatToText(results);
    default:
      throw new Error(`Formato no soportado: ${format}`);
  }
};

// Función auxiliar para formatear a CSV
const formatToCsv = (results) => {
  const headers = ['ID', 'Nombre', 'Organización', 'Posición', 'País', 'Estado'];
  const csvRows = [headers.join(',')];
  
  results.forEach(user => {
    const row = [
      escapeCsvField(user.id),
      escapeCsvField(user.name),
      escapeCsvField(user.organization),
      escapeCsvField(user.position),
      escapeCsvField(user.country),
      escapeCsvField(user.status)
    ];
    csvRows.push(row.join(','));
  });
  
  return csvRows.join('\n');
};

// Función auxiliar para formatear a texto plano
const formatToText = (results) => {
  return results.map(user => {
    return `ID: ${user.id}
Nombre: ${user.name}
Organización: ${user.organization}
Posición: ${user.position}
País: ${user.country}
Estado: ${user.status}
---`;
  }).join('\n');
};

// Función auxiliar para escapar campos CSV
const escapeCsvField = (field) => {
  if (!field) return '';
  
  const stringField = String(field);
  
  // Si contiene comas, comillas o saltos de línea, envolver en comillas
  if (stringField.includes(',') || stringField.includes('"') || stringField.includes('\n')) {
    return `"${stringField.replace(/"/g, '""')}"`;
  }
  
  return stringField;
};

// Función para generar estadísticas de búsqueda
export const generateSearchStats = (results) => {
  if (!Array.isArray(results)) {
    return {
      total: 0,
      byOrganization: {},
      byCountry: {},
      byStatus: {}
    };
  }
  
  const stats = {
    total: results.length,
    byOrganization: {},
    byCountry: {},
    byStatus: {}
  };
  
  results.forEach(user => {
    // Estadísticas por organización
    const org = user.organization || 'Sin organización';
    stats.byOrganization[org] = (stats.byOrganization[org] || 0) + 1;
    
    // Estadísticas por país
    const country = user.country || 'Sin país';
    stats.byCountry[country] = (stats.byCountry[country] || 0) + 1;
    
    // Estadísticas por estado
    const status = user.status || 'Sin estado';
    stats.byStatus[status] = (stats.byStatus[status] || 0) + 1;
  });
  
  return stats;
};

// Función para detectar posibles duplicados
export const detectDuplicates = (results) => {
  if (!Array.isArray(results)) return [];
  
  const duplicates = [];
  const seen = new Map();
  
  results.forEach((user, index) => {
    // Crear una clave única basada en nombre y organización
    const key = `${user.name?.toLowerCase()}_${user.organization?.toLowerCase()}`;
    
    if (seen.has(key)) {
      duplicates.push({
        original: seen.get(key),
        duplicate: { ...user, index }
      });
    } else {
      seen.set(key, { ...user, index });
    }
  });
  
  return duplicates;
};

// Función para validar la estructura de datos de usuario
export const validateUserData = (userData) => {
  const errors = [];
  
  if (!userData || typeof userData !== 'object') {
    errors.push('Datos de usuario inválidos');
    return { isValid: false, errors };
  }
  
  // Campos requeridos
  const requiredFields = ['id', 'name'];
  requiredFields.forEach(field => {
    if (!userData[field]) {
      errors.push(`Campo requerido faltante: ${field}`);
    }
  });
  
  // Validaciones específicas
  if (userData.id && typeof userData.id !== 'string' && typeof userData.id !== 'number') {
    errors.push('ID debe ser texto o número');
  }
  
  if (userData.name && typeof userData.name !== 'string') {
    errors.push('Nombre debe ser texto');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

