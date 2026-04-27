import React from "react";
import { IconActions } from "../ui-components";

function TableRowTags({etiqueta, espvalue, engvalue, fravalue, porvalue, zhovalue, rumvalue, etiquetasamod, buttonavailable}) {

  function enviaEtiquetas(){
let etiqtemp=[];
etiqtemp[0]=document.getElementById(`${etiqueta}-${etiqueta}`).innerHTML;
etiqtemp[1]=document.getElementById(`${etiqueta}-esp`).innerHTML;
etiqtemp[2]=document.getElementById(`${etiqueta}-eng`).innerHTML;
etiqtemp[3]=document.getElementById(`${etiqueta}-fra`).innerHTML;
etiqtemp[4]=document.getElementById(`${etiqueta}-por`).innerHTML;
etiqtemp[5]=document.getElementById(`${etiqueta}-zhn`).innerHTML;
etiqtemp[6]=document.getElementById(`${etiqueta}-rum`).innerHTML;
buttonavailable(false);
etiquetasamod(etiqtemp); 
  }


  return (
    <div className="flex flex-col font-medium px-5">
      <div className="flex flex-row self-stretch py-2  items-center justify-between gap-4">
        <div className="w-full"><p className="text-sm" id={`${etiqueta}-${etiqueta}`}>{etiqueta}</p></div>
        <div className="w-full"><p className="text-sm" id={`${etiqueta}-esp`}>{espvalue}</p></div>
        <div className="w-full"><p className="text-sm" id={`${etiqueta}-eng`}>{engvalue}</p></div>
        <div className="w-full"><p className="text-sm" id={`${etiqueta}-fra`}>{fravalue}</p></div>
        <div className="w-full"><p className="text-sm" id={`${etiqueta}-por`}>{porvalue}</p></div>
        <div className="w-full"><p className="text-sm" id={`${etiqueta}-zhn`}>{zhovalue}</p></div>
        <div className="w-full"><p className="text-sm" id={`${etiqueta}-rum`}>{rumvalue}</p></div>
        <div className="flex flex-row px-5">
            <div className="flex justify-center cursor-pointer" onClick={()=>enviaEtiquetas()}><IconActions name="edit"/></div>
        </div>
      </div>
      <hr className="border-t border-gray-200 w-full" />
    </div>
  );
}

export default TableRowTags;
