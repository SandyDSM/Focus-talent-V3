import { Divider } from "@aws-amplify/ui-react";
import React from "react";

function HeadCreateTable({ver="hidden"}) {
  return (
    <div className="flex flex-col text-bmb-blue font-medium px-5">
      <div className="flex flex-row self-stretch py-2  items-center justify-between gap-4">
        <div className="w-full"><p className="text-sm">ETIQUETA</p></div>
        <div className="w-full"><p className="text-sm">SPA</p></div>
        <div className="w-full"><p className="text-sm">ENG </p></div>
        <div className="w-full"><p className="text-sm">FRA</p></div>
        <div className="w-full"><p className="text-sm">POR</p></div>
        <div className="w-full"><p className="text-sm">ZHO</p></div>
        <div className={`${ver} flex flex-row gap-8 w-full` }>
            <div className="w-6/12"><p className="text-sm">Editar</p></div>
            <div className="w-6/12"><p className="text-sm">Eliminar</p></div>
        </div>
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

export default HeadCreateTable;
