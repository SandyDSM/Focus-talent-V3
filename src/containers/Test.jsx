import React from 'react'
import HeadAdmin from '../components/HeadAdmin'
import TableTests from '../components/TableTests'

function Test() {
  return (
    <div>
      <HeadAdmin title={"Evaluaciones desempeño y sucesión"} />
      <main>
        <TableTests/>
      </main>
    </div>
  )
}

export default Test