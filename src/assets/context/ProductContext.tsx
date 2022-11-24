import React, {useState, useContext, createContext} from 'react'
import { start } from 'repl'
import {Product, ProductRequest, iProductProviderProps} from '../../models/productAPImodel'
import { productContext } from './context'



export interface IProductContext {

    product: Product,
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    products: Product[],
    productRequest: ProductRequest,
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    create: (e: React.FormEvent) => void,
    get: (articleNumber: string) => void,
    getAll: () => void,
    update: (articleNumber: string , e: React.FormEvent<Product>) => void,
    remove: (articleNumber: string) => void
}


export const ProductContexProvider = createContext<IProductContext | null >(null)
export const useProductContext = () => { return useContext(ProductContexProvider)}



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
  const [productRequest, setProductRequest] = useState<ProductRequest> (ProductRequest_default)
  const [products, setProducts] = useState<Product[]> ([])


  const create = async (e: React.FormEvent) => {

    e.preventDefault();
    const result = await fetch ('${baseUrl}', {
        method: 'post',
        headers:  {

            'Content-Type': 'application.json'
        },
        body: JSON.stringify(productRequest)
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
  const update = async (articleNumber: string, e: React.FormEvent<Product>) => {

    e.preventDefault();

    const result = await fetch ('${baseUrl / ${articleNumber}', {
      method: 'put',
      headers: {
        'Content-Type': 'application.json'
      },
      body: JSON.stringify(product)
  
    })
  
    if (result.status === 200) {
      setProduct(await result.json())
    }

  }
  const remove = async (articleNumber: string) => {

    const result = await fetch ('${baseUrl / ${articleNumber}', {
      method: 'delete',
      
      
  
    })
  
    if (result.status === 200) {
      setProduct(await result.json())
    }

  }

 
  return (
    <ProductContexProvider.Provider value={{product, setProduct, products, productRequest, setProductRequest, create, get, getAll, update, remove} }> 
        {children}
        CONTEXT PAGE

    </ProductContexProvider.Provider>
  )
}

export default ProductProvider