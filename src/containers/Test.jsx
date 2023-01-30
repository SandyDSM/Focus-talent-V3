import React from 'react'

import { useState, useEffect } from 'react';
import HeadAdmin from '../components/HeadAdmin'
import TableOrganizations from '../components/TableOrganizations';
import TableTests from '../components/TableTests'


function Test() {
  const[anios, setAnios]=useState([]);


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
  
  
  useEffect(() => {
      getAnios();
   },[]);

  return (
    <div className='flex flex-col gap-4'>
      <HeadAdmin title={"Evaluaciones de desempeño y potencial"} />
      <main>
        <TableTests aniosx={anios}/>
        {/*<TableOrganizations/>*/}
      </main>
    </div>
  )
}

export default Test