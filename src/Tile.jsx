import React from "react"

const Tile = (props) => {
    let project = props.project
    return (

        <div key={project.id} className="">
            
            <div className="font-bold text-xl text-red-dark mb-2 mt-2">{project.name}</div>
            
            <img src={project.image} className="w-full" style={{ height: '100px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '100px' }} >
                
                <p className="text-black text-base">
                    {project.description}
                </p>
            </div>
        </div>
    )
}

export default Tile