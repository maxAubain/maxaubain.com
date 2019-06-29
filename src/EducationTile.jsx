import React from "react"

const EducationTile = (props) => {
    let educationItem = props.educationItem
    return (
        <div className="px-4 py-4 h-auto">
            <div className="font-bold text-blue-darker px-2">{educationItem.degree}, {educationItem.major}</div>

            <div className="px-2 py-4">
                
                <div className="text-grey-darker">
                    <p>{educationItem.institution}</p>
                    <p>{educationItem.startDate} - {educationItem.endDate}</p>
                    <p>{educationItem.location}</p>
                    <br></br>
                    <p>{educationItem.description}</p>
                </div>
            </div>
        </div>
    )
}

export default EducationTile