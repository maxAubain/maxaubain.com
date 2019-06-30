import React from "react"

const EducationTile = (props) => {
    let educationItem = props.educationItem
    return (
        <div id="edu-tile-container" style={{display: 'flex' }}>
            <div id="left-container" className="" style={{flexDirection: 'col'  }}>
                <div style={{ }} className="font-bold px-2 text-blue">{educationItem.degree}</div>
                <div style={{}} className="px-2">{educationItem.major}</div>

                <div style={{ }} className="px-2 py-2" >
                    <div style={{ width: '20vw', float: 'left' }}>
                        <p><b>{educationItem.institution}</b></p>
                        <p>{educationItem.location}</p>
                        <p>{educationItem.startDate} - {educationItem.endDate}</p>
                    </div>

                </div>
            </div>
            <div id="right-container" style={{ width: '30vw', minWidth: '300px', paddingLeft: '25px', borderLeft: '2px solid #3490dc'}}>
                <p>{educationItem.description}</p>
            </div>

        </div>
    )
}

export default EducationTile