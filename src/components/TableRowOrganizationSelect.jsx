import React from "react";
import { IconActions } from "../ui-components";

function TableRowOrganizationSelect({organization, indice, pullorg}) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center pr-9 relative justify-between">
        <div className="flex flex-row justify-start self-stretch py-1 px-9 items-center relative gap-8 w-7/12">
          <div className="flex flex-col w-7 h-6 cursor-pointer items-center" onClick={()=>{pullorg(indice);}}>
            <IconActions width="20px" height="20px" name="delete" />
          </div>
          <div className="flex flex-row gap-1 grow shrink relative whitespace-pre-wrap">
            <p className="text-xs">{organization.NOMBRE}</p>
          </div>
          <div className="flex justify-end whitespace-pre-wrap "><p className="text-xs">{organization.ID}</p></div>
        </div>
        <label className="flex items-center gap-1.5 text-xs cursor-pointer">
          <input
            type="checkbox"
            name="subordinados"
            value="yes"
            defaultChecked
            className="w-3.5 h-3.5 accent-bmb-blue"
            onChange={(e)=>{ if(e.target.checked){organization.INCLUDE_SUB=1;}else{organization.INCLUDE_SUB=0;}}}
          />
          Incluir subordinados
        </label>
      </div>
      <hr className="border-t border-gray-200 w-full" />
    </div>
  );
}

export default TableRowOrganizationSelect;
