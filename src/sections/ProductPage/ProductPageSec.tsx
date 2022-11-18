import React from 'react'
import ProductShowcase from '../../components/ProductPage/ProductShowcase'
import ShowcaseMenu from '../../components/ProductPage/ShowcaseMenu'
import BottomMenu from '../../components/ProductPage/BottomMenu'

const ProductPageSec = ({ items = []}) => {
  return(
    <section className="showcase">
    <div className="container">
    <h1>Get 25% OFF at the Fixxo Selection - Shop Now!</h1>
       <div className="display-user">
            
         {/*    {
              items.map(product => <ProductShowcase key={product.articleNumber}  item={product}/>)
              
            }
            {
               items.map(product => <ShowcaseMenu key={product.articleNumber}  item={product}/>)
            } */}
       </div>
       <BottomMenu />
    </div>
    
</section>

  )
}

export default ProductPageSec