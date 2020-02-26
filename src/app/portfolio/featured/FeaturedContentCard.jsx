import React from 'react'
import { WebLink } from '../../../global/components/WebLink'

export const FeaturedContentCard = ({ featuredContentItem }) => {
  const card = (
    <div className="featured-card">
      <div className="featured-category-title-container">
        <div className="featured-category">{featuredContentItem.category}</div>
        <div className="featured-date">{featuredContentItem.date_posted}</div>
        <div className="featured-title">{featuredContentItem.title}</div>
      </div>
      <div className="featured-img-container">
        <img
          src={require(`${featuredContentItem.image.path}`)}
          className="featured-img"
        />
      </div>
    </div>
  )

  return (
    <>
      <div key={featuredContentItem.id} className="featured-container">
        <WebLink url={featuredContentItem.links['live site']} linkObj={card} />
      </div>
    </>
  )
}
