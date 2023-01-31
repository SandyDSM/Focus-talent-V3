import React from 'react'
import HeadCreateTags from './HeadCreateTags'
import TableRowTags from './TableRowTags'

function ShowTags() {
  return (
    <div className='card flex flex-col gap-6 p-4 w-full'>
        <HeadCreateTags ver=''/>
        <TableRowTags/>
    </div>
  )
}

export default ShowTags