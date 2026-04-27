import React,{useEffect, useContext} from 'react'
import { Person } from '../ui-components'
import CollaboratorsContext from "../context/collaborators";

function BannerUser() {
    const {usuarioActualDatos, photo} = useContext(CollaboratorsContext)

    const sendOverridesPerson = {
        "image 3": { src: photo },
        Heading: { 
          children: `${usuarioActualDatos.NOMBRE} ${usuarioActualDatos.APELLIDOS}`,
          color: "#043495"
         },
        close: {display: 'none '},
    }
    const sendOverridesPersonLoad = {
      "image 3": { src: "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png" },
      Heading: { children: " " },
      close: {display: 'none '}
  }

  return (
    <div>
      {
        usuarioActualDatos.NOMBRE == undefined ? <Person width={"100%"} overrides={sendOverridesPersonLoad}/> : <Person width={"100%"} overrides={sendOverridesPerson}/>
      }
        
    </div>
  )
}

export default BannerUser