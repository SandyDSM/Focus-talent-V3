import React from "react";
import { IconProfile } from "../ui-components";

const EncabezadoSuccs = ({ member, getInitials, borde }) => {

  const read_color = {
    "1":"#46B75F",
    "2": "#FFE226",
    "3": "#ED8244"
  }

  const pid_color = {
    "1":"#46B75F",
    "2": "#FFE226",
    "3": "#FE0003"
  }

  return (
    <div>
      {/* Barra vertical de semáforo */}
      <div className="flex">
      <div
        className="w-2 rounded-l-lg"
        style={{ backgroundColor: read_color[member.READINESS_ID] || "#f0f0f0"}}
      ></div>
      
        {/* Encabezado del colaborador secundario Card gris */}
        <div className="px-2 py-2 bg-gray-100 rounded-r-lg w-full">
          <div className="flex items-center mb-1 w-full">
            {/* Circulo*/}
            <div
              className={`avatar-container w-1/6 h-12 rounded-full mr-3 overflow-hidden flex items-center border-4 ${borde[member.PERF_ID]}`}
              style={{
                backgroundColor: "#f0f0f0", // Color de fondo neutro
              }}
            >
              {member.FOTO ? (
                <img
                  src={`data:image/jpg;base64,${member?.FOTO}`}
                  alt={member.APELLIDOS}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-1/3 h-full flex items-center text-gray-700 text-lg font-bold pl-2">
                  {getInitials(`${member.NOMBRES} ${member.APELLIDOS}`)}
                </div>
              )}
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="font-semibold text-gray-800">{`${member.NOMBRES} ${member.APELLIDOS}`}</div>
              <div className="text-xs font-medium text-right">{`${member.EDAD} años`}</div>
            </div>
          </div>

          {/* Información del colaborador secundario */}
          <div className="flex items-center">
            <div className="flex items-center text-xs text-gray-600">
              <IconProfile type="id" />
              <span className="mr-2">{member.ID_USUARIO}</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <IconProfile type="Job" />
              <span className="mr-2">{member.POSICION}</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <IconProfile type="Organitation" />
              <span className="mr-2">{member.ORGANIZACION_ID}</span>
            </div>
          </div>
        </div>
      </div>
        {/* Detalles de desempeño - Formato de líneas con separadores */}
        <div className="space-y-0 text-sm">
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Antigüedad en la empresa</div>
            <div className="font-medium">{member.ANT_EN_EMPRESA || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Antigüedad en el puesto</div>
            <div className="font-medium">{member.ANT_EN_PUESTO || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Potencial 2025</div>
            <div className="font-medium">{member.POTENCIAL || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Conclusión Desempeño 2024</div>
            <div className="font-medium">{member.CONCLUSION_DESEMPENO || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Competencias de Liderazgo 2024</div>
            <div className="font-medium">{member.COMPET_LIDERAZGO || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">
              Contribución Plan de negocio 2024
            </div>
            <div className="font-medium">{member.CONTRIB_PLAN_NEGOCIO || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Assessment KF</div>
            <div className="font-medium">{member.ASSESSMENT_KF || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">
              Match con profile (target 3)
            </div>
            <div className="font-medium">{member.MATCH_CON_PROFILE || "-"}</div>
          </div>
          <div className="py-1">
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: pid_color[member.PID_ID] || "#f0f0f0" }}
              ></div>
              <span className="text-xs text-gray-500 mr-2">PID</span>
              <span className="font-medium">{member.pid_num || "0"}</span>
            </div>
          </div>
        </div>
      
      {/* Termina */}
    </div>
  );
};

export default EncabezadoSuccs;
