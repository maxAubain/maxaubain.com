import React from 'react'
import './style/splash'

export const Splash = ({ top }) => {
  const scroll = () => {
    top.setState({ ...top.state, isAtSplash: false })
  }

  let splashClassName
  if (!top.state.isAtSplash) {
    splashClassName = 'splash--scroll-up'
  }

  let splashButtonClassName = ''
  if (top.state.isSplashButtonTimeoutFinished) {
    splashButtonClassName = 'splash__button--unhidden'
  }

  return (
    <div className={`splash ${splashClassName}`}>
      <div className="splash__hero-text--outer-container">
        <div className="splash__hero-text--inner-container">
          <div className="splash__hero-text--top">
            Building web applications. Getting data where it needs to go.
          </div>
          <div className="splash__hero-text--bottom">
            Max Aubain, Ph.D. &middot; Full Stack Developer
          </div>
        </div>
      </div>
      <div
        className={`splash__button ${splashButtonClassName}`}
        onClick={scroll}
      >
        <div className="splash__button__content">Let's go &#9660;</div>
      </div>
    </div>
  )
}
