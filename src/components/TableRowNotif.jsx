import React from 'react'
import { Iconidiom, IconActions } from '../ui-components';
import { Divider } from '@aws-amplify/ui-react';

function TableRowNotif({notif, handleOpen}) {
  return (
    <div className="flex flex-col">
      
      <div className="flex flex-row self-stretch py-2 px-8 items-center relative gap-8">
       <div className=""><Iconidiom/></div>
        <div className="flex flex-col grow shrink relative whitespace-pre-wrap w-full">
          <p className="text-sm">{notif.TITULO}</p>
          </div>
        <div className="flex flex-row gap-16">
            <div className="flex justify-center cursor-pointer" onClick={()=>handleOpen(notif.IDIOMA)}><IconActions name="edit"/></div>
            
        </div>
      </div>

      <Divider
        width="unset"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
      />
    </div>
  );
}

export default TableRowNotif