import { IconProfile, Piramide } from '../ui-components';

import React from 'react';
import EncabezadoSuccs from './EncabezadoSuccs';
import { useTranslation } from 'react-i18next';

/**
 * Componente que muestra un modal con información detallada de un colaborador principal
 * y tres colaboradores secundarios con sus datos de desempeño
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.mainCollaborator - Datos del colaborador principal
 * @param {Array} props.teamMembers - Array de colaboradores secundarios
 * @returns {JSX.Element} Componente de modal de colaborador
 */
const CollaboratorModal = ({ 
  mainCollaborator ,
  teamMembers = [] ,
  borde,
  propiedad,
  PERF_ID,
  perf_text,
}) => {
  // Limitar a mostrar solo 3 colaboradores
  const displayTeamMembers = Array.isArray(teamMembers) ? teamMembers.slice(0, 3) : [];

  // Función para generar iniciales a partir del nombre
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  // Función para determinar el color del PID según el valor
  const getPidColor = (pidValue) => {
    const numericValue = parseInt(pidValue);
    if (numericValue >= 70) return "#36B37E"; // Verde
    if (numericValue >= 45) return "#FFAB00"; // Amarillo
    return "#FF5630"; // Rojo
  };

  //Para realizar traducciones
  const { t } = useTranslation();

  console.log("HERE!!!", mainCollaborator)
  return (
    <div className="collaborator-modal bg-white rounded-lg shadow-lg p-6 max-w-9/10 mx-auto">
      {/* Encabezado con información del colaborador principal */}
      <div className="flex justify-between items-center mb-8 pb-2">
        <div className="flex items-center">
          <div className={`avatar-container w-20 h-20 rounded-full bg-blue-500 border-4 mr-4 overflow-hidden ${borde[PERF_ID]}`}>
            {mainCollaborator.avatarUrl || (mainCollaborator.avatarUrl != "") ? (
              <img src={mainCollaborator.avatarUrl} alt={mainCollaborator.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2)
                .toUpperCase()} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                {getInitials(mainCollaborator.name)}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{mainCollaborator.name}</h2>
            <div className="flex items-center text-gray-600 mt-1">
              <IconProfile type='id'/>
              <span className="mr-4">{mainCollaborator.id}</span>
              <IconProfile type='Organitation'/>
              <span>{mainCollaborator.organization}</span>
            </div>
            <div className={`text-sm rounded-full border-4 px-2 size-fit ${borde[PERF_ID]}`}>
            <p>{`${t('Desempeno')} ${perf_text}`}</p>
            </div>
          </div>
        </div>
        <div className="text-right flex gap-4 mr-10 items-center">
          <div>
            <div className="text-lg font-medium text-gray-800">{mainCollaborator.age}</div>
            <div className="text-gray-800 font-bold">{mainCollaborator.role}</div>
          </div>
          <div className="scale-200 m-4">
            <Piramide property1={propiedad}/>
          </div>
        </div>
      </div>

      {/* Sección de colaboradores secundarios */}
      <div>
        <div className="grid grid-cols-3 gap-6">
          {displayTeamMembers.map((member, index) => (
            <div key={index} className="team-member relative overflow-hidden">
              <EncabezadoSuccs
                member = {member}
                getInitials = {getInitials}
                borde = {borde}
              />
          </div>
          ))}
        </div>
      </div>

      {/* Leyenda de Readiness y PID */}
      <div className="mt-8 pt-4 border-t flex justify-between">
        <div className="readiness">
          <span className="text-sm font-medium mr-2">Readiness:</span>
          <span className="inline-flex items-center mr-3">
            <span className="w-2 h-3 bg-green-500 mr-1 rounded-l-sm"></span>
            <span className="text-xs">{t('Listo_ahora')}</span>
          </span>
          <span className="inline-flex items-center mr-3">
            <span className="w-2 h-3 bg-yellow-400 mr-1 rounded-l-sm"></span>
            <span className="text-xs">{t('Mediano_Plazo')}</span>
          </span>
          <span className="inline-flex items-center">
            <span className="w-2 h-3 bg-orange-500 mr-1 rounded-l-sm"></span>
            <span className="text-xs">{t('Largo_Plazo')}</span>
          </span>
        </div>
        <div className="pid">
          <span className="text-sm font-medium mr-2">PID:</span>
          <span className="inline-flex items-center mr-3">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
            <span className="text-xs">{t('Plan_Avanzado')}</span>
          </span>
          <span className="inline-flex items-center mr-3">
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></span>
            <span className="text-xs">{t('Plan_Creado')}</span>
          </span>
          <span className="inline-flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
            <span className="text-xs">{t('Plan_No_Creado')}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollaboratorModal;

