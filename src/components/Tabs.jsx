import React, { useContext } from 'react'
import CardDos from "./CardDos";
import { Loader } from "@aws-amplify/ui-react";
import CollaboratorsContext from "../context/collaborators";


function Tabs({title= "Título", collaborators, sub }) {
  const {isLoading, noColaborators} = useContext(CollaboratorsContext);
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 px-4 gap-4 mb-12">
      <div className='cardTitle col-span-1 sm:col-span-2 md:col-span-3 bg-bmb-secundary'>{title}</div>
      {collaborators != null ? (collaborators.length <= 0 ?(
        <p className='col-span-3 items-center text-center mt-6'>{noColaborators}</p>
      ):      
      (collaborators?.map((colaborator) => (
        <CardDos key={colaborator.id} colaborator={colaborator} sub={sub}/>
        )))):(<p className='col-span-3 items-center text-center mt-6'>{noColaborators}</p>)
        }
  </div>

  )
}

export default Tabs