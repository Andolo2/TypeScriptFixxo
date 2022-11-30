import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  {IProductContext ,ProductContext } from '../../assets/context/ProductContext'


const  UpdateForm = () => {
    //const articleNumber = useParams()
    const {product, setProduct, update, get} = React.useContext(ProductContext) as IProductContext

/*     useEffect(() => {
      get(articleNumber)
    
      
    }, [get, articleNumber]) */
    

    return (
        <form onSubmit={update} className="d-grid mb-5">
            <h3 className='display-6 mb-4'>Create Product</h3>
                <input type='hidden' value={product.articleNumber}></input>
               <input value={product.category} onChange={(e) => setProduct({...product,category: e.target.value}) }></input>
               <input value={product.description} onChange={(e) => setProduct({...product,description: e.target.value}) }></input>
               <input value={product.imageName} onChange={(e) => setProduct({...product,imageName: e.target.value}) }></input>
               <input value={product.name} onChange={(e) => setProduct({...product,name: e.target.value}) }></input>
               <input value={product.price} onChange={(e) => setProduct({...product,price: +e.target.value}) }></input>
               <input  value={product.rating} onChange={(e) => setProduct({...product,rating: +e.target.value}) }></input>
               <button type='submit' className='btn btn-success py-2 mt-3'>Create Product</button>


        </form>
    )
}

export default UpdateForm