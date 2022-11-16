import React from 'react'
import bigCoat from '../../assets/images/two-ad-cards/big-coat.png'

const AdRightCard: React.FC = ()  => {
  return (
    <div>
         <div className="right-card">
         <div className='back-drop-right'><img src={bigCoat} alt="woman-eating"/></div>
         
         <div className="right-card-content">
            <h3>Lets´s Be <br/>Conscious</h3>
               <button id="right">
                  <i id="top-left" className="fa-solid fa-chevron-down"></i>
                  SHOP NOW
                  <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
               </button>
         </div>
      </div>
    </div>
  )
}

export default AdRightCard