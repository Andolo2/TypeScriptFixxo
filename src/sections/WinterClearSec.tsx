import React from 'react'

import WinterLeft from '../components/winterClear/WinterClearLeft'
import WinterRight from '../components/winterClear/WinterClearRight'


function WinterClearSec() {
  return (
    <div>
      <section className='winter-clear-new-arrival'>
        <div className='container'>
          <WinterLeft></WinterLeft>
          <WinterRight></WinterRight>
        </div>
      </section>
    </div>
  )
}

export default WinterClearSec