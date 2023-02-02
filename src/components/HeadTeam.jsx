import React from 'react'
import {BannerSearch } from '../ui-components'


function HeadTeam() {
    const sendOverridesBanner = {
        "SearchField": { 
          placeholder: "Buscar colaborador",
          hasSearchButton: false,
          hasSearchIcon: true
         },
    }
  return (
    <div className='mt-2 flex flex-col gap-2'>
        <BannerSearch width={"100%"} hassearchbutton={"false"} overrides={sendOverridesBanner}/>
    </div>
  )
}

export default HeadTeam;