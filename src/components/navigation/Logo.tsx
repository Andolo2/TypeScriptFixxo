
import React from 'react'
import logo from '../../assets/images/nav-bar/logo.svg'
import { NavLink } from 'react-router-dom'
function Logo() {
  return (
   
      <NavLink className="main-logo" to={"/Home"} ><img src={logo} alt="Fixxo logo" /></NavLink>
   
  )
}

export default Logo