import React from "react";
import { IconProfile } from "../ui-components";
import { useTranslation } from 'react-i18next';
import ProgressBar from "./ProgressBar";


const EncabezadoSuccs = ({ member, getInitials, borde }) => {

  const { t } = useTranslation();

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

  console.log(member)

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
              <div className="text-xs font-medium text-right">{`${member.EDAD} ${t('años')}`}</div>
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
            <div className="text-xs text-gray-500">{t('antiguedad_emp')}</div>
            <div className="font-medium">{member.ANT_EN_EMPRESA || "-"}</div>
          </div>
         {/* <div className="border-b py-1">
            <div className="text-xs text-gray-500">{t('antiguedad_puesto')}</div>
            <div className="font-medium">{"-"}</div>
          </div>*/}
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">{t('Potencial_2025')}</div>
            <div className="font-medium">{member.POTENCIAL || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">{t('Conclusi_Desemp')}</div>
            <div className="font-medium">{member.CONCLUSION_DESEMPENO || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">{t('Compet_Lid')}</div>
            <div className="font-medium">{member.COMPET_LIDERAZGO || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">
              {t('Contrib_Plan_Neg')}
            </div>
            <div className="font-medium">{member.CONTRIB_PLAN_NEGOCIO || "-"}</div>
          </div>
          <div className="border-b py-1">
            <span className="text-xs text-gray-500">{t('IDP')}</span>
            <div className="flex items-center gap-2">
              {/*<div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: pid_color[member.PID_ID] || "#f0f0f0" }}
              ></div>*/}
              
              <span className="font-medium">{`${member?.PID_NUM}% ` || "0%"}</span>
              <ProgressBar porcentaje={`${member?.PID_NUM}%` || "0%"} id_pib ={member.PID_ID} />
            </div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">Assessment KF</div>
            <div className="font-medium">{member.ASSESSMENT_KF || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">
              {t('Match_prof')}
            </div>
            <div className="font-medium">{member.MATCH_CON_PROFILE || "-"}</div>
          </div>
          <div className="py-1">
            <div className="text-xs text-gray-500">Korn Ferry Evaluation</div>
            <div className="font-medium text-blue-600 underline cursor-pointer">Download Evaluation</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">{t('Availability')}</div>
            <div className="font-medium">{member.RELOCATE || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">{t('Which locations')}</div>
            <div className="font-medium">{member.WHICH_LOCATIONS || "-"}</div>
          </div>
          <div className="border-b py-1">
            <div className="text-xs text-gray-500">{t('Work place')}</div>
            <div className="font-medium">{member.WORKPLACE || "-"}</div>
          </div>
        </div>
      
      {/* Termina */}
    </div>
  );
};

export default EncabezadoSuccs;
