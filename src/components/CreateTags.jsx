import React from "react";
import { Heading, Divider, TextField, Button } from "@aws-amplify/ui-react";
import HeadCreateTable from "./HeadCreateTags";
import { useState } from "react";

function CreateTags({etiquetasamod, botonhabilitado}) {

  const [isLoad, setIsLoad ] = useState(false)
///////////////////////////////////////////////////////////////// 
const updateTags= async (etiquetasx, espaniol, ingles, frances, portugues, chino) => {
  try {
    //alert("si intenta actualizar");
    setIsLoad(true)
    const respdesemp = await fetch(
      `https://talento-itzahuia.com/SAC/etiquetas.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          
          "ETIQUETA": etiquetasx,
          "es_MX": espaniol, 
          "en_US" : ingles,
          "fr_CA" : frances,
          "pt_BR" : portugues, 
          "zh_CN" : chino,      
          "TOKEN": "a27aba5cd302dc049acf86aaef16be746242cda0"
        })
      }
    ); 
    const datos = await respdesemp.json();
   console.log("el log es: ",datos);
  } catch (error) {
   
   console.log("Si hay error", error);
  }  finally{
    setIsLoad(false)
  }
};

//////////////////////////////////////////////////////////////////
function actualiza()
{
  updateTags(
    document.getElementById("etiqueta").value,
    document.getElementById("es_MX").value,
    document.getElementById("en_US").value,
    document.getElementById("fr_CA").value,
    document.getElementById("pt_BR").value,
    document.getElementById("zh_CN").value
  )
}

///////////////////////////////////////////////////////////////////
  return (
    <div className="card flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-1 my-2">
        <Heading level={6}> Actualizar Etiquetas</Heading>
        <Divider />
      </div>
      <div className="flex flex-col gap-2">
      <HeadCreateTable/>
      <div className="flex flex-col sm:flex-row justify-between gap-2 px-5 ">
        <TextField placeholder="Nombre" id={"etiqueta"} disabled={true} value={etiquetasamod[0]}/>
        <TextField  placeholder="Español" id={"es_MX"} defaultValue={etiquetasamod[1]}/>
        <TextField placeholder="Inglés" id={"en_US"} defaultValue={etiquetasamod[2]}/>
        <TextField placeholder="Frances" id={"fr_CA"} defaultValue={etiquetasamod[3]}/>
        <TextField  placeholder="Portugués" id={"pt_BR"} defaultValue={etiquetasamod[4]}/>
        <TextField placeholder="Chino" id={"zh_CN"} defaultValue={etiquetasamod[5]}/>
      </div>
      </div>
      <div className="flex flex-row gap-6 justify-end px-5">
        <Button isDisabled={botonhabilitado}>Cancelar</Button>
        <Button variation="primary" isDisabled={botonhabilitado} isLoading={isLoad} loadingText="Guardando" onClick={()=>actualiza()}>Guardar</Button>
      </div>
    </div>
  );
}

export default CreateTags;
