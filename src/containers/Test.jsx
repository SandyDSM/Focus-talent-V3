import React from 'react'

import { useState, useEffect } from 'react';
import HeadAdmin from '../components/HeadAdmin'
import Modal from '../components/Modal';
import TableTests from '../components/TableTests'
import TableOrganizations from '../components/TableOrganizations'
import TalentElements from '../components/TalentElements';
import { API } from "aws-amplify";

function Test() {
  const[anios, setAnios]=useState([]);
  const[aniosCalib, setAniosCalib]=useState([]);
  const [open, setOpen] = useState(false)
  const [option, setOption] = useState(1);

  const toggleTab = (index) => {
    setOption(index);
  };


  useEffect(() => {
    getAnios();
    getAniosCalib();
 },[]);

 function close(){
  setOpen(false)
}

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
const getAniosCalib= async () => {
  try {
    //setIsLoading(true);
    const respdesemp = await fetch(
      `https://talento-itzahuia.com/SAC/gb_anios_calib.php`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
      }
    ); 
    const datos = await respdesemp.json();
    setAniosCalib(datos);
      } catch (error) {
    setAnios([]);
  } 
};


/*

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
        } catch (error) {
      setAnios([]);
    } 
  };
*/

const getAnios = async () => {
  try{
    let parametros={};
    const response = await getData('API Anios', '/getanios', parametros);
    setAnios(response);
  }catch (error) {
    console.log("error:", error);
  }
};

const getAniosCalib = async () => {
  try{
    let parametros={};
    const response = await getData('API Anios', '/getanioscalib', parametros);
    setAniosCalib(response);
  }catch (error) {
    console.log("error:", error);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 px-12">
          <div className={`md:rounded-l-lg ${option === 1 ? "tabActive" : "tab"}`} onClick={()=>toggleTab(1)}>Liberar y notificar</div>
          <div className={`md:rounded-r-lg ${option === 2 ? "tabActive" : "tab"}`} onClick={()=>toggleTab(2)}>Elementos de talento</div>
        </div>

      <main className='px-11'>
        {option===1 && <TableTests aniosx={anios} handleOpen={openModal}/>}
        {option===2 && <TalentElements aniosc={aniosCalib}/>}
      </main>
    </div>
  )
}

export default Test