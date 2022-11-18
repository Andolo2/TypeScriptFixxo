import React from 'react'

function Footer() {
  return (
    <footer className="footer-layout">
   <div className="footer-links">
      <ul>
         <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
         <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
         <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
         <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
         <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
      </ul>
   </div>
   <div className="footer-content">
      <p>&copy 2022 Fixxo. All Rights Reserved</p>
   </div>
   </footer>
  )
}

export default Footer