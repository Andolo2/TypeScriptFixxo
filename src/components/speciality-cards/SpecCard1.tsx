import React from 'react'
import { NavLink } from 'react-router-dom'


const SpecCard1: React.FC = ()  => {
  return (
    <div>
      <div className="sp-card-container">
            <div className="sp-cards">
                <div className="sp-content">
                    <h3>Track your order</h3>
                    <div className="sp-link">
                        <NavLink className="" to={"/"}>Get started</NavLink>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            <div className="sp-background"></div>
        </div>
    </div>
  )
}

export default SpecCard1