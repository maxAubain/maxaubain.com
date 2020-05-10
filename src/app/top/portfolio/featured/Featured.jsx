import React from 'react'
import { FeaturedContentCard } from './FeaturedContentCard'
import featuredContentData from './data/featured-content'
import './style/featured'

export const Featured = () => {
  const featuredContentItems = featuredContentData.map(featuredContentitem => {
    return (
      <div key={featuredContentitem.id}>
        <FeaturedContentCard featuredContentItem={featuredContentitem} />
      </div>
    )
  })

  return (
    <>
      <div className="featured container">{featuredContentItems}</div>
    </>
  )
}
