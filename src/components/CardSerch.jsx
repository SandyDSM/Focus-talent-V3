import React from 'react'
import UserSerch from './UserSerch'
import { Divider } from '@aws-amplify/ui-react'
import CollaboratorsContext from "../context/collaborators";
import { useContext, useEffect, useState } from "react";

const CardSerch = ({collaborators, setCloseSerchAll}) => {
  const {filtNoSeEncColabs} = useContext(CollaboratorsContext);
  return (
    <div className='w-11/12 md:w-96 overflow-y-auto max-h-96 absolute top-28 md:top-16 right-4 md:right-0 z-10 drop-shadow-md'>
    <div className='card flex flex-col justify-center gap-4 divide-y divide-blue-200'>
      {collaborators <= 0 ? <p className='col-span-3 items-center text-center mt-6 px-6'>{filtNoSeEncColabs}</p>
      :(
        collaborators?.map((colaborator, index) => (
        <UserSerch key={index} colaborator={colaborator} setCloseSerchAll={setCloseSerchAll}/>
        ))
        )}
    </div>
    </div>
  )
}

export default CardSerch