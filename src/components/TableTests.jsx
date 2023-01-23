import React from 'react'
import { Tablerows,TableHeadTest } from '../ui-components'

function TableTests() {
    const overridesTable = {
        SwitchField: {
            label:""
    }}
  return (
    <div className='card'>
        <div className='w-full'>
            <TableHeadTest width={"100%"} />
            <Tablerows width={"100%"} state={"active"} overrides={overridesTable}/>
            <Tablerows width={"100%"} overrides={overridesTable}/>
            <Tablerows width={"100%"} overrides={overridesTable}/>
        </div>
    </div>
  )
}

export default TableTests