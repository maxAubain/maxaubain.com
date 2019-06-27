import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title"><NavLink className="text-white hover:text-red-lighter no-underline" to='/'>React Laboratory</NavLink></h1>
            <ul className="list-reset flex">
                <li className="mr-6"><a href="https://maxaubain.github.io" className="text-white hover:text-red-lighter no-underline">by Max Aubain</a></li>
                {/*<li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" to='/projects'>Projects</NavLink></li>*/}
            </ul>
        </nav>
    )   
}

export default Header