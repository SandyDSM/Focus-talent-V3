import React from 'react'
import Iconfilter from '../ui-components/Iconfilter'
import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";
import { useTranslation } from "react-i18next";


function Filters() {

  const { resultsComplete, setResultsComplete, resultsCompleteOrg } = useContext(CollaboratorsContext);
  const { t } = useTranslation();
  const [entidad, setEntidad] = useState([])
  const [organizacion, setOrganizacion] = useState([])
  const [nivel, setNivel] = useState([])
  const [puesto, setPuesto] = useState([])
  const [geo, setGeo] = useState([])
  const [eEntidad, setEEntidad] = useState("");
  const [eOrg, setEOrg] = useState("");
  const [ePuesto, setEPuesto] = useState("");
  const [eNivel, setENivel] = useState("");
  const [eGeo, setEGeo] = useState("");

  useEffect(()=>{
    Entidad();
    Organizacion();
    Puesto();
    Nivel();
    Geo();
  },[resultsComplete])

  function DeleteFilter(){
    setEEntidad("")
    setEOrg("")
    setEPuesto("")
    setENivel("")
    setEGeo("");
    setResultsComplete(resultsCompleteOrg);
  }

  function Entidad(){
    let optionEntidades = resultsComplete.reduce((entidades,item)=>{
        if(!entidades.includes(item.ENTIDAD_LEGAL)){
          entidades.push(item.ENTIDAD_LEGAL);
        }
        return entidades ;
      },[])
      setEntidad(optionEntidades);
  } 

  function Organizacion(){
    let optionOrganizacion = resultsComplete.reduce((organizacion,item)=>{
        if(!organizacion.includes(item.ORGANIZACION)){
          organizacion.push(item.ORGANIZACION);
        }
        return organizacion ;
      },[])
      setOrganizacion(optionOrganizacion);
  } 

  function Puesto(){
    let optionPuesto = resultsComplete.reduce((puesto,item)=>{
        if(!puesto.includes(item.PUESTO)){
          puesto.push(item.PUESTO);
        }
        return puesto ;
      },[])
      setPuesto(optionPuesto);
  }

  function Nivel(){
    let optionNivel = resultsComplete.reduce((nivel,item)=>{
        if(!nivel.includes(item.NIVEL)){
          nivel.push(item.NIVEL);
        }
        return nivel ;
      },[])
      setNivel(optionNivel);
  }

  function Geo(){
    let optionGeo = resultsComplete.reduce((geo,item)=>{
        if(!geo.includes(item.UBICACION_GEOGRAFICA)){
          geo.push(item.UBICACION_GEOGRAFICA);
        }
        return geo ;
      },[])
      setGeo(optionGeo);
  }

  const FilterEntidad = (entidad) => {
    let resultadosFiltro = resultsComplete.filter((result) => {
      if (result.ENTIDAD_LEGAL?.toString().includes(entidad)) {
        return result;
      }
    });
    setResultsComplete(resultadosFiltro);
  };

  const handleChangeEntidad=(e)=>{
    //setCanal(e.target.value)
    /*setEGeo("")
    setEOrg("")
    setEPuesto("")*/
    setEEntidad(e.target.value);
    FilterEntidad(e.target.value);
  }
  console.log(eEntidad);
//
  const FilterOrg = (organizacion) => {
    let resultadosFiltro = resultsComplete.filter((result) => {
      if (result.ORGANIZACION?.toString().includes(organizacion)) {
        return result;
      }
    });
    setResultsComplete(resultadosFiltro);
  };

  const handleChangeOrg=(e)=>{
    //setCanal(e.target.value)
   /* setEEntidad("")
    setEGeo("")
    setEPuesto("")*/
    setEOrg(e.target.value);
    FilterOrg(e.target.value);
  }
//
const FilterNivel = (nivel) => {
  let resultadosFiltro = resultsComplete.filter((result) => {
    if (result.NIVEL?.toString().includes(nivel)) {
      return result;
    }
  });
  setResultsComplete(resultadosFiltro);
};

const handleChangeNivel=(e)=>{
  //setCanal(e.target.value)
  /*setEEntidad("")
  setEOrg("")
  setEGeo("")*/
  setENivel(e.target.value);
  FilterNivel(e.target.value);
}
//
const FilterPuesto = (puesto) => {
  let resultadosFiltro = resultsComplete.filter((result) => {
    if (result.PUESTO?.toString().includes(puesto)) {
      return result;
    }
  });
  setResultsComplete(resultadosFiltro);
};

const handleChangePuesto=(e)=>{
  //setCanal(e.target.value)
  /*setEEntidad("")
  setEOrg("")
  setEGeo("")*/
  setEPuesto(e.target.value);
  FilterPuesto(e.target.value);
}

//
const FilterGeo = (geo) => {
  let resultadosFiltro = resultsComplete.filter((result) => {
    if (result.UBICACION_GEOGRAFICA?.toString().includes(geo)) {
      return result;
    }
  });
  setResultsComplete(resultadosFiltro);
};

const handleChangeGeo=(e)=>{
  //setCanal(e.target.value)
  /*setEEntidad("")
  setEOrg("")
  setEPuesto("")*/
  setEGeo(e.target.value);
  FilterGeo(e.target.value);
}

  return (
    <div className='card mt-2 mx-4 md:mx-8'>
        <div className='flex align-center justify-between	'>
          <div className='flex align-center '> 
            <Iconfilter/>
            <p className='font-bold py-1.5'>{t('filtColab')}</p>
          </div>
            <button className="text-bmb-secundary text-sm underline hover:no-underline cursor-pointer" onClick={() => DeleteFilter()}>{t('filtBorrFiltr')}</button>
        </div>
        <div className='flex flex-col gap-2 md:flex-row md:gap-6 align-center mt-2'>
        <select
            className="w-full md:w-1/4 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
            onChange={handleChangeOrg}
            value={eOrg}
          >
            <option value="">{t('filtOrg')}</option>
            {organizacion.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <select
            className="w-full md:w-1/4 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
            onChange={handleChangeEntidad}
            value={eEntidad}
          >
            <option value="">{t('filtEntLegal')}</option>
            {entidad.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <select
            className="w-full md:w-1/4 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
            onChange={handleChangeNivel}
            value={eNivel}
          >
            <option value="">{t('filtNivel')}</option>
            {nivel.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <select
            className="w-full md:w-1/4 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
            onChange={handleChangePuesto}
            value={ePuesto}
          >
            <option value="">{t('filtPuesto')}</option>
            {puesto.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <select
            className="w-full md:w-1/4 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
            onChange={handleChangeGeo}
            value={eGeo}
          >
            <option value="">{t('filtUbicGeog')}</option>
            {geo.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
    </div>
  )
}

export default Filters