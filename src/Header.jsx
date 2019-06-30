import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <div style={{ width: '50%', textAlign: 'right', marginTop: '-12px', paddingRight: '10px'}}>
                <h1 className="header-title"><NavLink style={{transition: 'all 0.1s linear'}} className="text-black hover:text-blue no-underline" to='/'>React Lab</NavLink></h1>
            </div>
            <div style={{ width: '50%' , textAlign: 'left', marginTop: '12px'}}>
                <ul className="list-reset flex">
                    <li className="mr-6"><a href="https://maxaubain.github.io" style={{transition: 'all 0.1s linear'}} className="text-black hover:text-blue no-underline">by Max Aubain</a></li>
                    {/*<li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" to='/projects'>Projects</NavLink></li>*/}
                </ul>
            </div>
        </nav>
    )   
}

export default Header