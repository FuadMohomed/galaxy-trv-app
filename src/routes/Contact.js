import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
    <Navbar/>
    <Hero heading='CONTACT' text='Contact GLX Travel'/>
    <Form/>
    <Footer/>    
    </div>
  )
}

export default Contact