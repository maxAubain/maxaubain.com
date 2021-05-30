import React, { useState } from 'react'
import './style/splash'

export const Splash = ({ top }) => {
  /* const scroll = () => {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  } */

  const scroll = () => {
    top.setState({ ...top.state, isAtSplash: false })
    // setSplashState({ splashClassName: 'splash--shrink' })
  }

  let splashClassName
  if (!top.state.isAtSplash) {
    splashClassName = 'splash--scroll-up'
  }

  return (
    <div className={`splash ${splashClassName}`}>
      <div className="splash__hero-text--outer-container">
        <div className="splash__hero-text--inner-container">
          <div className="splash__hero-text--top">
            Building web applications that get data where it needs to go.
          </div>
          <div className="splash__hero-text--bottom">
            Max Aubain, Ph.D. &middot; Full Stack Developer
          </div>
        </div>
      </div>
      <div className="splash__button" onClick={scroll}>
        <div className="splash__button__content">Let's go &#9660;</div>
      </div>
    </div>
  )
}
