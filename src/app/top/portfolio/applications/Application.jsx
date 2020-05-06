import React, { useState } from 'react'
import { IconSmall } from '../../../global/icons/IconSmall'
import { WebLink } from '../../../global/links/WebLink'
import { TechWebLinks } from './TechWebLinks'
import './style/application'

export const Application = ({ appData, externalLinksData }) => {
  const [projectAttributes, setProjectAttributes] = useState({
    hidden: true,
  })

  let projectContainerClassName, projectSummaryTitleClassName
  if (projectAttributes.hidden) {
    projectContainerClassName = 'project-details-container hidden'
    projectSummaryTitleClassName = 'project-summary-title'
  } else {
    projectContainerClassName = 'project-details-container'
    projectSummaryTitleClassName = 'project-summary-title-current'
  }

  const projectLinks = Object.keys(appData.links).map(key => {
    return (
      <div key={key}>
        <WebLink
          url={appData.links[key]}
          linkObj={key}
          className="project-details-link weblink"
        />
      </div>
    )
  })

  const projectDescription = appData.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>
  })

  let valueArray, valueArraylength, i
  const technologyStack = Object.keys(appData.tech).map(key => {
    valueArray = appData.tech[key].split(', ') // e.g. valueArray = ["Netlify", "Heroku"]
    valueArraylength = valueArray.length

    for (i = 0; i < valueArraylength; i++) {
      valueArray.splice(
        i,
        1,
        <TechWebLinks
          key={valueArray[i]}
          keyword={valueArray[i]}
          externalLinksData={externalLinksData}
        />
      )
    }

    // Insert ", " value between adjacent weblink objects in array
    if (valueArraylength > 1) {
      for (i = 1; i < 2 * valueArraylength - 2; i = i + 2) {
        valueArray.splice(i, 0, ', ')
      }
    }

    return (
      <p key={key}>
        <strong>{key}</strong>: {valueArray}.
      </p>
    )
  })

  return (
    <>
      <div
        className="project-summary"
        onClick={() => {
          setProjectAttributes({ hidden: !projectAttributes.hidden })
        }}
      >
        <IconSmall
          src={require(`${appData.image.path}`)}
          alt={appData.image.alt}
        />
        <div className={projectSummaryTitleClassName}>{appData.title}</div>
        <div className="project-summary-description">
          {appData.descriptionShort}
        </div>
      </div>

      <div className={projectContainerClassName}>
        <div className="project-details-padding">
          <div className="project-description-full-container">
            <div className="project-details-link-container">
              <strong>
                <u>Links</u>
              </strong>
              {projectLinks}
              <br></br>
              {/* <div className="project-description-full"> */}
              <strong>
                <u>Description</u>
              </strong>
              {projectDescription}
              {/* </div> */}
            </div>
            <div className="project-tech">
              <strong>
                <u>Technology</u>
              </strong>
              {technologyStack}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
