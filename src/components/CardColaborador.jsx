import * as React from "react";
import IconProfile from "../ui-components/IconProfile";
import Iconteam from "../ui-components/Iconteam";
import { Link } from "react-router-dom";

const AVATAR = "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png";

export default function CardColaborador({ idcol, type, foto, idEmpleado, nombre, puesto, organizacion, ...rest }) {
  const fotoSrc = foto && foto !== "" ? foto : AVATAR;

  return (
    <div
      className="flex flex-row items-center gap-2 overflow-hidden rounded-md shadow-sm bg-white p-2"
      {...rest}
    >
      <Link to={`/test/${idcol}`} className="shrink-0 cursor-pointer">
        <img
          src={fotoSrc}
          alt={nombre}
          className="w-20 h-20 rounded-lg object-cover"
        />
      </Link>
      <div className="flex flex-row flex-1 items-end justify-between min-w-0">
        <div className="flex flex-col gap-1 flex-1 min-w-0 pr-3">
          <div className="flex items-center gap-1">
            <IconProfile width="20px" height="20px" type="id" />
            <span className="text-xs font-medium text-gray-800 truncate">{idEmpleado}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconProfile width="20px" height="20px" type="Name" />
            <span className="text-xs font-light text-gray-800 capitalize truncate">{nombre}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconProfile width="20px" height="20px" type="Job" />
            <span className="text-xs font-light text-gray-800 truncate">{puesto}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconProfile width="20px" height="20px" type="Organitation" />
            <span className="text-xs font-light text-gray-800 truncate">{organizacion}</span>
          </div>
        </div>
        {type === "More" && (
          <Link to={`/myteam/${idcol}`} className="shrink-0">
            <Iconteam width="20px" height="20px" state="Active" />
          </Link>
        )}
      </div>
    </div>
  );
}
