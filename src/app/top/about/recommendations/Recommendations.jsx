import React from 'react'
import { WebLink } from '../../../global/links/WebLink'

export const Recommendations = () => {
  return (
    <div className="education-container">
      <div className="section-profile feature-profile">
        <div className="feature-description">
          <p>
            "Max mentored me for 3 years in grad school and managed me as an
            intern at Silanna.
          </p>
          <p>
            Max is thorough and is very good at precise, complex, detail
            oriented work. The work he delivers and manages through others is
            high quality, even in fast paced, constantly changing and high
            pressure environments. Max communicates with others and makes
            decisions with the calm and level headnesses of someone who has
            months to reason through things, while easily making decisions
            quickly and with limited information.
          </p>

          <p>
            He is an effective and transparent manager, and is great at always
            being available even while being extremely productive himself. He
            consistently develops the skills of those he works with while
            fostering independence and growth."
          </p>
          <p>
            -{' '}
            <WebLink
              linkObj="Anna Alexander, Ph.D."
              url="https://www.linkedin.com/in/anna-alexander-78482021/"
              className="weblink"
            />
          </p>
        </div>
      </div>
    </div>
  )
}
