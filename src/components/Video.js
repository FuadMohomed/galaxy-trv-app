import React from 'react'
import './Video.css'
import { Link } from 'react-router-dom'
import spaceVideo from '../images/space.mp4'

function Video() {
  return (
    <div className='hero'>
<video autoPlay loop muted id='video'>
    <source src={spaceVideo} type='video/mp4' />
</video>
<div className='content'>
     <h1>Galaxy.Travel.</h1>
     <p>worlds first civillian space travel</p>

<div className='link'>
    <Link to='/training' className='btn'> Training</Link>
    <Link to='/content' className='btn btn-light'> Launch</Link>
</div>
</div>
    </div>
  )
}

export default Video