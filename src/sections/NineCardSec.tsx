import React, {useState} from 'react'
import NineCard from '../components/nineCards/NineCard'
import { ProductProp } from '../models/ProductPageModel'


const NineCardSec: React.FC<ProductProp> = ({title, items = []}) => {
    return(
        <section className="nine-cards">
            <div className="container">
            <div className='NineCardHeader'>
                <h4>Latest Product</h4>
                <h4>Latest Product</h4>
                <h4>Latest Product</h4>
                
            </div>
            <div className="card-rows">
             {
                  items && items.map ((product: { articleNumber: React.Key | null | undefined }) => <NineCard key={product.articleNumber}  item={product}/>)
                  
             }
              
           
            </div>
            </div>
        </section>
        
    )
}

export default NineCardSec