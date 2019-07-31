import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-wrapper" >
      <nav><p className="header-left"><NavLink style={{ transition: 'all 0.1s linear' }} className="text-black hover:text-blue no-underline" to='/'>Home</NavLink></p></nav>
      <p className="header-center">Max Aubain</p>
    </div>
  )
}

export default Header