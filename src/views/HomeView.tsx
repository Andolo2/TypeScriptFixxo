import React, {useState, useContext} from 'react'
import NavBarSec from '../sections/NavBarSec'
import JumboSec from '../sections/JumboSec'
import ProdCard from '../sections/productCardSec'
import WinterCard from '../sections/WinterClearSec' 
import AdCards from '../sections/AdCardsSec'
 import SpecCard from '../sections/SpecialitySec'
import SaleCardsSec1 from '../sections/SaleCardsSec1'
// import SaleCardsSec2 from '../sections/SaleCardSec2'
 import DividerSec from '../sections/DividerSec'
// import NineCardSec from '../sections/NineCardSec'
 import CircleLinksSec from '../sections/CircleLinksSec'

 import FooterSec from '../sections/FooterSec'
import { featuredContext, productContext } from '../assets/context/context'
// import {featuredContext} from '../assets/context/context.js'
// import {featuredNineContext} from '../assets/context/context.js'





const Frontpage: React.FC = ()  => {

 



  
//  window.top.document.title = 'fixxo1';


  const productContexts = useContext(productContext)

  const featuredContexts = useContext(featuredContext)
    /*  
  const featuredNineContexts = useContext(featuredNineContext) */
  return (
    
    
    <div>
      <NavBarSec link={''} icon={''} quantity={0}></NavBarSec>
      <JumboSec></JumboSec>
      <WinterCard></WinterCard>
      <ProdCard title='Featured Products' items={productContexts}/> 
      {/*<AdCards></AdCards>
       <SpecCard></SpecCard>*/}
      <SaleCardsSec1  items={featuredContexts} title={''}/>
      {/*<SaleCardsSec2  items={featuredContexts}/> */}
      <DividerSec></DividerSec>
      {/* <NineCardSec items={featuredNineContexts}/> */}
      <CircleLinksSec />
      <FooterSec /> 
      
      
     
      
      
      
      </div>
  )
  
}

export default Frontpage