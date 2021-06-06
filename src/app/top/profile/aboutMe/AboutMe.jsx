import React from 'react'
import { IconMed } from 'icons/IconMed'
import personalDescriptionsData from './data/personal-descriptions.json'
import roleDescriptionsData from './data/role-descriptions'
import './style/about-me'

export const AboutMe = () => {
  const personalDescriptions = personalDescriptionsData.map(description => {
    return (
      <p key={description.slice(0, 10)} className="about-me headline-item">
        {description}
      </p>
    )
  })

  const roleDescriptions = roleDescriptionsData.map(description => {
    let descriptionParagraphs = description.paragraphs.map(paragraph => {
      return <p key={paragraph.slice(0, 10)}>{paragraph}</p>
    })
    return (
      <div key={description.id} className="about-me section feature-about-me">
        <div className="about-me role-image">
          <div>
            <IconMed
              src={require(`${description.img.src}`)}
              alt={description.img.alt}
            />
          </div>
          <br />
          {description.roleTitle}
        </div>
        <div className="about-me role-description">{descriptionParagraphs}</div>
      </div>
    )
  })

  return (
    <>
      <div className="about-me personal">
        <div className="about-me section headshot-container">
          <div>
            <img
              className="about-me headshot"
              src={require('./img/head-shot')}
              alt="image-max-face"
            />
          </div>
          <div className="about-me name">Max Aubain, Ph.D.</div>
        </div>
        <div className="about-me section headline-container">
          {personalDescriptions}
        </div>
      </div>
      {roleDescriptions}
    </>
  )
}
