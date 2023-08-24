import React from 'react'
import UserSerch from './UserSerch'
import { Divider } from '@aws-amplify/ui-react'

const CardSerch = ({collaborators}) => {
  return (
    <div className='max-w-sm overflow-y-auto max-h-96 absolute top-1/3 right-0 z-10'>
    <div className='card flex flex-col justify-center gap-4 divide-y divide-blue-200'>
        {collaborators?.map((colaborator, index) => (
        <UserSerch key={index} colaborator={colaborator}/>
        ))}
    </div>
    </div>
  )
}

export default CardSerch