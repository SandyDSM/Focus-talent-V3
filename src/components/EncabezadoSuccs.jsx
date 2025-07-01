import React from "react";
import { IconProfile } from "../ui-components";
import { Building2, BadgeInfo } from "lucide-react";

const EncabezadoSuccs = ({ member, getInitials }) => {
  return (
    <div>
      {/* Barra vertical de semáforo */}
      <div className="flex">
      <div
        className="w-2 rounded-l-lg"
        style={{ backgroundColor: member.statusColor || member.pidColor }}
      ></div>
      
        {/* Encabezado del colaborador secundario Card gris */}
        <div className="px-2 py-2 bg-gray-100 rounded-r-lg w-full">
          <div className="flex items-center mb-1">
            {/* Circulo*/}
            <div
              className="avatar-container w-12 h-12 rounded-full mr-3 overflow-hidden flex items-center justify-center border-4"
              style={{
                backgroundColor: "#f0f0f0", // Color de fondo neutro
                borderColor: "#5483E8", // Color del borde estándar
              }}
            >
              {member.avatarUrl ? (
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-1/3 h-full flex items-center justify-center text-gray-700 text-lg font-bold">
                  {getInitials(member.name)}
                </div>
              )}
            </div>
            <div className="flex justify-between items-center w-2/3 ">
              <div className="font-semibold text-gray-800">{member.name}</div>
              <div className="text-sm font-medium text-right">{member.age}</div>
            </div>
          </div>

          {/* Información del colaborador secundario */}
          <div className="flex items-center">
            <div className="flex items-center text-xs text-gray-600">
              <IconProfile type="id" />
              <span className="mr-2">{member.id}</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <IconProfile type="Job" />
              <span className="mr-2">{member.organization}</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <IconProfile type="Organitation" />
              <span className="mr-2">{member.location}</span>
            </div>
          </div>
        </div>
      </div>
        {/* Detalles de desempeño - Formato de líneas con separadores */}
        <div className="space-y-0 text-sm">
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Antigüedad en la empresa</div>
            <div className="font-medium">{member.companyAntiquity}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Antigüedad en el puesto</div>
            <div className="font-medium">{member.positionAntiquity}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Potencial 2025</div>
            <div className="font-medium">{member.potential}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Conclusión Desempeño 2024</div>
            <div className="font-medium">{member.performanceConclusion}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Competencias de Liderazgo 2024</div>
            <div className="font-medium">{member.leadershipSkills}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">
              Contribución Plan de negocio 2024
            </div>
            <div className="font-medium">{member.businessContribution}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Assessment KF</div>
            <div className="font-medium">{member.assessmentKF}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">
              Match con profile (target 3)
            </div>
            <div className="font-medium">{member.profileMatch}</div>
          </div>
          <div className="py-1">
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: member.pidColor }}
              ></div>
              <span className="text-xs text-gray-500 mr-2">PID</span>
              <span className="font-medium">{member.pid}</span>
            </div>
          </div>
        </div>
      
      {/* Termina */}
    </div>
  );
};

export default EncabezadoSuccs;
