import { Button } from '@aws-amplify/ui-react'
import React from 'react'
import HeadAdmin from '../components/HeadAdmin'
import TableNotif from '../components/TableNotif'


function Notif() {
  return (
    <div className='flex flex-col gap-4'>
      <HeadAdmin title={"Administrar notificaciones"} />   
      <main className='px-11 flex flex-col gap-8 mt-4'>
        <div className='flex flex-col items-end'>
         <Button variation='primary' >Agregar notificación</Button>
        </div>
        <TableNotif/>
      </main>   
    </div>
  )
}

export default Notif