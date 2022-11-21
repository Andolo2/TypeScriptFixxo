import React from 'react'
import ProductShowcase from '../../components/ProductPage/ProductShowcase'
import ShowcaseMenu from '../../components/ProductPage/ShowcaseMenu'
import BottomMenu from '../../components/ProductPage/BottomMenu'
import { ProductProp } from '../../models/ProductPageModel'

const ProductPageSec: React.FC<ProductProp> = ({ items = []}) => {
  return(
    <section className="showcase">
    <div className="container">
    <h1>Get 25% OFF at the Fixxo Selection - Shop Now!</h1>
       <div className="display-user">
            
            {
              items.map((product: { articleNumber: React.Key | null | undefined }) => <ProductShowcase key={product.articleNumber}  item={product}/>)
              
            }
            {
               items.map((product: { articleNumber: React.Key | null | undefined }) => <ShowcaseMenu key={product.articleNumber}  item={product}/>)
            } 
       </div>
       <BottomMenu />
    </div>
    
</section>

  )
}

export default ProductPageSec