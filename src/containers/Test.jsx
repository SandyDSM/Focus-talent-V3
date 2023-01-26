import React from 'react'
import HeadAdmin from '../components/HeadAdmin'
import TableTests from '../components/TableTests'

function Test() {
  return (
    <div className='flex flex-col gap-4'>
      <HeadAdmin title={"Evaluaciones de desempeño y potencial"} />
      <main>
        <TableTests/>
      </main>
    </div>
  )
}

export default Test