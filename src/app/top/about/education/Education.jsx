import React from 'react'
import { WebLink } from 'links/WebLink'
import educationData from './data/education-history'
import './style/education'

export const Education = () => {
  const educationHighlights = educationData.map(educationHighlightData => {
    let refWebLink
    educationHighlightData.webLink.url
      ? (refWebLink = (
          <>
            {' '}
            <WebLink
              url={educationHighlightData.webLink.url}
              linkObj={educationHighlightData.webLink.linkObj}
              className={educationHighlightData.webLink.className}
            />
            .
          </>
        ))
      : (refWebLink = <></>)

    let educationHighlight = (
      <div key={educationHighlightData.id} className="education highlight">
        <div className="education logo-and-name">
          <div>
            <img
              src={require(`${educationHighlightData.img.src}`)}
              alt={educationHighlightData.img.alt}
              height={educationHighlightData.img.height}
              width={educationHighlightData.img.width}
            />
          </div>
          <div className="education name">
            {educationHighlightData.institution.topLine} <br />
            {educationHighlightData.institution.botLine}
          </div>
        </div>
        <div className="education details">
          <p className="education degree">
            {educationHighlightData.degree}
            <br />
            {educationHighlightData.discipline}
          </p>
          <p className="education place-and-grad-date">
            {educationHighlightData.location}
            <br />
            {educationHighlightData.year}
          </p>
          <p>
            {educationHighlightData.body}
            {refWebLink}
          </p>
        </div>
      </div>
    )

    return educationHighlight
  })

  return (
    <>
      <div className="education container">{educationHighlights}</div>
    </>
  )
}
