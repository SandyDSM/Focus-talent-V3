import React from 'react'
import CardDos from "./CardDos";


function Tabs({title= "Título", collaborators }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 px-4 gap-4 mb-12">
      <div className='cardTitle col-span-1 sm:col-span-2 md:col-span-3 bg-bmb-secundary'>{title}</div>
      {collaborators?.map((colaborator) => (
        <CardDos key={colaborator.id} colaborator={colaborator}/>
        ))}
  </div>

  )
}

export default Tabs