import React, { useContext } from 'react'
import CardDos from "./CardDos";
import { Loader } from "@aws-amplify/ui-react";
import CollaboratorsContext from "../context/collaborators";


function Tabs({title= "Título", collaborators, sub }) {
  const {isLoading, noColaborators, origHireDate} = useContext(CollaboratorsContext);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 px-0 sm:px-4 gap-4 mb-12">
      <div className='cardTitle col-span-1 sm:col-span-2 md:col-span-3 bg-bmb-secundary w-full'>{title}</div>
      {collaborators != null ? (collaborators.length <= 0 ?(
        <p className='col-span-1 sm:col-span-2 md:col-span-3 items-center text-center mt-6 w-full'>{noColaborators}</p>
      ):      
      (collaborators?.map((colaborator, index) => (
        <CardDos key={index} colaborator={colaborator} sub={sub}/>
        )))):(<p className='col-span-1 sm:col-span-2 md:col-span-3 items-center text-center mt-6 w-full'>{noColaborators}</p>)
        }
  </div>

  )
}

export default Tabs