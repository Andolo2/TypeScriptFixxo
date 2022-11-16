import React from 'react'
import womanEating from '../../assets/images/two-ad-cards/woman-eating.png'


const AdLeftCard: React.FC = ()  => {
  return (
    <div>
        <div className="left-card">
         <div className="back-drop-left"><img src={womanEating} alt="woman-eating"/></div>
         <div className="left-card-content">
               <h3>Pamela Reifs´s <br/>Top Picks</h3>
               <button id="left">
                  <i id="top-left" className="fa-solid fa-chevron-down"></i>
                  SHOP NOW
                  <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
               </button>
         </div>
      </div>
    </div>
  )
}

export default AdLeftCard