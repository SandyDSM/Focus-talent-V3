import React from "react";
import { Button } from "./ui/Button";
import HeadCreateTable from "./HeadCreateTags";
import { useState } from "react";
import Swal from 'sweetalert2';
import { API } from "aws-amplify";



function CreateTags({etiquetasamod, botonhabilitado, setetiquetasmod, reloadTags, setReloadTags}) {

  const [isLoad, setIsLoad ] = useState(false)
///////////////////////////////////////////////////////////////// 

function getData(etiquetasx, espaniol, ingles, frances, portugues, chino, rumano) {
  const apiName = 'API Behaviors';
  const path = '/edittags';
  const myInit = {
    headers: {}, // OPTIONAL
    queryStringParameters: {
      ETIQUETA: `${etiquetasx}`,
      es_MX: `${espaniol}`, 
      en_US : `${ingles}`,
      fr_CA : `${frances}`,
      pt_BR : `${portugues}`, 
      zh_CN : `${chino}`,
      ro_RO : `${rumano}`
    }
  };

  return API.get(apiName, path, myInit);
}

const updateTags = async (etiquetasx, espaniol, ingles, frances, portugues, chino, rumano) => {
 
  try{
    const response = await getData(etiquetasx, espaniol, ingles, frances, portugues, chino, rumano);
   setReloadTags(!reloadTags);
    //console.log("Datos actualizados");

    Swal.fire({
      icon: 'success',
      text: 'Las etiquetas se han almacenado exitosamente',
      confirmButtonText: "Entendido",
      confirmButtonColor:"#004B85"
    }).then((result) => {
      if (result.isConfirmed) {
        //setOpen(false)
        clear();
      }
    })

  }catch (error) {
  
    console.log("error:", error);
  }finally{
    setIsLoad(false);
  }

};





/*
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
   //console.log("el log es: ",datos);
  } catch (error) {
   
   console.log("Si hay error", error);
  }  finally{
    setIsLoad(false);
  }
};
*/
//////////////////////////////////////////////////////////////////
function actualiza()
{
  updateTags(
    document.getElementById("etiqueta").value.replace("'","''"),
    document.getElementById("es_MX").value.replace("'","''"),
    document.getElementById("en_US").value.replace("'","''"),
    document.getElementById("fr_CA").value.replace("'","''"),
    document.getElementById("pt_BR").value.replace("'","''"),
    document.getElementById("zh_CN").value.replace("'","''"),
    document.getElementById("ro_RO").value.replace("'","''")
  )
}

function clear(){
  setetiquetasmod(["", "", "", "", "", "", ""])
}

/*function Alerta(){
  Swal.fire({
    icon: 'success',
    text: 'La Etiqueta se ha guardado',
    confirmButtonText: "Entendido",
    confirmButtonColor:"#004B85"
  }).then((result) => {
    if (result.isConfirmed) {
      clear();
    }
  })
}*/
///////////////////////////////////////////////////////////////////
  return (
    <div className="card flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-1 my-2">
        <h3 className="text-base font-semibold">Actualizar Etiquetas</h3>
        <hr className="border-t border-gray-200 w-full" />
      </div>
      <div className="flex flex-col gap-2">
      <HeadCreateTable/>
      <div className="flex flex-col sm:flex-row justify-between gap-2 px-5 ">
        <input id="etiqueta" placeholder="Nombre" disabled value={etiquetasamod[0]} readOnly className="border border-gray-300 rounded px-2 py-1.5 text-sm bg-gray-100 cursor-not-allowed w-full" />
        <input id="es_MX" placeholder="Español" defaultValue={etiquetasamod[1]} className="border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue w-full" />
        <input id="en_US" placeholder="Inglés" defaultValue={etiquetasamod[2]} className="border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue w-full" />
        <input id="fr_CA" placeholder="Frances" defaultValue={etiquetasamod[3]} className="border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue w-full" />
        <input id="pt_BR" placeholder="Portugués" defaultValue={etiquetasamod[4]} className="border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue w-full" />
        <input id="zh_CN" placeholder="Chino" defaultValue={etiquetasamod[5]} className="border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue w-full" />
        <input id="ro_RO" placeholder="Rumano" defaultValue={etiquetasamod[6]} className="border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue w-full" />
      </div>
      </div>
      <div className="flex flex-row gap-6 justify-end px-5">
        <Button disabled={botonhabilitado} onClick={() => clear()}>Cancelar</Button>
        <Button variation="primary" disabled={botonhabilitado || isLoad} onClick={() => actualiza()}>
          {isLoad ? "Guardando..." : "Guardar"}
        </Button>
      </div>
    </div>
  );
}

export default CreateTags;
