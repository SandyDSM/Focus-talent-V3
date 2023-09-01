import React from 'react'
import BannerSearch from './BannerSearch';
import BannerSearchAll from './BannerSearchAll';
import { useContext} from "react";
import CollaboratorsContext from "../context/collaborators";


function HeadTeam({title = "Mi Equipo", OpcionSelect, btn="false", all='false'}) {
  const {buttonMyTeam, busqueda } = useContext(CollaboratorsContext);
  const sendOverridesBanner = {
        "SearchField": { 
          placeholder: busqueda,
          hasSearchButton: btn=="true" ? true :false,
          hasSearchIcon: btn=="true" ? false :true
         },
         Heading:{children: buttonMyTeam}
  }
    
  return (
    <div className='mt-2 flex flex-col gap-2'>
        { all == "false" ?
          <BannerSearch width={"100%"} overrides={sendOverridesBanner} OpcionSelect={OpcionSelect}/> :
          <BannerSearchAll width={"100%"} overrides={sendOverridesBanner} /> 
          }
    </div>
  )
}

export default HeadTeam;