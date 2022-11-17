import React from 'react'
import manCoat from '../../assets/images/winter-clear-images/man-with-coat.png'
function WinterClearRight() {
  return (
    <div>
        <div className="new-arrival-content">
        <img src={manCoat} alt="man-with-coat"/>
        <div className="new-arrival-text">
             <h2>NEW <br/> ARRIVAL</h2>
             <button>
              <i id="top-left" className="fa-solid fa-chevron-down"></i>
              SHOP NOW
              <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
           </button>
            </div>
        </div>
    </div>
  )
}

export default WinterClearRight