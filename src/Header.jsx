import React from "react"
import { NavLink } from 'react-router-dom';

const Header = () => {
  let currentLocation = window.location.pathname;
  console.log(currentLocation)
  return (
    <div className="header-wrapper" >
      <NavLink style={{ transition: 'all 0.1s linear' }} className="text-black hover:text-blue no-underline" to='/'><img src="./src/img/left_arrow.png" class="left-arrow"></img></NavLink>
    </div>
  )
}

export default Header