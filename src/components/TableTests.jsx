import React from 'react'
import { Tablerows,TableHeadTest } from '../ui-components'
import TableRowTests from './TableRowTests'
import HeadTable from './HeadTable'

function TableTests({aniosx}) {
  console.log("llego a tt:", aniosx);
  const [value, setValue] = React.useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='card'>
        <div className='w-full'>
            <HeadTable/>
            {aniosx.map((anio, index)=>(
            <TableRowTests key={index} anio={anio}/>
            ))}
            </div>
    </div>
  )
}

export default TableTests