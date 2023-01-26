import React from 'react'
import { Tablerows,TableHeadTest } from '../ui-components'
import TableRowTests from './TableRowTests'
import HeadTable from './HeadTable'

function TableTests() {
  const [value, setValue] = React.useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='card'>
        <div className='w-full'>
            <HeadTable/>
            <TableRowTests/>
        </div>
    </div>
  )
}

export default TableTests