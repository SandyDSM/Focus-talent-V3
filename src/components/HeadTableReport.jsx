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
        <div className="w-2/5"><p className="text-sm"> Nivel</p></div>
      </div>
      <hr className="border-t border-gray-200 w-full" />
    </div>
  );
}

export default HeadTableReport;
