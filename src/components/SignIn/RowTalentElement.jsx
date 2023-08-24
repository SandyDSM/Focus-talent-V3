import { Divider, SwitchField } from '@aws-amplify/ui-react';
import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";

function RowTalentElement({anio}) {

  function getData(papiName, ppath, pparameters) {
    const apiName = papiName;
    const path = ppath;
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: pparameters
    };
  
    return API.get(apiName, path, myInit);
  }
  

/*
  const updateAniosCalib= async (id, valor) => {
    try {
    
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_anios_calib.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "ANIO": id.split('-')[0],
            "VALUE": valor,
            "AGRUPACION": id.split('-')[1],
            "TOKEN": "a27aba5cd302dc049acf86aaef16be746242cda0"
          })
        }
      ); 
      const datos = await respdesemp.json();
    } catch (error) {
    } 
  };
*/

const updateAniosCalib = async (id, valor) => {
  let idtemp=id.split('-')[0]*1;
  try{
    let parametros={ANIO: idtemp,
    VALUE: valor,
    AGRUPACION: id.split('-')[1]
  };
    console.log('El valor de parametros es: ', parametros);
    const response = await getData('API Anios', '/updateanioscalib', parametros);
  }catch (error) {
    console.log("error:", error);
  }
};



  const [isChecked, setIsChecked] = useState(false);


  useEffect(() => {
    if (anio.ACTIVO === 1) {
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
                defaultChecked={anio.ACTIVO===1 && "Checked"}
                id={`${anio.ANIO}-${anio.AGRUPACION}`}
                name={anio.ANIO}
                value={"aaa"+anio.ANIO}
                onChange={(e) => {
                  updateAniosCalib(e.target.id, e.target.checked);
                  setIsChecked(e.target.checked);
                }}
              />
            <div className="flex flex-col">
              <p className="text-sm">
              {anio.AGRUPACION} {anio.ANIO}
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