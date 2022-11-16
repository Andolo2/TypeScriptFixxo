import React from 'react'
import payment from '../../assets/images/footer-icons/payment-icon.svg'
import support from '../../assets/images/footer-icons/support-icon.svg'
import truck from '../../assets/images/footer-icons/truck-icon.svg'

const CircleLinks: React.FC = ()  => {
  return (
    
   <section className="circle-links">
      <div className="container">
         <div className="circle-container">
            <a href="#"><img src={support}alt="support-icon"/></a>
            <div className="circle-links-cont">
               <a href="#"><h2>Customer support</h2></a>
               <p>Village did removed enjoyed explain talking.</p>
            </div>
         </div>
         <div className="circle-container">
         <a href="#"><img src={payment}alt="payment-icon"/></a>
            <div className="circle-links-cont">
               <a href="#"><h2>Customer support</h2></a>
               <p>Village did removed enjoyed explain talking.</p>
            </div>
         </div>
         <div className="circle-container">
         <a href="#"><img src={truck}alt="truck-icon"/></a>
            <div className="circle-links-cont">
               <a href="#"><h2>Customer support</h2></a>
               <p>Village did removed enjoyed explain talking.</p>
            </div>
         </div>
         <div className="circle-container">
            <a href="#"><img src={truck}alt="truck-icon"/></a>
            <div className="circle-links-cont">
               <a href="#"><h2>Customer support</h2></a>
               <p>Village did removed enjoyed explain talking.</p>
            </div>
         </div>
      </div>
   </section>
  )
}

export default CircleLinks