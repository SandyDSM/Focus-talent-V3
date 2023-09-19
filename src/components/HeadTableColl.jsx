import { Divider } from "@aws-amplify/ui-react";
import React from "react";

function HeadTableColl() {
  return (
    <div className="flex flex-col text-bmb-blue font-medium">
      <div className="flex flex-row self-stretch py-2  items-center justify-between gap-5">
        <div className="w-80"><p className="text-sm">Agregar</p></div>
        <div className="w-full"><p className="text-sm">Nombre del colaborador</p></div>
        <div className="w-full"><p className="text-sm">Entidad legal</p></div>
        <div className="w-full"><p className="text-sm">Organización</p></div>
        <div className="w-full"><p className="text-sm">Puesto</p></div>
        <div className="w-full"><p className="text-sm">Ubicación geográfica</p></div>
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

export default HeadTableColl;
