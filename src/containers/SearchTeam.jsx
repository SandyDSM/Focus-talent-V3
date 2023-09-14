import React from "react";
import HeadTeam from "../components/HeadTeam";
import { Loader } from "@aws-amplify/ui-react";
import { API } from 'aws-amplify';
import CardSerch from "../components/CardSerch";
import Filters from "../components/Filters";
import CardDos from "../components/CardDos";

import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";

const SearchTeam = (sub) => {
  const {collaborators, getCollaborators, isLoading, usuarioActualDatos, ordena, banerSearch, resultsComplete} = useContext(CollaboratorsContext);
 
  function getData() {
    const apiName = 'API Behaviors';
    const path = '/translations';
    const myInit = {
      headers: {}, // OPTIONAL
      queryStringParameters: {
        LANGUAGE: `'${usuarioActualDatos.IDIOMA}'`,
      }
    };
  
    return API.get(apiName, path, myInit);
  }

  const fetcLanguage = async () => {
    try{
      const response = await getData();
     // console.log("Languaje",response)
    }catch (error) {
     // console.log("error:", error);
    }
  };


  useEffect(() => {
    if (usuarioActualDatos.ID_COLABORADOR != undefined) {
      getCollaborators(usuarioActualDatos.ID_COLABORADOR, "SetColaborators");
    }
  }, [usuarioActualDatos.ID_COLABORADOR]);

  useEffect(() => { 
    //actualizaBusqueda(collaborators);
    fetcLanguage();
  }, [usuarioActualDatos]);


function cambia(evento){
  ordena(evento);
  //console.log(collaborators);//x
}

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }
  return (
    <>
      <HeadTeam title={banerSearch} btn='true' all='true' />
    { /* <CardSerch collaborators={collaborators}/>*/}
      <Filters/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 px-4 gap-4 mb-12">
      <div className='cardTitle col-span-1 sm:col-span-2 md:col-span-3 bg-bmb-secundary'>Resultado de la Búsqueda</div>
      {resultsComplete != null ? (resultsComplete.length <= 0 ?(
        <p className='col-span-3 items-center text-center mt-6'>"No se encontraron colaboradores"</p>
      ):      
      (resultsComplete?.map((colaborator, index) => (
        <CardDos key={index} colaborator={colaborator} sub={sub}/>
        )))):(<p className='col-span-3 items-center text-center mt-6'>No se encontraron colaboradores</p>)
        }
  </div>
    </>
  );
};

export default SearchTeam;
