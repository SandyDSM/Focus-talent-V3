import React from 'react'

import { useState, useEffect } from 'react';
import HeadAdmin from '../components/HeadAdmin'
import Modal from '../components/Modal';
import TableTests from '../components/TableTests'
import TableOrganizations from '../components/TableOrganizations'


function Test() {
  const[anios, setAnios]=useState([]);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    getAnios();
 },[]);

 function close(){
  setOpen(false)
}

  const getAnios= async () => {
    try {
      //setIsLoading(true);
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_anios_eval.php`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json"
          },
        }
      ); 
      const datos = await respdesemp.json();
      setAnios(datos);
     console.log("datos",datos);
      // alert(datos);
    } catch (error) {
      setAnios([]);
    } 
  };
  function openModal(){
    setOpen(true)
    console.log("abrir")
  }
  
  return (
    <div className='flex flex-col gap-4'>
      <Modal open={open} setOpen={setOpen}
      elementBody={
        <TableOrganizations close={close}/>
      }
      />
      <HeadAdmin title={"Evaluaciones de desempeño y potencial"} />
      <main className='px-11'>
        <TableTests aniosx={anios} handleOpen={openModal}/>
      </main>
    </div>
  )
}

export default Test