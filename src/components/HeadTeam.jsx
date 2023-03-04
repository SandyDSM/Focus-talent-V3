import React from 'react'
import BannerSearch from './BannerSearch';


function HeadTeam({title = "Mi Equipo", OpcionSelect}) {
    const sendOverridesBanner = {
        "SearchField": { 
          placeholder: "Buscar colaborador",
          hasSearchButton: false,
          hasSearchIcon: true
         },
         Heading:{children: title}
         
    }
    
  return (
    <div className='mt-2 flex flex-col gap-2'>
        <BannerSearch width={"100%"} hassearchbutton={"false"} overrides={sendOverridesBanner} OpcionSelect={OpcionSelect}/>
    </div>
  )
}

export default HeadTeam;