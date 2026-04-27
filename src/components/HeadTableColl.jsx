import React from "react";

function HeadTableColl({add}) {
  return (
    <div className="flex flex-col text-bmb-blue font-medium">
      <div className="flex flex-row self-stretch py-2  items-center justify-between gap-5">
        {add === "false" ? (<div className="w-2/5"><p className="text-sm text-center">Eliminar</p></div>):(<div className="w-2/5"><p className="text-sm text-center">Agregar</p></div>)}
        <div className="w-2/5"><p className="text-sm">ID </p></div>
        <div className="w-full"><p className="text-sm">Nombre del colaborador</p></div>
        <div className="w-full"><p className="text-sm">Entidad legal</p></div>
        <div className="w-full"><p className="text-sm">Organización</p></div>
        <div className="w-full"><p className="text-sm">Puesto</p></div>
        <div className="w-full"><p className="text-sm">Ubicación geográfica</p></div>
        {add === "false" && (<div className="flex"><p className="text-sm">Editar</p></div>)}
      </div>
      <hr className="border-t border-gray-200 w-full" />
    </div>
  );
}

export default HeadTableColl;
