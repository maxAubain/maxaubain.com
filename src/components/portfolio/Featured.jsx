import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FeaturedItemCard } from './FeaturedItemCard'

export const Featured = () => {
  // Get content items data from file
  const [featuredContent, setFeaturedContent] = useState([])
  const [isFeaturedContentLoaded, setIsFeaturedContentLoaded] = useState(false)
  const featuredContentPath = '../../src/data/projectsFeatured.json'
  useEffect(() => {
    axios.get(featuredContentPath).then(response => {
      setFeaturedContent(response.data)
      setIsFeaturedContentLoaded(true)
    })
  }, [])

  const featuredContentItems = featuredContent.map(featuredContentitem => {
    return (
      <div key={featuredContentitem.id}>
        <FeaturedItemCard featuredContentItem={featuredContentitem} />
      </div>
    )
  })

  return (
    <>
      {isFeaturedContentLoaded && (
        <div
          className="project-categories-wrapper 
    project-categories-wrapper-featured"
        >
          {featuredContentItems}
        </div>
      )}
    </>
  )
}
