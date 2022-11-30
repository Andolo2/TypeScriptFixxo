import React, { useEffect } from 'react'

import {IProductContext, ProductContext} from '../../assets/context/ProductContext'
import { Product } from '../../models/productAPImodel'

const  ProductList = () =>  {

    const {products, getAll, remove} = React.useContext(ProductContext) as IProductContext

    useEffect(() => {
        getAll()
        
    },[getAll])

    const removeProduct = (articleNumber:number) => {
      remove(articleNumber)
     
    }

  return (
    <>
        
        <h3 className='display-6 mb-4'>List of products</h3>

        {
            products.map((product: Product) => (<div onClick={() => removeProduct(product.articleNumber)} key={product.articleNumber}>{product.category}{product.name}{product.description}{product.price}{product.rating}{product.imageName}</div>))
        }

    </>
  )
}

export default ProductList