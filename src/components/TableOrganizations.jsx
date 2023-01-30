import React from 'react'
import TableRowOrganization from './TableRowOrganization'
import HeadTable from './HeadTable'


function TableOrganizations() {
  return (
    <div>
        <HeadTable  col1={"Agregar" } classcol2={"hidden"} col3={"Título"} col4={"ID"}/>
        <TableRowOrganization/>
    </div>
  )
}

export default TableOrganizations