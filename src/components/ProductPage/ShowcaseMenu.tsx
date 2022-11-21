import React from 'react'
import { NavLink } from 'react-router-dom'

type Item = {
   item: any
 }

const ShowcaseMenu:React.FC <Item> = ({item}) => {
   return(
   <div className="showcase-menu">
         <div className="showcase-menu-content">
            <h2>Modern Black Blouse</h2>
            <p>{item.brand}</p>

            <div className="product-stars">
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
            </div>
            <p id="set-price">{item.price}</p>
         </div>
         <div className="showcase-text">
            Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. <NavLink to="#"> (read more)</NavLink>
         </div>
         <div className="interact-user">
            <div className="size-buttons-all">
               <div className="size-paragraph">
                  <span>Size: </span>
               </div>
               <div className="size-buttons">
                     <button id="change-size">S</button>
                     <button id="change-size">M</button>
                     <button id="change-size">L</button>
                     <button id="change-size">X</button>
               </div>
            </div>
            <div className="drop-down">
            <span>Color:</span>
               <div className="drop-down-form">
                  <form action="#">
                     <select name="color" id="dropdown-color">
                     <option value="Text"> Choose an option</option>
                     <option value="green" >green</option>
                     <option value="blue"  >blue</option>
                     <option value="yellow">yellow</option>
                     </select>
                  </form>
               </div>
            </div>
            <div className="add-subtract">
               <span>QTY:</span>
               <div className="add-sub-content">
                  <div id="subtract" className="add-sub-button"><button>-</button></div>
                  <input type="num" placeholder='1' id="sum"/>
                  <div id="add" className="add-sub-button"><button>+</button></div>
               </div>
            </div>
            <div className="showcase-links">
               <div className="showcase-span">
                  <span>Share</span>
               </div>
               <div className="showcase-icons">
                  <li><NavLink to="#"><i className="fa-brands fa-facebook-f"></i></NavLink></li>
                  <li><NavLink to="#"><i className="fa-brands fa-instagram"></i></NavLink></li>
                  <li><NavLink to="#"><i className="fa-brands fa-twitter"></i></NavLink></li>
                  <li><NavLink to="#"><i className="fa-brands fa-google"></i></NavLink></li>
                  <li><NavLink to="#"><i className="fa-brands fa-google"></i></NavLink></li>
               </div>
            </div>
         </div>
   </div>
   )
}

export default ShowcaseMenu