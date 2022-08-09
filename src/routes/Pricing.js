import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Price from '../components/Price'


function Pricing() {
  return (
    <div>
  <Navbar/>
  <Hero heading='Pricing.' text='choose your trip'/>
  <Price/>
  <Footer/>
    </div>
  )
}

export default Pricing