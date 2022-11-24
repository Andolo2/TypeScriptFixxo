import React, {useState, useContext, createContext} from 'react'
import {Product, ProductRequest, iProductProviderProps} from '../../models/productAPImodel'
import { productContext } from './context'



export interface IProductContext {

    product: Product,
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    products: Product[],
    //productRequest: ProductRequest,
    create: (e: React.FormEvent<ProductRequest>) => void,
    get: (articleNumber: string) => void,
    getAll: () => void,
    update: (articleNumber: string , e: React.FormEvent<Product>) => void,
    remove: (articleNumber: string) => void
}


export const ProductContexProvider = createContext<IProductContext | null >(null)
export const useProductContext = () => { return useContext(productContext)}



 export const  ProductProvider = ({children} : iProductProviderProps) =>  {

 const baseUrl = 'http://localhost:500/api/products'


  const product_default: Product = {
      articleNumber: '',
      name: '',
      description: '',
      category: '',
      price: 0,
      rating: 0,
      imageName: ''
  }

  const ProductRequest_default: ProductRequest = {
    articleNumber: '',
    name: '',
    description: '',
    category: '',
    price: 0,
    rating: 0,
    imageName: ''

  }

  const [product, setProduct] = useState<Product> (product_default)
  const [ProductRequest, setProductRequest] = useState<ProductRequest> (ProductRequest_default)
  const [products, setProducts] = useState<Product[]> ([])


  const create = async (e: React.FormEvent<ProductRequest>) => {

    e.preventDefault();
    const result = await fetch ('${baseUrl}', {
        method: 'post',
        headers:  {

            'Content-Type': 'application.json'
        },
        body: JSON.stringify(ProductRequest)
    })

  }
  const get = async (articleNumber: string) => {

    const result = await fetch ('${baseUrl} / $articleNumber')

    if (result.status == 200){
        setProduct(await result.json())
    }

  }
  const getAll = async () => {

    const result = await fetch ('{$baseUrl}')

    if (result.status === 200){
      setProducts(await result.json())
    }

  } 
  const update = (articleNumber: string, e: React.FormEvent<Product>) => {

    

  }
  const remove = async (articleNumber: string) => {


  }

 
  return (
    <ProductContexProvider.Provider value={{product, setProduct, products, create, get, getAll, update, remove} }> //ProductRequest
        {children}
        CONTEXT PAGE

    </ProductContexProvider.Provider>
  )
}

export default ProductProvider