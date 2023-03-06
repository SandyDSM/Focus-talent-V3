import { Divider, SwitchField } from '@aws-amplify/ui-react';
import React, { useState, useEffect } from "react";

function RowTalentElement({anio}) {
  
  const updateAnios= async (id, valor) => {
    try {
    
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_anios_calib.php`,
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
          <div className="flex flex-row self-stretch py-2 px-9 items-center relative gap-6">
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
            <div className="flex flex-col">
              <p className="text-sm">
              Calibración {anio.ANIO}
              </p>
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

export default RowTalentElement