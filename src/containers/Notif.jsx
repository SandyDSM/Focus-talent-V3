import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from '@aws-amplify/ui-react'

import HeadAdmin from '../components/HeadAdmin'
import TableNotif from '../components/TableNotif'
import EditorNotification from '../components/EditorNotification';
import Modal from '../components/Modal';
import { TextField } from '@aws-amplify/ui-react';



function Notif() {

const [open, setOpen] = useState(false);
const [cuerpo, setCuerpo]=useState("");
const [notificaciones, setNotificaciones]=useState([]);
const [titulo, setTitulo]=useState("");
const [idioma, setIdioma]=useState("idioma");
const [idiomaDes, setIdiomaDes]=useState("");
useEffect(() => {
  GetNotificaciones();
},[]);


const GetNotificaciones=async ()=>{
  try {
    const respdesemp = await fetch(
      `https://talento-itzahuia.com/SAC/gb_notificaciones.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({         
  "TOKEN": "8da9aebd984ef3897b280ff7efabf83d931f591b"
        })
      }
    ); 
    const datos = await respdesemp.json();
    setNotificaciones(datos);
console.log(datos);

  } catch (error) {
    setNotificaciones([]);
  } 
}


 


  const Insertar= async () => {
    try {
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_notificaciones.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "ACCION":"Inserta",
    "TITULO":document.getElementById("prueba").value,
    "ASUNTO":document.getElementById("prueba").value,
    "CUERPO":cuerpo,
    "IDIOMA":document.getElementById("idioma").value,
    "TOKEN": "8da9aebd984ef3897b280ff7efabf83d931f591b"
          })
        }
      ); 
      alert("datos insertados");
      const datos = await respdesemp.json();
    } catch (error) {
      console.log(error);
    } 
  };

function openModal(idioma){
  setOpen(true);
 // alert(document.getElementById("prueba").defaultValue);
const notificacion=notificaciones?.filter((e)=>(e.IDIOMA)==idioma);
notificacion.map((not)=>{setTitulo(not.TITULO);
  if(idioma==="English (US)"){
    setIdioma("English (US)");
    setIdiomaDes("Inglés")
  }else if(idioma==="French (Canada)"){
    setIdioma("French (Canada)");
    setIdiomaDes("Francés");
  }else if(idioma==="Spanish (Latin America)"){
    setIdioma("Spanish (Latin America)");
    setIdiomaDes("Español");
  }else if(idioma==="Chinese (Simplified)"){
    setIdioma("Chinese (Simplified)");
    setIdiomaDes("Chino");
  }else if(idioma==="Portuguese (Brazil)"){
    setIdioma("Portuguese (Brazil)");
    setIdiomaDes("Portugués");
  }else{
    setIdioma("");
    setIdiomaDes("Seleciiona");
  }
  setCuerpo(not.CUERPO);
});

 
}


  return (
    <div className='flex flex-col gap-4'>
      <HeadAdmin title={"Administrar notificaciones"} />   
      <main className='px-11 flex flex-col gap-8 mt-4'>
        <div className='flex flex-col items-end'>
         <Button variation='primary' onClick={()=>setOpen(true)}>Agregar notificación</Button>
        </div>
       
        <Modal open={open} setOpen={setOpen}
      elementBody={
       <div>Editor de Notificaciones
        <br/>
        <select id={"idioma"}>
          <option defaultValue={idioma} value={idioma}>{idiomaDes}</option>
          <option value="English (US)">Inglés</option>
          <option value="French (Canada)">Francés</option>
          <option value="Spanish (Latin America)">Español</option>
          <option value="Chinese (Simplified)">Chino</option>
          <option value="Portuguese (Brazil)">Portugués</option>
          </select>
<br/>
Asunto:<TextField id="prueba" style={{width:400, marginBottom:15}} defaultValue={titulo}/>

       <EditorNotification cuerpo={setCuerpo} defcuerpo={cuerpo}/>
       <div className='flex flex-col items-end' style={{marginTop:50, marginBottom:50}}>
         <Button variation='primary' onClick={()=>Insertar()}>Guardar</Button>
        </div>
       </div>
      }
      />


         
        <TableNotif notif={notificaciones} handleOpen={openModal} limpia={setIdioma}/>
       
     
      </main>   
    </div>
  )
}

export default Notif