import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navLinksParams } from '../../router/links'
import { FeaturedItemCard } from './FeaturedItemCard'

export const Featured = () => {
  // Get content items data from file
  const [featuredContent, setFeaturedContent] = useState([])
  const [isContentLoaded, setIsContentLoaded] = useState(false)
  useEffect(() => {
    axios.get(navLinksParams.portfolio.featured.dataPath).then(response => {
      setFeaturedContent(response.data)
      setIsContentLoaded(true)
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
      {isContentLoaded && (
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
