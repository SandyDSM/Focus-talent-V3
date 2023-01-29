import { Divider, SwitchField } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import { IconNotification } from "../ui-components";

function TableRowTests({anio}) {

  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="flex flex-col">
      
              <div className="flex flex-row self-stretch py-2 px-9 items-center relative gap-4">
        <div className="w-7 h-7">
          <IconNotification width="24px" height="24px" disabled={`${isChecked ? "False" : "True"}`} />
        </div>
        <div className="flex flex-col gap-2.5 justify-center items-center py-2 px-9 relative">
          <SwitchField
          
            shrink="0"
            size="default"
            defaultChecked={anio.ACTIVO==="1" && "Checked"}
            
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
          />
        </div>
        <div className="flex flex-col grow shrink relative whitespace-pre-wrap">
          <p className="text-sm">
            Evaluación de desempeño y sucesión {anio.ANIO} 
          </p>
        </div>
        <p className="text-sm">{anio.ANIO}</p>
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

export default TableRowTests;
