import React from "react"
import { NavLink } from 'react-router-dom';

const Header = () => {
  let currentLocation = window.location.pathname;
  console.log(currentLocation)
  return (
    <div class='navbar' >
      <NavLink style={{ transition: 'all 0.1s linear' }} className="text-black hover:text-blue no-underline" to='/'>Home</NavLink>
      <NavLink style={{ transition: 'all 0.1s linear' }} className="text-black hover:text-blue no-underline" to='/DeveloperProjects'>Developer Projects</NavLink>
      <NavLink style={{ transition: 'all 0.1s linear' }} className="text-black hover:text-blue no-underline" to='/'>Curriculum Vitae</NavLink>
    </div>
  )
}

export default Header