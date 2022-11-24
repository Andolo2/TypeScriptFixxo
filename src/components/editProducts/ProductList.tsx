import React, { useEffect } from 'react'
import { productContext } from '../../assets/context/context'
import {IProductContext } from '../../assets/context/ProductContext'
import { Product } from '../../models/productAPImodel'

const  ProductList = () => {

    const {product, getAll} = React.useContext(productContext) as IProductContext

    useEffect(() => {

        getAll()
    }, [getAll])

  return (

    <>
    <h4> Product List title</h4>
    
    {
        product.map((product: Product) => (<div key={product.articleNumber}>{product.description}</div>) ) 
    }
    </>
   
  )
}

export default ProductList