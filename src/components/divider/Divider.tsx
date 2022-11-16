import React from 'react'

const Divider: React.FC = ()  => {
  return (
    <div className='divider-content'>
        <h2>Up to 70% off*</h2>
         <p>Women's, Men's & Kids' Winter Fashion</p>
         <button id="right">
            <i id="top-left" className="fa-solid fa-chevron-down"></i>
               FLASE SALE
            <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
         </button>
    </div>
  )
}

export default Divider