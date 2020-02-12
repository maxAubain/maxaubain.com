import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navLinksParams } from '../../router/links'
import { Project } from './Project'

export const Apps = () => {
  // Get externalLinks data from file containing tech keywords with related weblinks
  const [externalLinks, setExternalLinks] = useState({})
  const [isExternalLinksLoaded, setIsExternalLinksLoaded] = useState(false)
  useEffect(() => {
    axios.get('../../src/data/linksExternal.json').then(response => {
      setExternalLinks(response.data)
      setIsExternalLinksLoaded(true)
    })
  }, [])

  // Get projectsApplications data from file
  const [apps, setApps] = useState([])
  useEffect(() => {
    axios.get(navLinksParams.portfolio.apps.dataPath).then(response => {
      setApps(response.data)
    })
  }, [])

  // Apps projects object

  const projects = apps.map(project => {
    return (
      <>
        <div key={project.id}>
          <Project project={project} externalLinks={externalLinks} />
        </div>
      </>
    )
  })

  return (
    <>
      {isExternalLinksLoaded && (
        <div className="project-categories-wrapper">{projects}</div>
      )}
    </>
  )
}
