import React from 'react'
import Iconteam from "../ui-components/Iconteam";
import Icondetail from "../ui-components/Icondetail";
import { Link } from "react-router-dom";


const UserSerch = ({colaborator}) => {
  return (
    <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={
              `${colaborator.FOTO}` != ""
                ? `data:image/jpg;base64,${colaborator?.FOTO}`
                : "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png"
            }
          />
          <div className="flex flex-col gap-0">
            <p className="text-sm font-bold">{`${colaborator.NOMBRE} ${colaborator.APELLIDOS}`}</p>
            <p className="text-xs uppercase">{`${colaborator.ENTIDAD_LEGAL} - ${colaborator.NIVEL}`}</p>
          </div>
        </div>
        <div className="flex items-center p-4 gap-2">
        <Link to={`/test/${colaborator.INTERNAL_ID}`}>
         <Icondetail />
        </Link>
          {(colaborator.EQUIPO == "1")? (
            <Link to={`/myteam/${colaborator.INTERNAL_ID}`}>
              <div className={colaborator.EQUIPO == "1" && "cursor-pointer"}>
                <Iconteam state="Active" />
              </div>
            </Link>
          ) : (
            <Iconteam state="Disabled" />
          )}
          
        </div>
      </div>
  )
}

export default UserSerch