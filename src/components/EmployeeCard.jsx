import React from "react";
import { Maximize2, Shield } from "lucide-react";
import Iconteam from "../ui-components/Iconteam";
import { IconProfile } from "../ui-components";
import { Link } from "react-router-dom";
import { Piramide } from "../ui-components";

/**
 * Componente que muestra una tarjeta de colaborador con su información
 * @param {Object} props - Propiedades del componente
 * @param {string} props.name - Nombre del colaborador
 * @param {string} props.id - ID del colaborador
 * @param {string} props.organization - Organización a la que pertenece
 * @param {string} props.position - Posición o cargo del colaborador
 * @param {string} props.positionClass - Clase de la posición (ej: "")
 * @param {string} props.role - Rol del colaborador (ej: "Supervisor production")
 * @param {string} props.avatarUrl - URL de la imagen de perfil
 * @param {Function} props.onArrowClick - Función que se ejecuta al hacer clic en el botón de flecha
 * @returns {JSX.Element} Componente de tarjeta de colaborador
 */
const EmployeeCard = ({
  name,
  id,
  organization,
  position,
  ELDP,
  role,
  avatarUrl,
  equipo,
  jefe,
  PERF_ID,
  borde,
  propiedad,
  onArrowClick = null,
}) => {
  // Manejador para el clic en el botón de flecha
  const handleArrowClick = (e) => {
    // Detener la propagación del evento para evitar que se active el onClick del contenedor
    e.stopPropagation();
    // Si se proporcionó una función onArrowClick, ejecutarla
    if (onArrowClick && typeof onArrowClick === "function") {
      onArrowClick();
    }
  };

  return (
    <div className="collaborator-card bg-white rounded-lg shadow-md p-4 w-80 relative h-[17rem]">
      {/* Rol en la parte superior */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center text-sm font-semibold">
          <IconProfile type="Job" />
          <span className="px-2 py-0.5">{role}</span>
        </div>
        <button
          className="text-blue-600 hover:bg-blue-50 p-1 rounded-full transition-colors font-bold"
          onClick={handleArrowClick}
          aria-label="Ver detalles"
        >
          <Maximize2 size={16} strokeWidth={3} />
        </button>
      </div>

      {/* Avatar y nombre */}
      <div className="flex flex-col items-center mb-4">
        <div className={`avatar-container w-16 h-16 rounded-full bg-cyan-500 border-4 mb-2 overflow-hidden ${borde[PERF_ID]}`}>
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2)
                .toUpperCase()}
            </div>
          )}
        </div>
        <h3 className="text-lg font-semibold text-center">{name}</h3>
      </div>

      {/* Información del colaborador */}
      <div className="flex gap-2 justify-center mb-4 ">
        <div className="flex items-center text-gray-600 text-xs">
          <IconProfile type="id" />
          <span>{id}</span>
        </div>
        <div className="flex items-center text-gray-600 text-xs">
          <IconProfile type="Organitation" />
          <span>{organization}</span>
        </div>
      </div>

      {/* Etiquetas de posición */}
      <div className="flex flex-center items-center justify-between gap-2">
       {(equipo == "1"  & (jefe === false)) ? (
          <Link to={`#`}>
            <div className={equipo == "1" && "cursor-pointer"}>
              <Iconteam state="Active" />
            </div>
          </Link>
        ) : (
          <Iconteam state="Disabled" />
        )}
        <div className="flex gap-2 justify-center">
          <div className="bg-yellow-400 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            {position}
          </div>
          <div className="bg-violet-800 text-white px-2 py-1 rounded-full text-xs font-medium">
            {ELDP}
          </div>
        </div>
        <div>
          <Piramide property1={propiedad}/>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
