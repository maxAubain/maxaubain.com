import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title"><NavLink className="text-white hover:text-grey no-underline" to='/'>Max Aubain</NavLink></h1>
            <ul className="list-reset flex">
                <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" to='/about'>About</NavLink></li>
                <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" to='/projects'>Projects</NavLink></li>
            </ul>
        </nav>
    )   
}

export default Header