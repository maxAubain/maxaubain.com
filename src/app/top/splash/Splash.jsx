import React from 'react'
import './style/splash'

export const Splash = () => {
  return (
    <div className="splash">
      <div className="splash__hero-text--outer-container">
        <div className="splash__hero-text--inner-container">
          <div className="splash__hero-text--top">
            Getting data where it needs to go.
          </div>
          <div className="splash__hero-text--bottom">
            Max Aubain &middot; Full Stack Developer
          </div>
        </div>
      </div>
      <div
        className="splash__button"
        onClick={() => {
          window.scroll({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        }}
      >
        <div className="splash__button__content">Explore</div>
      </div>
    </div>
  )
}
