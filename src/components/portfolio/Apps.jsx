import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Project } from './Project'

export const Apps = () => {
  // Get externalLinks data from file containing tech keywords with related weblinks
  const [externalLinks, setExternalLinks] = useState({})
  const [isExternalLinksLoaded, setIsExternalLinksLoaded] = useState(false)
  const externalLinksPath = '../../src/data/linksExternal.json'
  useEffect(() => {
    axios.get(externalLinksPath).then(response => {
      setExternalLinks(response.data)
      setIsExternalLinksLoaded(true)
    })
  }, [])

  // Get projectsApplications data from file
  const [apps, setApps] = useState([])
  const [isAppsLoaded, setIsAppsLoaded] = useState(false)
  const appsPath = '../../src/data/projectsApplications.json'
  useEffect(() => {
    axios.get(appsPath).then(response => {
      setApps(response.data)
      setIsAppsLoaded(true)
    })
  }, [])

  // Apps projects object

  const projects = apps.map(project => {
    return (
      <Project
        key={project.id}
        project={project}
        externalLinks={externalLinks}
      />
    )
  })

  return (
    <>
      {isExternalLinksLoaded && isAppsLoaded && (
        <div className="project-categories-wrapper">{projects}</div>
      )}
    </>
  )
}
