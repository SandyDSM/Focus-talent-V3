import React from 'react'
import HeadCreateTags from './HeadCreateTags'
import TableRowTags from './TableRowTags'
import { useState } from 'react';
import { useEffect } from 'react';


function ShowTags({etiquetas, etiquetasmod, buttonhabilitado}) {

  const setetiquetasamod=(value)=>{etiquetasmod(value)}
  const botonhabilitado=(value)=>{buttonhabilitado(value)}


  return (
    <div className='card flex flex-col gap-6 p-4 w-full mb-8 overflow-x-scroll'>
        <div className="flex flex-col gap-1 my-2">
        <h3 className="text-base font-semibold">Etiquetas</h3>
      <hr className="border-t border-gray-200 w-full" />
      </div>
        <HeadCreateTags ver=''/>
        
      
      {etiquetas?.map((etiq)=>(  
        <TableRowTags key={etiq.ETIQUETA}
        etiqueta={etiq.ETIQUETA}
        espvalue={etiq.es_MX}
        engvalue={etiq.en_US}
        fravalue={etiq.fr_CA}
        porvalue={etiq.pt_BR}
        zhovalue={etiq.zh_CN}
        rumvalue={etiq.ro_RO}
        etiquetasamod={setetiquetasamod}
        buttonavailable={botonhabilitado}
        />
        ))}
    </div>
  )
}

export default ShowTags