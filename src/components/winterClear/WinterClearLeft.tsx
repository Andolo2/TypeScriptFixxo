import React from 'react'
import girlSweater from '../../assets/images/winter-clear-images/girl-with-sweater.png'


function WinterClearLeft() {
  return (
    <div>
         <div className="winter-clear">
         <div className="winter-clear-content">
          <img src={girlSweater} alt="girl-with-sweater"/>
             <div className="winter-clear-text">
                <h2>Winter Clearance <br/> Up to 70% Off!</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>            
                <button>
                <i id="top-left" className="fa-solid fa-chevron-down"></i>
                   SHOP NOW
                <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
                </button>
             </div>
         </div>
       </div>
    </div>
  )
}

export default WinterClearLeft