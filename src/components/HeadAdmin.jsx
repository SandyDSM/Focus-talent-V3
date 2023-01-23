import React from 'react'
import { SubHeader } from '../ui-components'

function HeadAdmin(props) {
    const sendOverridesSubHeader = {
        "Heading": { children: props.title },
    }
  return (
    <div className='mt-2 flex flex-col gap-2'>
        <SubHeader width={"100%"} overrides={sendOverridesSubHeader} />
    </div>
  )
}

export default HeadAdmin;