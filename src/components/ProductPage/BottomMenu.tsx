import React from 'react'
import { NavLink } from 'react-router-dom'
function BottomMenu() {
  return (
    <div className="bottom-sub-menu">
    <div className="sub-menu">
       <ul className="sub-menu-links">
          <NavLink className='sub-menu-links' to='/Description'><li><p>Description</p></li></NavLink>
          <NavLink className='sub-menu-links' to='/Additional'><li><p>Additional</p></li></NavLink>
          <NavLink className='sub-menu-links' to='/Returns'><li><p>Returns</p></li></NavLink>
          <NavLink className='sub-menu-links' to='/Reviews'><li><p>Reviews</p></li></NavLink>
       </ul>
    </div>
    <div className="sub-menu-text">
    <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. </p>
       <p>* Village did removed enjoyed explain nor ham saw calling talking. <br/></p>
          * Securing as informed declared or margaret. <br/>
          * Joy horrible moreover man feelings own shy. <br/>
      <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. </p>
    </div>
   </div>
   
  )
}

export default BottomMenu