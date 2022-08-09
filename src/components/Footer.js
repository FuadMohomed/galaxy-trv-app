import React from 'react'
import './Footer.css'
import {FaFacebook,FaLinkedin, FaPhone,FaMailBulk,FaSearchLocation,FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
    <div className='footer-container'>
    <div className='left'>
        <div className='location'>
            <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
        <div>
            <p>123 Acme st.</p>
           <h4>Houston,Tx</h4>
        </div>
         </div>
         <div className='phone'>
             <h4> <FaPhone  size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> 1-800-123-1234</h4>
         </div>
         <div className='email'>
             <h4> <FaMailBulk  size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> trips@galaxy.com</h4>
         </div>
    </div>
    <div className='right'>
        <h4>About The Company</h4>
        <p>become the worlds greatest traveller 
            become anything and everything
            what ever you put your mind to you 
            can acomplish.</p>
            <div className='social'>
                <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
            </div>
    </div>
    </div>
     </div>
  )
}

export default Footer