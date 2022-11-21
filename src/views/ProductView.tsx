
import NavBarSec from '../sections/NavBarSec'
import ProductPageSec from '../sections/ProductPage/ProductPageSec'
import React, {useState, useContext} from 'react'


import {showcaseContext} from '../assets/context/context'
import Footer from '../sections/FooterSec'



function ProductPage() {
  
  //window.top.document.title = 'Products || fixxo.';

 
  const showcaseContexts = useContext(showcaseContext)
  
  return (
    <div>
      <NavBarSec link={''} icon={''} quantity={0}></NavBarSec>
      <ProductPageSec items={showcaseContexts} title={''}/>
      <Footer />
      </div>
  )
}

export default ProductPage