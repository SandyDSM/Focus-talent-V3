import React,{useEffect, useContext} from 'react'
import { Person } from '../ui-components'
import CollaboratorsContext from "../context/collaborators";

function BannerUser() {
    const {usuarioActualDatos, photo} = useContext(CollaboratorsContext)

    const sendOverridesPerson = {
        "image 3": { src: photo },
        Heading: { children: `${usuarioActualDatos.NOMBRE} ${usuarioActualDatos.APELLIDOS}`, color:'#fff' },
        close: {display: 'none '},
        Person: {backgroundImage: 'linear-gradient(90deg, rgba(115,178,245,1), rgba(34,109,225,1), rgba(221,106,73,1), rgba(123,141,226,1), rgba(153,218,154,1))'}
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