import React from 'react'
import { Tablerows,TableHeadTest } from '../ui-components'
import TableRowTests from './TableRowTests'
import HeadTable from './HeadTable'

function TableTests({aniosx, handleOpen}) {
  console.log("llego a tt:", aniosx);
  const [value, setValue] = React.useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='card'>
        <div className='w-full'>
            <HeadTable  col1={"Notificar" }col2={"Estatus"} col3={"Nombre"} col4={"Años"}/>
            {aniosx.map((anio, index)=>(
            <TableRowTests key={index} anio={anio} handleOpen={handleOpen}/>
            ))}
            </div>
    </div>
  )
}

export default TableTests