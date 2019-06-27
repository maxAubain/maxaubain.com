import React from "react"

const Tile = (props) => {
    let project = props.project
    return (

        <div key={project.id}>
        
            <img src={project.image} className="w-60 rounded-lg m-2" style={{ height: '100px', objectFit: 'cover' }} />
            
            <div className="font-bold text-xl text-red-dark px-2">{project.name}</div>

            <div className="px-2 py-4" style={{ minHeight: '150px' }} >
                
                <p className="text-black">
                    {project.description}
                </p>
            </div>
        </div>
    )
}

export default Tile