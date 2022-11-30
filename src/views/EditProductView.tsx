import React from 'react'
import NavBarSec from '../sections/NavBarSec'
import FooterSec from '../sections/FooterSec'
import EditProdSec from '../sections/EditProdSec/EditProdSec'
import CreateForm from '../components/EditProducts/CreateForm'
function EditProductView() {
  return (
    <div>
      <NavBarSec link={''} icon={''} quantity={0}></NavBarSec>

      
      <CreateForm />
      <hr className='my-5' /> 
      <EditProdSec />
 
      
      
      <FooterSec></FooterSec>


    </div>
  )
}

export default EditProductView