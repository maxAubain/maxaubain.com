import React from "react"
import { NavLink, Link } from 'react-router-dom';
import './css/tailwind.src.css';

const Tile = (props) => {
  let project = props.project
  return (
    <div key={project.id} style={{ transition: 'all 0.1s linear' }} className="rounded-lg border border-grey hover:shadow-2xl hover:bg-grey-lightest">
      <img src={project.image} className="w-60 rounded-lg m-2" style={{ height: '150px', objectFit: 'cover' }} />
      <div className="font-bold text-xl text-black px-2">{project.name}</div>
      <div className="px-2 py-4" style={{ minHeight: '100px' }} >
        <p className="text-grey-darker">
          {project.description}
        </p>
      </div>
      <div><a href={project.deploy_link}>Deployed Site</a></div>
      <div><a href={project.readme_link}>Project Documentation</a></div>
    </div>
  )
}

export default Tile