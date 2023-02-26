import React from 'react'
import CardDos from "./CardDos";


function Tabs({title= "Título" }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 px-4 gap-4">
      <div className='cardTitle col-span-1 sm:col-span-2 md:col-span-3 bg-bmb-secundary'>{title}</div>
        <CardDos/>
        <CardDos/>
        <CardDos/>
  </div>

  )
}

export default Tabs