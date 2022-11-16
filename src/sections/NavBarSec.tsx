export {}

/* import React from 'react'
import { useShoppingCart } from '../assets/context/shoppingCartContext'
import Logo from '../components/navigation/Logo'
import NavIcons from '../components/navigation/NavIcons'
import NavLinks from '../components/navigation/Navlinks'

type Props = {
  link: any;
  icon: any;
}



const  NavBar: React.FC <Props> = () => {

  const {cartQuantity} = useShoppingCart()



  return (
    <div>
     <header>
      <div className='container-fluid'>
        <Logo></Logo>
        <NavLinks></NavLinks>
        <div className='nav-icons'>
        <NavIcons  link={"/*"} icon="fa-solid fa-magnifying-glass"/>
        <NavIcons link={"/*"} icon="fa-sharp fa-solid fa-code-compare" />
        <NavIcons quantity={1} link="/*" icon="fa-regular fa-heart" />
        <button className="/" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
        <NavIcons quantity={cartQuantity} link="/" icon="fa-regular fa-bag-shopping" />
        </button>
       
        </div>
        
      </div>
     </header>
    </div>
  )
}

export default NavBar */