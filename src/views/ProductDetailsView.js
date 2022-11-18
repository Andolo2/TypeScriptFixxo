import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import NavBarSec from '../sections/NavBarSec'
import FooterSec from '../sections/FooterSec'

const ProductDetailsView = () => {

    const {id} = useParams()
    const [products, setProducts] = useState({})

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch (`https://win22-webapi.azurewebsites.net/api/products/${id}`)
            setProducts(await result.json())
            
        }
        fetchData()
    },[setProducts])

    console.log(id)
  return (
    
    <>
        <NavBarSec />
        <div>{products.name}</div>
        <img src={products.imageName} />
        <div>{products.articleNumber}</div>

    </>
    
  )
}

export default ProductDetailsView