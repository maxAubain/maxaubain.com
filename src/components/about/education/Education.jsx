import React from 'react'
import { WebLink } from '../../common/WebLink'
import dataEducation from '../../../data/education-history'

export const Education = () => {
  // Education cards object
  const eduCards = dataEducation.map(eduContentItem => {
    // Optional weblink object
    let eduWebLink
    eduContentItem.webLink.url
      ? (eduWebLink = (
          <>
            {' '}
            <WebLink
              url={eduContentItem.webLink.url}
              linkObj={eduContentItem.webLink.linkObj}
              className={eduContentItem.webLink.className}
            />
            .
          </>
        ))
      : (eduWebLink = <></>)

    return (
      // Education card object
      <div
        key={eduContentItem.id}
        className="education-section education-feature"
      >
        <div className="education-feature-title">
          <div>
            <img
              src={require(`${eduContentItem.img.src}`)}
              alt={eduContentItem.img.alt}
              height={eduContentItem.img.height}
              width={eduContentItem.img.width}
            />
          </div>
          <div className="education-title">
            {eduContentItem.institution.topLine} <br />
            {eduContentItem.institution.botLine}
          </div>
        </div>
        <div className="education-feature-description">
          <p className="education-title">
            {eduContentItem.degree}
            <br />
            {eduContentItem.discipline}
          </p>
          <p className="education-setting">
            {eduContentItem.location}
            <br />
            {eduContentItem.year}
          </p>
          <p>
            {eduContentItem.body}
            {eduWebLink}
          </p>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="education-container">{eduCards}</div>
    </>
  )
}
