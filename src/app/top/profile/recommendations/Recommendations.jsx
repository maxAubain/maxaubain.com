import React from 'react'
import { WebLink } from 'links/WebLink'
import recommendationsData from './data/recommendations'
import './style/recommendations'

export const Recommendations = () => {
  const recommendationHighlights = recommendationsData.map(recommendation => {
    let paragraphs = recommendation.paragraphs.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>
    })
    return (
      <div key={recommendation.id} className="recommendations highlight">
        <div className="recommendations date">{recommendation.date}</div>
        {paragraphs}
        <p>
          -{' '}
          <WebLink
            linkObj={recommendation.id}
            url={recommendation.url}
            className="weblink recommendations link"
          />
        </p>
      </div>
    )
  })
  return (
    <div className="recommendations container">{recommendationHighlights}</div>
  )
}
