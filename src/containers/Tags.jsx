import React from 'react'
import CreateTags from '../components/CreateTags'
import HeadAdmin from '../components/HeadAdmin'
import ShowTags from '../components/ShowTags'


function Tags() {
  return (
    <div className='flex flex-col gap-6'>
      <HeadAdmin title={"Administrar etiquetas"} />   
      <div className='flex flex-col gap-6 px-11'>
      <CreateTags/>  
      <ShowTags/> 
      </div>
    </div>
  )
}

export default Tags