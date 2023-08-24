import React from "react";
import HeadTeam from "../components/HeadTeam";
import { Loader } from "@aws-amplify/ui-react";
import { API } from 'aws-amplify';
import CardSerch from "../components/CardSerch";
import Filters from "../components/Filters";


import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";

const SearchTeam = () => {
  const {collaborators, getCollaborators, isLoading, usuarioActualDatos, ordena, banerSearch} = useContext(CollaboratorsContext);
 
  console.log(usuarioActualDatos.IDIOMA)
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

  console.log("aqui ",collaborators);
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
      <HeadTeam title={banerSearch} />
    { /* <CardSerch collaborators={collaborators}/>*/}
      <Filters/>
    </>
  );
};

export default SearchTeam;
