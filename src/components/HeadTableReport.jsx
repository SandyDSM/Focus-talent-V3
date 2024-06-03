import { Divider } from "@aws-amplify/ui-react";
import React from "react";

function HeadTableReport() {
  return (
    <div className="flex flex-col text-bmb-blue font-medium">
      <div className="flex flex-row self-stretch py-2  items-center justify-between gap-5">
        <div className="w-3/5"><p className="text-sm">ID Colaborador</p></div>
        <div className="w-full"><p className="text-sm">Nombre del colaborador</p></div>
        <div className="w-3/5"><p className="text-sm">Fecha de último acceso </p></div>
        <div className="w-2/5"><p className="text-sm"> Total de accesos</p></div>
        <div className="w-2/5"><p className="text-sm"> Organización</p></div>
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

export default HeadTableReport;
