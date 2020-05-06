import React from 'react'
import { WebLink } from 'links/WebLink'
import './style/featured-content-card'

export const FeaturedContentCard = ({ featuredContentItem }) => {
  const card = (
    <div className="featured-content-card card">
      <div className="featured-content-card category-title-container">
        <div className="featured-content-card category">
          {featuredContentItem.category}
        </div>
        <div className="featured-content-card date">
          {featuredContentItem.date_posted}
        </div>
        <div className="featured-content-card title">
          {featuredContentItem.title}
        </div>
      </div>
      <div className="featured-content-card img-container">
        <img
          src={require(`${featuredContentItem.image.path}`)}
          className="featured-content-card img"
        />
      </div>
    </div>
  )

  return (
    <>
      <div
        key={featuredContentItem.id}
        className="featured-content-card container"
      >
        <WebLink url={featuredContentItem.links['live site']} linkObj={card} />
      </div>
    </>
  )
}
