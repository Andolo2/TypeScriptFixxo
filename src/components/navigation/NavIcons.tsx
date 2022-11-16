import React from 'react'
import { NavLink } from 'react-router-dom'

type NavProps = {

  link: string
  icon: string
  quantity: number
}

const NavIcons: React.FC = ({link, icon, quantity}: any) =>{
   return(
  
      <div className='circle-layout'>
      <div className='circle-container'>
        <NavLink className="nav-icon" to={link} end>
        <span className="badge rounded-pill">{quantity}</span>
        <i className={icon}></i>
        </NavLink>
      </div>
     </div>
   )

}

export default NavIcons

