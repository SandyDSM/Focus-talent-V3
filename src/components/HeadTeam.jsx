import React from 'react'
import BannerSearch from './BannerSearch';
import BannerSearchAll from './BannerSearchAll';
import { useContext} from "react";
import CollaboratorsContext from "../context/collaborators";


function HeadTeam({title = "Mi Equipo", OpcionSelect, all, setCloseSerchAll}) {
  const {buttonMyTeam, busqueda } = useContext(CollaboratorsContext);
  const sendOverridesBanner = {
        "SearchField": { 
          width: { base: "100%", large: "360px" },
          placeholder: busqueda,
          hasSearchButton: all=="1" ? true :false,
          hasSearchIcon: all=="1" ? false :true
         },
         Heading:{children: buttonMyTeam}
  }
    
  return (
    <div className='mt-2 flex flex-col gap-2'>
        { all == "0" ?
          <BannerSearch width={"100%"} overrides={sendOverridesBanner} OpcionSelect={OpcionSelect}/> :
          <BannerSearchAll width={"100%"} overrides={sendOverridesBanner} setCloseSerchAll={setCloseSerchAll}/> 
          }
    </div>
  )
}

export default HeadTeam;