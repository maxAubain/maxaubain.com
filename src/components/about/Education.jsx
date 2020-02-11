import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WebLink } from '../common/WebLink'

export const Education = () => {
  const [ed, setEd] = useState([])
  useEffect(() => {
    if (ed.length === 0) {
      axios.get('../../src/data/dataEducation.json').then(response => {
        setEd(response.data)
      })
    }
  })

  // Education cards object
  const edCards = ed.map(edItem => {
    // Optional weblink object
    let edWebLink
    edItem.webLink.url
      ? (edWebLink = (
          <>
            {' '}
            <WebLink
              url={edItem.webLink.url}
              linkObj={edItem.webLink.linkObj}
              className={edItem.webLink.className}
            />
            .
          </>
        ))
      : (edWebLink = <></>)

    return (
      <div key={edItem.id} className="education-section education-feature">
        <div className="education-feature-title">
          <div>
            <img
              src={edItem.img.src}
              alt={edItem.img.alt}
              height={edItem.img.height}
              width={edItem.img.width}
            />
          </div>
          <div className="education-title">
            {edItem.institution.topLine} <br />
            {edItem.institution.botLine}
          </div>
        </div>
        <div className="education-feature-description">
          <p className="education-title">
            {edItem.degree}
            <br />
            {edItem.discipline}
          </p>
          <p className="education-setting">
            {edItem.location}
            <br />
            {edItem.year}
          </p>
          <p>
            {edItem.body}
            {edWebLink}
          </p>
        </div>
      </div>
    )
  })

  return <div className="education-container">{edCards}</div>
}
