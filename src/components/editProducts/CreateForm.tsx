import React from 'react'
import  {IProductContext ,ProductContext } from '../../assets/context/ProductContext'
import ProductCards from '../product-cards/ProductCards'


const  CreateForm = () => {
    const {productRequest, setProductRequest, create} = React.useContext(ProductContext) as IProductContext


    return (
        <div className='form-container'>
        <form onSubmit={create} className="d-grid mb-5">
            <h3 className='display-6 mb-4'>Create Product</h3>
               <input value={productRequest.category} onChange={(e) => setProductRequest({...productRequest,category: e.target.value}) }></input>
               <input value={productRequest.description} onChange={(e) => setProductRequest({...productRequest,description: e.target.value}) }></input>
               <input value={productRequest.imageName} onChange={(e) => setProductRequest({...productRequest,imageName: e.target.value}) }></input>
               <input value={productRequest.name} onChange={(e) => setProductRequest({...productRequest,name: e.target.value}) }></input>
               <input value={productRequest.price || ''} onChange={(e) => setProductRequest({...productRequest,price: +e.target.value}) }></input>
               <input  value={productRequest.rating || ''} onChange={(e) => setProductRequest({...productRequest,rating: +e.target.value}) }></input>
               <button type='submit' className='btn btn-success py-2 mt-3'>Create Product</button>
                

        </form>
        </div>
       
    )
    
}

export default CreateForm