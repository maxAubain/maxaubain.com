import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Project } from './Project'

export const Exercises = () => {
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

  // Get projectsExercises data from file
  const [exercises, setExercises] = useState([])
  const [isExercisesLoaded, setIsExercisesLoaded] = useState(false)
  const exercisesPath = '../../src/data/projectsExercises.json'
  useEffect(() => {
    axios.get(exercisesPath).then(response => {
      setExercises(response.data)
      setIsExercisesLoaded(true)
    })
  }, [])

  // Exercises projects object
  const projects = exercises.map(project => {
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
      {isExternalLinksLoaded && isExercisesLoaded && (
        <div className="project-categories-wrapper">{projects}</div>
      )}
    </>
  )
}
