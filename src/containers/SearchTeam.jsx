import React from "react";
import { Loader } from "@aws-amplify/ui-react";
import {Button } from '@aws-amplify/ui-react';
import Filters from "../components/Filters";
import CardDos from "../components/CardDos";

import { useContext, useEffect, useState } from "react";
import CollaboratorsContext from "../context/collaborators";

const SearchTeam = (sub) => {
  const {getCollaborators, isLoading, usuarioActualDatos, resultsComplete} = useContext(CollaboratorsContext);

  const onClose = () => {
    sub.setCloseSerchAll(0)
  };
 
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }
  return (
    <div className="mt-4">
      <div className='cardTitle col-span-1 sm:col-span-2 md:col-span-3 bg-bmb-secundary flex flex-row items-center gap-6 justify-between mx-8'>
        <p>Resultado de la Búsqueda</p>
        <Button variation="link" style={{ color: "#FFF" }}onClick={() => onClose()}>Cerrar</Button>
      </div>
      <Filters/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 px-4 gap-4 mb-12">
      {resultsComplete != null ? (resultsComplete.length <= 0 ?(
        <p className='col-span-3 items-center text-center mt-6'>"No se encontraron colaboradores"</p>
      ):      
      (resultsComplete?.map((colaborator, index) => (
        <CardDos key={index} colaborator={colaborator} sub={sub}/>
        )))):(<p className='col-span-3 items-center text-center mt-6'>No se encontraron colaboradores</p>)
        }
  </div>
    </div>
  );
};

export default SearchTeam;
