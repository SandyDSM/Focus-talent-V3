import { Button, Divider, SwitchField } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";
import { IconNotification } from "../ui-components";

function TableRowTests({ anio, handleOpen }) {
  
  const updateAnios= async (id, valor) => {
    try {
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_anios_eval.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "ANIO": id,
            "VALUE": valor,
            "TOKEN": "a27aba5cd302dc049acf86aaef16be746242cda0"
          })
        }
      ); 
      const datos = await respdesemp.json();
    } catch (error) {
    } 
  };
  
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (anio.ACTIVO === "1") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row self-stretch py-2 px-9 items-center relative gap-1">
          <Button variation="link" isDisabled={isChecked ? false : true  } onClick={()=>handleOpen()}>
            <IconNotification
            width="24px"
            height="24px"
            disabled={`${isChecked ? "False": "True"}`} 
          /></Button>
        <div className="flex flex-col gap-2.5 justify-center items-center py-2 px-9 relative">
          <SwitchField
            shrink="0"
            size="default"
            defaultChecked={anio.ACTIVO==="1" && "Checked"}
            id={anio.ANIO}
            name={anio.ANIO}
            value={anio.ANIO}
            onChange={(e) => {
              updateAnios(e.target.id, e.target.checked);
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