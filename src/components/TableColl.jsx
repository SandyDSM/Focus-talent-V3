import { Divider } from "@aws-amplify/ui-react";
import React from "react";
import { IconActions } from "../ui-components";

function TableColl({colaborator, selectorg, add, indice}) {
  return (
    <div className="flex flex-col text-xs">
      <div className="flex flex-row self-stretch py-2  items-center justify-between gap-5">
        <div className="w-1/3">
          {add==="true" ? (<div className="flex flex-col m-auto h-6 cursor-pointer items-center" onClick={()=>selectorg(colaborator)}>
            <IconActions width="20px" height="20px"/>
          </div>) : (
            <div className="flex flex-col m-auto h-6 cursor-pointer items-center" onClick={()=>selectorg(indice)}>
            <IconActions width="20px" height="20px" name="delete" />
          </div>
          )}
          
        </div>
        <div className="w-2/5"><p className="text-sm">{colaborator?.ID_COLABORADOR}</p></div>
        <div className="w-full"><p className="text-sm">{`${colaborator?.NOMBRE} ${colaborator?.APELLIDOS}`}</p></div>
        <div className="w-full"><p className="text-sm">{colaborator?.ENTIDAD_LEGAL}</p></div>
        <div className="w-full"><p className="text-sm">{colaborator?.ORGANIZACION}</p></div>
        <div className="w-full"><p className="text-sm">{colaborator?.PUESTO}</p></div>
        <div className="w-full"><p className="text-sm">{colaborator?.UBICACION_GEOGRAFICA}</p></div>
      </div>
      <Divider
        width="unset"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
      />
    </div>
  );
}

export default TableColl;
