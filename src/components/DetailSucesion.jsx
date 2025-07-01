import { IconProfile, Piramide } from '../ui-components';

import React from 'react';
import EncabezadoSuccs from './EncabezadoSuccs';

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
  mainCollaborator = {
    name: "Zurita Robles Kadir",
    id: "12345678",
    organization: "Organización Bimbo Brasil",
    role: "Supervisor Production",
    age: "42 años",
    avatarUrl: null
  }, 
  teamMembers = [] 
}) => {
  // Si no se proporcionan colaboradores secundarios, usar datos por defecto
  const defaultTeamMembers = [
    {
      name: "Noah Smith",
      id: "2786036",
      organization: "Delivery Presale",
      location: "LAS",
      age: "38 años",
      companyAntiquity: "6/12/2021",
      positionAntiquity: "6/12/2021",
      potential: "Alto potencial",
      performanceConclusion: "Sobresaliente",
      leadershipSkills: "Por encima de lo esperado",
      businessContribution: "Sobresaliente",
      assessmentKF: "2024",
      profileMatch: "-",
      pid: "69%",
      pidColor: "#FFAB00", // Amarillo
      avatarUrl: null,
      borderColor: "#36B37E", // Verde
      statusColor: "#36B37E" // Verde - Semáforo
    },
    {
      name: "Sarah Smith",
      id: "2786036",
      organization: "Delivery Presale",
      location: "LAS",
      age: "38 años",
      companyAntiquity: "6/12/2021",
      positionAntiquity: "6/12/2021",
      potential: "Alto potencial",
      performanceConclusion: "Sobresaliente",
      leadershipSkills: "Por encima de lo esperado",
      businessContribution: "Sobresaliente",
      assessmentKF: "2024",
      profileMatch: "-",
      pid: "69%",
      pidColor: "#36B37E", // Verde
      avatarUrl: null,
      borderColor: "#36B37E", // Verde
      statusColor: "#FFAB00" // Amarillo - Semáforo
    },
    {
      name: "Jonathan Sanchéz",
      id: "2786036",
      organization: "Delivery Presale",
      location: "LAS",
      age: "38 años",
      companyAntiquity: "6/12/2021",
      positionAntiquity: "6/12/2021",
      potential: "Alto potencial",
      performanceConclusion: "Sobresaliente",
      leadershipSkills: "Por encima de lo esperado",
      businessContribution: "Sobresaliente",
      assessmentKF: "2024",
      profileMatch: "-",
      pid: "69%",
      pidColor: "#FF5630", // Rojo
      avatarUrl: null,
      borderColor: "#36B37E", // Verde
      statusColor: "#FF5630" // Rojo - Semáforo
    }
  ];

  // Limitar a mostrar solo 3 colaboradores
  const displayTeamMembers = teamMembers.length > 0 
    ? teamMembers.slice(0, 3) 
    : defaultTeamMembers.slice(0, 3);

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

  return (
    <div className="collaborator-modal bg-white rounded-lg shadow-lg p-6 max-w-9/10 mx-auto">
      {/* Encabezado con información del colaborador principal */}
      <div className="flex justify-between items-center mb-8 pb-2">
        <div className="flex items-center">
          <div className="avatar-container w-20 h-20 rounded-full bg-blue-500 border-4 border-blue-300 mr-4 overflow-hidden">
            {mainCollaborator.avatarUrl ? (
              <img src={mainCollaborator.avatarUrl} alt={mainCollaborator.name} className="w-full h-full object-cover" />
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
          </div>
        </div>
        <div className="text-right flex gap-4 mr-10 items-center">
          <div>
            <div className="text-lg font-medium text-gray-800">{mainCollaborator.age}</div>
            <div className="text-gray-800 font-bold">{mainCollaborator.role}</div>
          </div>
          <div className="scale-200 m-4">
            <Piramide/>
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
            <span className="text-xs">Listo ahora/ Corto plazo</span>
          </span>
          <span className="inline-flex items-center mr-3">
            <span className="w-2 h-3 bg-yellow-400 mr-1 rounded-l-sm"></span>
            <span className="text-xs">Mediano plazo 1 a 3 años</span>
          </span>
          <span className="inline-flex items-center">
            <span className="w-2 h-3 bg-orange-500 mr-1 rounded-l-sm"></span>
            <span className="text-xs">Largo plazo 3 o + años</span>
          </span>
        </div>
        <div className="pid">
          <span className="text-sm font-medium mr-2">PID:</span>
          <span className="inline-flex items-center mr-3">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
            <span className="text-xs">Plan Avanzado (70% - 100%)</span>
          </span>
          <span className="inline-flex items-center mr-3">
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></span>
            <span className="text-xs">Plan creado, sin avances significativos (&lt;69%)</span>
          </span>
          <span className="inline-flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
            <span className="text-xs">Plan no creado o sin avances (&lt;45%)</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollaboratorModal;

