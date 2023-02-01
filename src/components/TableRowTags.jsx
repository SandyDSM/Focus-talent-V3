import { Divider } from "@aws-amplify/ui-react";
import React from "react";
import { IconActions } from "../ui-components";

function TableRowTags({etiqueta, espvalue, engvalue, fravalue, porvalue, zhovalue, etiquetasamod, buttonavailable}) {

  function enviaEtiquetas(){
let etiqtemp=[];
etiqtemp[0]=document.getElementById(`${etiqueta}-${etiqueta}`).innerHTML;
etiqtemp[1]=document.getElementById(`${etiqueta}-esp`).innerHTML;
etiqtemp[2]=document.getElementById(`${etiqueta}-eng`).innerHTML;
etiqtemp[3]=document.getElementById(`${etiqueta}-fra`).innerHTML;
etiqtemp[4]=document.getElementById(`${etiqueta}-por`).innerHTML;
etiqtemp[5]=document.getElementById(`${etiqueta}-zhn`).innerHTML;
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
        <div className="w-full flex flex-row gap-8">
            <div className="w-6/12 flex justify-center cursor-pointer" onClick={()=>enviaEtiquetas()}><IconActions name="edit"/></div>
            <div className="w-6/12 flex justify-center cursor-pointer"></div>
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

export default TableRowTags;
