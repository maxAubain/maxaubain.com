import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navLinksParams } from '../../router/links'
import { Project } from './Project'

export const Exercises = () => {
  // Get externalLinks data from file containing tech keywords with related weblinks
  const [externalLinks, setExternalLinks] = useState({})
  const [isExternalLinksLoaded, setIsExternalLinksLoaded] = useState(false)
  useEffect(() => {
    axios.get('../../src/data/linksExternal.json').then(response => {
      setExternalLinks(response.data)
      setIsExternalLinksLoaded(true)
    })
  }, [])

  // Get projectsExercises data from file
  const [exercises, setExercises] = useState([])
  useEffect(() => {
    axios.get(navLinksParams.portfolio.exercises.dataPath).then(response => {
      setExercises(response.data)
    })
  }, [])

  // Exercises projects object
  const projects = exercises.map(project => {
    return (
      <>
        {isExternalLinksLoaded && (
          <div key={project.id}>
            <Project project={project} externalLinks={externalLinks} />
          </div>
        )}
      </>
    )
  })

  return (
    <>
      <div className="project-categories-wrapper">{projects}</div>
    </>
  )
}
