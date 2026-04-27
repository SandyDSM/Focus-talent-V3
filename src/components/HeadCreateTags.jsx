import React from "react";

function HeadCreateTable({ver="hidden"}) {
  return (
    <div className="flex flex-col text-bmb-blue font-medium px-5">
      <div className="flex flex-row self-stretch py-2  items-center justify-between gap-5">
        <div className="w-full"><p className="text-sm">ETIQUETA</p></div>
        <div className="w-full"><p className="text-sm">SPA</p></div>
        <div className="w-full"><p className="text-sm">ENG</p></div>
        <div className="w-full"><p className="text-sm">FRA</p></div>
        <div className="w-full"><p className="text-sm">POR</p></div>
        <div className="w-full"><p className="text-sm">ZHO</p></div>
        <div className="w-full"><p className="text-sm">RUM</p></div>
        <div className={`${ver} flex flex-row px-3` }>
            <div className=""><p className="text-sm">Editar</p></div>
        </div>
      </div>
      <hr className="border-t border-gray-200 w-full" />
    </div>
  );
}

export default HeadCreateTable;
