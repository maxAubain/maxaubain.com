import React from 'react'
import './style/splash'

export const Splash = () => {
  return (
    <>
      <div className="splash__hero">
        <div className="splash__hero--text-container">
          <div className="splash__hero--text-top">
            Getting data where it needs to go.
          </div>
          <div className="splash__hero--text-bottom">
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
    </>
  )
}
