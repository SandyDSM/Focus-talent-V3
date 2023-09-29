import React from 'react'
import { SelectField, Heading, Button } from '@aws-amplify/ui-react';
import Iconfilter from '../ui-components/Iconfilter'
import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";


function Filters() {

  const {resultsComplete, setResultsComplete, resultsCompleteOrg, filtColab, filtEntLegal, filtOrg, filtPuesto, filtUbicGeog} = useContext(CollaboratorsContext);
  const [entidad, setEntidad] = useState([])
  const [organizacion, setOrganizacion] = useState([])
  const [puesto, setPuesto] = useState([])
  const [geo, setGeo] = useState([])
  const [eEntidad, setEEntidad] = useState("");
  const [eOrg, setEOrg] = useState("");
  const [ePuesto, setEPuesto] = useState("");
  const [eGeo, setEGeo] = useState("");

  useEffect(()=>{
    Entidad();
    Organizacion();
    Puesto();
    Geo();
  },[resultsComplete])

  function Entidad(){
    let optionEntidades = resultsCompleteOrg.reduce((entidades,item)=>{
        if(!entidades.includes(item.ENTIDAD_LEGAL)){
          entidades.push(item.ENTIDAD_LEGAL);
        }
        return entidades ;
      },[])
      setEntidad(optionEntidades);
  } 

  function Organizacion(){
    let optionOrganizacion = resultsCompleteOrg.reduce((organizacion,item)=>{
        if(!organizacion.includes(item.ORGANIZACION)){
          organizacion.push(item.ORGANIZACION);
        }
        return organizacion ;
      },[])
      setOrganizacion(optionOrganizacion);
  } 

  function Puesto(){
    let optionPuesto = resultsCompleteOrg.reduce((puesto,item)=>{
        if(!puesto.includes(item.PUESTO)){
          puesto.push(item.PUESTO);
        }
        return puesto ;
      },[])
      setPuesto(optionPuesto);
  }

  function Geo(){
    let optionGeo = resultsCompleteOrg.reduce((geo,item)=>{
        if(!geo.includes(item.UBICACION_GEOGRAFICA)){
          geo.push(item.UBICACION_GEOGRAFICA);
        }
        return geo ;
      },[])
      setGeo(optionGeo);
  }

  const FilterEntidad = (entidad) => {
    let resultadosFiltro = resultsCompleteOrg.filter((result) => {
      if (result.ENTIDAD_LEGAL?.toString().includes(entidad)) {
        return result;
      }
    });
    setResultsComplete(resultadosFiltro);
  };

  const handleChangeEntidad=(e)=>{
    //setCanal(e.target.value)
    setEGeo("")
  setEOrg("")
  setEPuesto("")
    setEEntidad(e.target.value);
    FilterEntidad(e.target.value);
  }
//
  const FilterOrg = (organizacion) => {
    let resultadosFiltro = resultsCompleteOrg.filter((result) => {
      if (result.ORGANIZACION?.toString().includes(organizacion)) {
        return result;
      }
    });
    setResultsComplete(resultadosFiltro);
  };

  const handleChangeOrg=(e)=>{
    //setCanal(e.target.value)
    setEEntidad("")
    setEGeo("")
    setEPuesto("")
    setEOrg(e.target.value);
    FilterOrg(e.target.value);
  }
//
const FilterPuesto = (puesto) => {
  let resultadosFiltro = resultsCompleteOrg.filter((result) => {
    if (result.PUESTO?.toString().includes(puesto)) {
      return result;
    }
  });
  setResultsComplete(resultadosFiltro);
};

const handleChangePuesto=(e)=>{
  //setCanal(e.target.value)
  setEEntidad("")
  setEOrg("")
  setEGeo("")
  setEPuesto(e.target.value);
  FilterPuesto(e.target.value);
}

//
const FilterGeo = (geo) => {
  let resultadosFiltro = resultsCompleteOrg.filter((result) => {
    if (result.UBICACION_GEOGRAFICA?.toString().includes(geo)) {
      return result;
    }
  });
  setResultsComplete(resultadosFiltro);
};

const handleChangeGeo=(e)=>{
  //setCanal(e.target.value)
  setEEntidad("")
  setEOrg("")
  setEPuesto("")
  setEGeo(e.target.value);
  FilterGeo(e.target.value);
}

  return (
    <div className='card mt-2 mx-8'>
        <div className='flex align-center'>
            <Iconfilter/>
            <p className='font-bold py-1.5'>{filtColab}</p>
        </div>
        <div className='flex flex-col gap-2 md:flex-row md:gap-6 align-center mt-2'>
            
            <SelectField 
            placeholder={filtEntLegal}          
            onChange={handleChangeEntidad}
            width={{ base: "100%", large: "25%" }}
            value={eEntidad}
            >
            {entidad.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
            </SelectField>
            <SelectField placeholder={filtOrg} onChange={handleChangeOrg} width={{ base: "100%", large: "25%" }}
            value={eOrg}
            >
            {organizacion.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
            </SelectField>
            <SelectField placeholder= {filtPuesto} onChange={handleChangePuesto} width={{ base: "100%", large: "25%" }} 
            value={ePuesto}
            >
            {puesto.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
            </SelectField>
            <SelectField placeholder= {filtUbicGeog} onChange={handleChangeGeo} width={{ base: "100%", large: "25%" }}
            value={eGeo}
            >
            {geo.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
            </SelectField>
        </div>
    </div>
  )
}

export default Filters