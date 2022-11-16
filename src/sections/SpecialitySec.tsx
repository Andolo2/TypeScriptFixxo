import React from 'react'
import Spec1 from '../components/speciality-cards/SpecCard1'


const SpecialitySec: React.FC = ()  => {
  return (
    <div>
        <section className='our-speciality'>
            <div className='container-fluid'>
                <Spec1></Spec1>
                <Spec1></Spec1>
                <Spec1></Spec1>
            </div>
        </section>
    </div>
  )
}

export default SpecialitySec


