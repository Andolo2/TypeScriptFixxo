
 import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import NavBarSec from '../sections/NavBarSec'
import FooterSec from '../sections/FooterSec'
import Footer from '../sections/FooterSec'

const ProductDetailsView: React.FC = () => {

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
        <NavBarSec link={''} icon={''} quantity={0} />
       {/*  <div>{products.name}</div>
        <img src={products.imageName} />
        <div>{products.articleNumber}</div> */}
        <Footer />
    </>
    
  )
}

export default ProductDetailsView 