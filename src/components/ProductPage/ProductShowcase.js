import React from 'react'

const ProductShowcase = ({item}) => {
  return (
    
    <div className="product-showcase">
    <div className="top-showcase"><img src={item.imageName}alt='item.imageName'></img></div>
    <div className="bottom-showcase">
        <div className="show-small"><img src={item.imageName} alt='item.imageName'></img></div>
        <div className="show-small"><img src={item.imageName}alt='item.imageName'></img></div>
        <div className="show-small"><img src={item.imageName}alt='item.imageName'></img></div>
    </div>
</div>
  )
}

export default ProductShowcase