import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Tile = (props) => {
    let project = props.project
    return (

        <div key={project.id} className="rounded-lg shadow-2xl border-2 hover:border-red-dark hover:shadow-2xlred">
            <NavLink className="no-underline" to={project.navlink}>

                <img src={project.image} className="w-60 rounded-lg m-2" style={{ height: '150px', objectFit: 'cover' }} />

                <div className="font-bold text-xl text-red-dark px-2">{project.name}</div>

                <div className="px-2 py-4" style={{ minHeight: '100px' }} >
                    
                    <p className="text-black">
                        {project.description}
                    </p>
                </div>

            </NavLink>
        </div>
    )
}

export default Tile