import React from 'react'
import './Train.css'
import img1 from '../images/sky.jpg'
import img2 from '../images/map.jpg'
import {Link} from 'react-router-dom'

function Train() {
  return (
    <div  className='training'>
   <div className='left'>
       <h1>Training</h1>
       <p>Thorough taining is a necessity when traveling to space. 
           We  offer all inclusive traning for pre-flight and in-flight scenarios.</p>
           <Link to='/contact'><button className='btn'>Contact</button></Link>
   </div>
   <div className='right'>
       <div className='img-container'>
           <div className='image-stack top'>
               <img src={img1} className='img' alt=''/>
           </div>
           <div className='image-stack bottom'>
               <img src={img2} className='img' alt=''/>
           </div>
       </div>
   </div>


    
    </div>
  )
}

export default Train