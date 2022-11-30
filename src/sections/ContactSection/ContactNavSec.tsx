
import React from 'react'
import ContactNav from '../../components/contact/ContactNav'
import MapLayout from '../../components/contact/MapLayout'
import ContactForm from '../../components/contact/ContactForm' 


function ContactNavSec() {
  return (
  <div>
    
    <section className="map-layout">
     <ContactNav />
      <MapLayout />
      <ContactForm />
    </section>
  </div>
  )
}

export default ContactNavSec 