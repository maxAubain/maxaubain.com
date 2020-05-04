import React from 'react'
import { IconMed } from '../../../global/icons/IconMed'
import personalDescriptionsData from './data/personal-descriptions.json'
import roleDescriptionsData from './data/role-descriptions'
import './style/profile'

export const Profile = () => {
  const personalDescriptions = personalDescriptionsData.map(description => {
    return (
      <p key={description.slice(0, 10)} className="profile headline-item">
        {description}
      </p>
    )
  })

  const roleDescriptions = roleDescriptionsData.map(description => {
    let descriptionParagraphs = description.paragraphs.map(paragraph => {
      return <p key={paragraph.slice(0, 10)}>{paragraph}</p>
    })
    return (
      <div
        key={description.id}
        className="profile section-profile feature-profile"
      >
        <div className="profile feature-title">
          <div>
            <IconMed
              src={require(`${description.img.src}`)}
              alt={description.img.alt}
            />
          </div>
          <br />
          {description.roleTitle}
        </div>
        <div className="profile feature-description">
          {descriptionParagraphs}
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="profile intro">
        <div className="profile section-profile headshot-container">
          <div>
            <img
              className="profile headshot"
              src={require('./img/head-shot')}
              alt="image-max-face"
            />
          </div>
          <div>Max Aubain, Ph.D.</div>
        </div>
        <div className="profile section-profile headline-container">
          {personalDescriptions}
        </div>
      </div>
      {roleDescriptions}
    </>
  )
}
