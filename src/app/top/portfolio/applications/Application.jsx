import React, { useState } from 'react'
import { IconSmall } from 'icons/IconSmall'
import { WebLink } from 'links/WebLink'
import { TechWebLinks } from './TechWebLinks'
import './style/application'

export const Application = ({ appData, externalLinksData }) => {
  const [projectAttributes, setProjectAttributes] = useState({
    hidden: true,
  })

  let projectContainerClassName, projectSummaryTitleClassName
  if (projectAttributes.hidden) {
    projectContainerClassName = 'application hidden'
    projectSummaryTitleClassName = 'application title-short'
  } else {
    projectContainerClassName = ''
    projectSummaryTitleClassName = 'application title-short-current'
  }

  const projectLinks = Object.keys(appData.links).map(key => {
    return (
      <div key={key}>
        <WebLink
          url={appData.links[key]}
          linkObj={key}
          className="application links-container weblink"
        />
      </div>
    )
  })

  const projectDescription = appData.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>
  })

  let valueArray, valueArraylength, i
  const technologyStack = Object.keys(appData.tech).map(key => {
    valueArray = appData.tech[key].split(', ')
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
        className="application container-short"
        onClick={() => {
          setProjectAttributes({ hidden: !projectAttributes.hidden })
        }}
      >
        <IconSmall
          src={require(`${appData.image.path}`)}
          alt={appData.image.alt}
        />
        <div className={projectSummaryTitleClassName}>{appData.title}</div>
        <div className="application description-short">
          {appData.descriptionShort}
        </div>
      </div>

      <div className={projectContainerClassName}>
        <div className="application links-description-technology-container">
          <div className="application links-description-container">
            <strong>
              <u>Links</u>
            </strong>
            {projectLinks}
            <br></br>
            <strong>
              <u>Description</u>
            </strong>
            {projectDescription}
          </div>
          <div className="application technology-container">
            <strong>
              <u>Technology</u>
            </strong>
            {technologyStack}
          </div>
        </div>
      </div>
    </>
  )
}
