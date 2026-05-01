import React, { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";

const AVATAR = "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png";

function BannerUser() {
  const { usuarioActualDatos, photo } = useContext(CollaboratorsContext);

  const nombre = usuarioActualDatos?.NOMBRE
    ? `${usuarioActualDatos.NOMBRE} ${usuarioActualDatos.APELLIDOS}`
    : "";

  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-border-subtle shadow-sm">
      <img
        src={photo || AVATAR}
        alt={nombre}
        className="w-10 h-10 rounded-full object-cover ring-2 ring-bmb-blue-light shrink-0"
      />
      {nombre && (
        <span className="font-semibold text-bmb-blue text-sm md:text-base leading-tight">
          {nombre}
        </span>
      )}
    </div>
  );
}

export default BannerUser;
