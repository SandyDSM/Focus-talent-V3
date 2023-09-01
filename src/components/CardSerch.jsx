import React from 'react'
import UserSerch from './UserSerch'
import { Divider } from '@aws-amplify/ui-react'

const CardSerch = ({collaborators}) => {
  return (
    <div className='max-w-sm overflow-y-auto max-h-96 absolute top-20 right-0 z-10 drop-shadow-md'>
    <div className='card flex flex-col justify-center gap-4 divide-y divide-blue-200'>
        {collaborators?.map((colaborator, index) => (
        <UserSerch key={index} colaborator={colaborator}/>
        ))}
    </div>
    </div>
  )
}

export default CardSerch