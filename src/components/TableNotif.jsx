import React from 'react'
import TableRowNotif from './TableRowNotif'
import HeadNotif from './HeadNotif';


function TableNotif({notif, handleOpen, limpia}) {
  let idioma="";
  
function idiomatmp(value){
  handleOpen(value);
}

  return (
    <div className='card flex flex-col gap-6 p-4 w-full mb-8'>
        <div className="flex flex-col gap-1 my-2">
        <h3 className="text-base font-semibold">Notificaciones creadas</h3>
      <hr className="border-t border-gray-200 w-full" />
      </div>
        <HeadNotif/>
        {notif.map((notifi, index)=>(
        <TableRowNotif key={index} notif={notifi} handleOpen={idiomatmp}/>
        ))}
    </div>
  )
}

export default TableNotif