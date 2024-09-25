import { Divider } from "@aws-amplify/ui-react";
import React from "react";

function TableCollReport({colaborator}) {
  //console.log("AAAAAAAAA",colaborator)
  return (
    <div className="flex flex-col text-xs">
      <div className="flex flex-row self-stretch py-2  items-center justify-between gap-5">
        <div className="w-3/5"><p className="text-sm">{colaborator?.ID_COLABORADOR}</p></div>
        <div className="w-full"><p className="text-sm">{colaborator?.NOM_COMP}</p></div>
        <div className="w-3/5"><p className="text-sm">{colaborator?.FECHA_DE_ULTIMO_ACCESO}</p></div>
        <div className="w-2/5"><p className="text-sm"> {colaborator?.NUMERO_DE_ACCESOS}</p></div>
        <div className="w-2/5"><p className="text-sm"> {colaborator?.ORGANIZACION}</p></div>
        <div className="w-2/5"><p className="text-sm"> {colaborator?.NIVEL}</p></div>
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

export default TableCollReport;
