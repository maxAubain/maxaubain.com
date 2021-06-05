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
            <div className="splash__hero-text--top--section fontsize1">
              Building Web Applications
            </div>
            <div className="splash__hero-text--top--section fontsize2">
              Getting data where it needs to go.
            </div>
          </div>
          <div className="splash__hero-text--bottom">
            <div className="fontsize3">Max Aubain, Ph.D.</div>
            <div className="fontsize4">Full Stack Developer</div>
          </div>
        </div>
      </div>
      <div
        className={`splash__button ${splashButtonClassName}`}
        onClick={scroll}
      >
        <div className="splash__button__content fontsize3">
          Let's go &#9660;
        </div>
      </div>
    </div>
  )
}
