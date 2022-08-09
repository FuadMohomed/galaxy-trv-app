import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Train from '../components/Train'

function Training() {
  return (
    <div>
        <Navbar/>
        <Hero heading='TRAINING' text='Pre-Flight and In-Flight Training'/>
        <Train/>
        <Footer/>
    </div>
  )
}

export default Training