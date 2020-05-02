import React from 'react'
import { IconMed } from '../../../global/icons/IconMed'
import headShotImage from './img/head-shot'
import developerIcon from './img/developer'
import projectManagerIcon from './img/project-manager'
import analystIcon from './img/analyst'
import './style/profile'

export const Profile = () => {
  return (
    <>
      <div className="intro">
        <div className="section-profile headshot-container">
          <div>
            <img
              className="headshot"
              src={headShotImage}
              alt="image-max-face"
            />
          </div>
          <div>Max Aubain, Ph.D.</div>
        </div>
        <div className="section-profile headline-container">
          <div className="headline-item">
            <p>
              Technical expert with over 10 years of experience researching,
              developing, and prototyping emerging technologies.
            </p>
          </div>
          <div className="headline-item">
            <p>
              Recently moved back to the USA from Sweden and enjoying a New
              England lifestyle.
            </p>
          </div>
          <div className="headline-item">
            <p>
              Sci-fi fan and engineer at heart. I often wonder, "And, how could
              that be used?"
            </p>
          </div>
        </div>
      </div>
      <div className="section-profile feature-profile">
        <div className="feature-title">
          <div>
            <IconMed src={developerIcon} alt="developer-icon" />
          </div>
          <br />
          Full Stack Developer
        </div>
        <div className="feature-description">
          <p>
            Max has written applications in a number of languages throughout his
            engineering career, from lab test automation in Labview to numerical
            integration in MATLAB.
          </p>
          <p>
            Now, he is laser focused on web development. His core competences
            include Agile development, testing frameworks, Ruby on Rails, and
            ReactJS.
          </p>
          <p>
            Development-centered opportunities are his next ideal career move.
          </p>
        </div>
      </div>
      <div className="section-profile feature-profile">
        <div className="feature-title">
          <div>
            <IconMed src={projectManagerIcon} alt="project-manager-icon" />
          </div>
          <br />
          Project Manager
        </div>
        <div className="feature-description">
          <p>
            Max has technical project manager experience and is passionate about
            enhancing the quality of products through business flow development.
            He thrives when working on interdisciplinary projects and is
            energized by the prospect of bringing structure to the chaos of
            building something new.
          </p>
          <p>
            His experience includes Scrum Master in Agile development settings
            and product reliability management in the semiconductor industry.
          </p>
        </div>
      </div>
      <div className="section-profile feature-profile">
        <div className="feature-title">
          <div>
            <IconMed src={analystIcon} alt="analyst-icon" />
          </div>
          <br />
          Analyst
        </div>
        <div className="feature-description">
          <p>
            Max has a unique combination of professional experiences that have
            shaped his analytic abilities and skills.
          </p>
          <p>
            He has passed the U.S. Patent Bar Exam and worked as a registered
            Patent Agent. As an inventor, he is an author of two semiconductor
            device patents.
          </p>
          <p>
            His analytical foundation lies in the completion of an engineering
            Ph.D. that resulted in the publication of three peer reviewed
            journal articles.
          </p>
        </div>
      </div>
    </>
  )
}
