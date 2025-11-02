import React from "react";
import { IconProfile } from "../ui-components";
import Iconteam from "../ui-components/Iconteam";
import { Link, useNavigate } from "react-router-dom";
import useBreadcrumbs from "../hooks/useBreadcrumbs";
import { useTranslation } from "react-i18next";

function CardSerchOrg({
  user = {},
  name = "Usuario Desconocido",
  id = "N/A",
  organization = "Organización no especificada",
  position = "Posición no especificada",
  country,
  avatar = null,
  onClick = null,
  equipo = "0",
  id_jefe = null,
   nombre_jefe = null
}) {
  // Usar datos del objeto user si está disponible, sino usar props individuales
  const userData = {
    name: user.name || name,
    lastName: user.lastName,
    id: user.id || id,
    organization: user.organization || organization,
    position: user.position || position,
    country: user.country || country,
    avatar: user.avatar || avatar,
    equipo: user.equipo || equipo,
    id_jefe: user.id_jefe || id_jefe,
    nombre_jefe: user.nombre_jefe || nombre_jefe
  };

  // Función para generar iniciales del nombre
  const getInitials = (fullName) => {
    if (!fullName || fullName === "Usuario Desconocido") return "??";

    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const navigate = useNavigate();
    const { clearBreadcrumbs } = useBreadcrumbs();
    const { t } = useTranslation();

  const handleIconteamClick = (e) => {
    clearBreadcrumbs();
    if (equipo == "1") {
      e.preventDefault();
      // Si no hay onTeamNavigation, el Link manejará la navegación por defecto
    }
  };

  const clean = (e) =>{
    clearBreadcrumbs();
  }

  // Función para generar color de avatar basado en el nombre
  const getAvatarColor = (fullName) => {
    if (!fullName) return "bg-gray-500";

    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-pink-500",
      "bg-teal-500",
    ];

    const index = fullName.length % colors.length;
    return colors[index];
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick(userData);
    }
  };

  //console.log("FOTO",userData)

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow ${
        onClick ? "cursor-pointer hover:bg-gray-50" : ""
      }`}
      onClick={handleCardClick}
    >
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div
            className={`avatar-container w-12 h-12 rounded-full bg-blue-400 overflow-hidden flex items-center justify-center`}
          >
            {userData.avatar ? (
              <img
                src={`data:image/jpg;base64,${userData.avatar}`} 
                alt={`${userData.name} ${userData.lastName}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : 
            <div className="w-full h-full flex items-center justify-center text-white text-md font-bold">
              {getInitials(`${userData.name} ${userData.lastName}`)}
            </div>
            }
          </div>
        </div>

        {/* Información del usuario */}
        <div className="flex-1 min-w-0">
          {/* Nombre */}
          <h4 className="text-md font-bold text-gray-900 truncate mb-2">
            {`${userData.name} ${userData.lastName}`}
          </h4>

          {/* Detalles */}
          <div className="space-y-1">
            {/* ID */}
            <div className="flex items-center text-gray-600 text-xs">
              <IconProfile type="id" />
              <span className="ml-1 truncate">{userData.id}</span>
            </div>

            {/* Organización */}
            <div className="flex items-center text-gray-600 text-xs">
              <IconProfile type="Organitation" />
              <span className="ml-1 truncate" title={userData.organization}>
                {userData.organization}
              </span>
            </div>

            {/* Posición */}
            <div className="flex items-center text-gray-600 text-xs">
              <IconProfile type="Job" />
              <span className="ml-1 truncate" title={userData.position}>
                {userData.position}
              </span>
            </div>

            {/* País */}
            <div className="flex items-center text-gray-600 text-xs">
              <IconProfile type="world" />
              <span className="ml-1 truncate">{userData.country}</span>
            </div>
            {/* Jefe */}
            <div className="flex items-center text-gray-600 text-xs">
              <IconProfile type="Name" />
              <span className="ml-1 truncate">{userData.nombre_jefe}</span>
            </div>
          </div>
        </div>

        {/* Iconos de estado */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          {userData.equipo === "1" ? (
            <Link to={`/org/${id}`} onClick={handleIconteamClick}>
              <div className={equipo == "1" && "cursor-pointer"}>
                <Iconteam state="Active" />
              </div>
            </Link>
          ) : (
            <Iconteam state="Disabled" />
          )}

          {/* Icono de organigrama */}
          <div className="flex items-center justify-center">
            <Link to={`/org/${userData.id_jefe}`} onClick={clean} >
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  fill="#0000B3"
                  className="w-6 h-6"
                  title="Ver organigrama"
                >
                  <g transform="translate(0, 0) scale(1.4)">
                    <rect x="40" y="4" width="16" height="16" rx="2" />
                    <line
                      x1="48"
                      y1="20"
                      x2="48"
                      y2="40"
                      stroke="#0000B3"
                      strokeWidth="4"
                    />
                    <line
                      x1="16"
                      y1="40"
                      x2="80"
                      y2="40"
                      stroke="#0000B3"
                      strokeWidth="4"
                    />
                    <line
                      x1="24"
                      y1="40"
                      x2="24"
                      y2="60"
                      stroke="#0000B3"
                      strokeWidth="4"
                    />
                    <line
                      x1="48"
                      y1="40"
                      x2="48"
                      y2="60"
                      stroke="#0000B3"
                      strokeWidth="4"
                    />
                    <line
                      x1="72"
                      y1="40"
                      x2="72"
                      y2="60"
                      stroke="#0000B3"
                      strokeWidth="4"
                    />
                    <rect x="16" y="60" width="16" height="16" rx="2" />
                    <rect x="40" y="60" width="16" height="16" rx="2" />
                    <rect x="64" y="60" width="16" height="16" rx="2" />
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSerchOrg;
