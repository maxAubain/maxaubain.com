import React from "react"

const EducationTile = (props) => {
    let educationItem = props.educationItem
    return (
        <div className="pb-px h-auto " style={{background: 'linear-gradient(to right, #eff8ff, #1c3d5a, #eff8ff)'}}>
            <div className="bg-blue-lightest">
                <div className="font-bold text-blue-darker px-2">{educationItem.degree}, {educationItem.major}</div>

                <div className="px-6 py-4">
                    
                    <div className="text-grey-darker">
                        <p>{educationItem.institution}</p>
                        <p>{educationItem.startDate} - {educationItem.endDate}</p>
                        <p>{educationItem.location}</p>
                        <br></br>
                        <p>{educationItem.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationTile