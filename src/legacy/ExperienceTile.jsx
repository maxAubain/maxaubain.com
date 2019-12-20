import React from "react"

const ExperienceTile = (props) => {
  let experienceItem = props.experienceItem
  return (
    <div id="exp-tile-container" style={{ display: 'flex' }}>
      <div id="left-container" className="" style={{ flexDirection: 'col' }}>
        <div style={{}} className="font-bold px-2 text-blue">{experienceItem.position}</div>

        <div style={{}} className="px-2 py-2" >
          <div style={{ width: '20vw', float: 'left' }}>
            <p><b>{experienceItem.company}</b></p>
            <p>{experienceItem.location}</p>
            <p>{experienceItem.startDate} - {experienceItem.endDate}</p>
          </div>

        </div>
      </div>
      <div id="right-container" style={{ width: '30vw', minWidth: '300px', paddingLeft: '25px', borderLeft: '2px solid #3490dc' }}>
        <p>{experienceItem.description}</p>
      </div>

    </div>
  )
}

export default ExperienceTile