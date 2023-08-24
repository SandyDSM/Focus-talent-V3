import React from 'react'
import BannerSearch from './BannerSearch';
import { useContext} from "react";
import CollaboratorsContext from "../context/collaborators";


function HeadTeam({title = "Mi Equipo", OpcionSelect}) {
  const {buttonMyTeam, busqueda } = useContext(CollaboratorsContext);
  const sendOverridesBanner = {
        "SearchField": { 
          placeholder: busqueda,
          hasSearchButton: false,
          hasSearchIcon: true
         },
         Heading:{children: buttonMyTeam}
  }
    
  return (
    <div className='mt-2 flex flex-col gap-2'>
        <BannerSearch width={"100%"} hassearchbutton={"false"} overrides={sendOverridesBanner} OpcionSelect={OpcionSelect}/>
    </div>
  )
}

export default HeadTeam;