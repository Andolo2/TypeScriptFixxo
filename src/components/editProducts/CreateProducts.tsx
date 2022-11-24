import React from 'react'

import { IProductContext, ProductContexProvider } from '../../assets/context/ProductContext'

const  CreateProducts = () => {

  const {productRequest, setProductRequest, create} = React.useContext(ProductContexProvider) as IProductContext


  return (

	<form onSubmit={create} className = "d-grid mb-3">
    <input className='form-controll'value={productRequest.articleNumber} onChange={(e) =>  setProductRequest ({...productRequest, articleNumber: e.target.value})}></input>
    <input value={productRequest.name} onChange={(e) =>  setProductRequest ({...productRequest, name: e.target.value})}></input>
    <input value={productRequest.description} onChange={(e) =>  setProductRequest ({...productRequest, description: e.target.value})}></input>
    <input value={productRequest.category} onChange={(e) =>  setProductRequest ({...productRequest, category: e.target.value})}></input>
    <input value={productRequest.imageName} onChange={(e) =>  setProductRequest ({...productRequest, imageName: e.target.value})}></input>
    <button className='btn btn-success py-2 mt-3' type='submit'>Submit</button>
    


  </form>
  )
  
	



}
export default CreateProducts

/*    <input value={productRequest.price} onChange={(e) =>  setProductRequest ({...productRequest, price: e.target.value})}></input>
    <input value={productRequest.rating} onChange={(e) =>  setProductRequest ({...productRequest, rating: e.target.value})}></input> */