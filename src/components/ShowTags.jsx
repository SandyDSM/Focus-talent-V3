import React from 'react'
import HeadCreateTags from './HeadCreateTags'
import TableRowTags from './TableRowTags'
import { Heading, Divider } from "@aws-amplify/ui-react";


function ShowTags() {
  return (
    <div className='card flex flex-col gap-6 p-4 w-full mb-8'>
        <div className="flex flex-col gap-1 my-2">
        <Heading level={6}> Etiquetas</Heading>
        <Divider />
      </div>
        <HeadCreateTags ver=''/>
        <TableRowTags/>
    </div>
  )
}

export default ShowTags