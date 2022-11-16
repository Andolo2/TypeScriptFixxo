import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlinks() {

  return (
           <ul className="nav-bar">
             <NavLink className="menu-link" to="/">Home</NavLink>
             <NavLink className="menu-link" to="/Categories">Categories</NavLink>
             <NavLink className="menu-link" to="/ContactView">Contact</NavLink>
             <NavLink className="menu-link" to="/ProductView">Products</NavLink>
           </ul>
  )
}

export default Navlinks

