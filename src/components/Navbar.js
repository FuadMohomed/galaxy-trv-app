import './Navbar.css'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from 'react'


function Navbar() {
const [click,setClick] = useState(false)
const [color,setColor] = useState(false)

const changeColor = () => {
  if (window.scrollY >= 100) {
    setColor(true)
  } else {
    setColor(false)
  }
}

window.addEventListener('scroll', changeColor)


const handleClick = () => {
setClick(!click)
}

  return (
<div className={color ? 'header-bg' : 'header'}>
<Link to='/'><h1> GLX TRVL</h1></Link>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>
<li>
    <Link to='/'>Home</Link>
</li>
<li>
    <Link to='/pricing'>Pricing</Link>
</li>
<li>
    <Link to='/training'>Training</Link>
</li>
<li>
    <Link to='/contact'>Contact</Link>
</li>
</ul>
<div className='hamburger' onClick={handleClick}>
{click ? (<FaTimes size={20} style={{color:'white'}}/> ) : (<FaBars size={20} style={{color:'white'}}/> )}
</div>
</div>
  )
}

export default Navbar