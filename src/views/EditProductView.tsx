import React from 'react'
import NavBarSec from '../sections/NavBarSec'
import FooterSec from '../sections/FooterSec'
import EditProductSec from '../sections/editProduct/EditProductSec'

function EditProductView() {
  return (
    <div>
      <NavBarSec link={''} icon={''} quantity={0}></NavBarSec>

      <EditProductSec />
      
      <FooterSec></FooterSec>


    </div>
  )
}

export default EditProductView