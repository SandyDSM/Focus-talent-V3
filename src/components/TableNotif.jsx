import React from 'react'
import TableRowNotif from './TableRowNotif'
import { Heading, Divider } from "@aws-amplify/ui-react";
import HeadNotif from './HeadNotif';


function TableNotif() {
  return (
    <div className='card flex flex-col gap-6 p-4 w-full mb-8'>
        <div className="flex flex-col gap-1 my-2">
        <Heading level={6}> Notificaciones creadas</Heading>
        <Divider />
      </div>
        <HeadNotif/>
        <TableRowNotif/>
    </div>
  )
}

export default TableNotif