import React from 'react'
import { SelectField, Heading } from '@aws-amplify/ui-react';
import Iconfilter from '../ui-components/Iconfilter'

function Filters() {
  return (
    <div className='card mt-2'>
        <div className='flex align-center'>
            <Iconfilter/>
            <p className='font-bold py-1.5'>Filtrar Colaboradores</p>
        </div>
        
        <div className='flex flex-col gap-2 md:flex-row md:gap-6 align-center mt-2'>
            
            <SelectField placeholder="Por Geografía"></SelectField>
            <SelectField placeholder="Por Unidad organizacional"></SelectField>
            <SelectField placeholder="Por Organización"></SelectField>
            <SelectField placeholder="Por Puesto"></SelectField>
        </div>
    </div>
  )
}

export default Filters