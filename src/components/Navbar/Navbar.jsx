import React, { useState, useEffect } from './node_modules/react'
import { NavLink, useLocation } from './node_modules/react-router-dom'
import { IconSmallPlus } from '../common/IconSmallPlus'

const navLinksParams = {
  about: {
    label: 'About',
    path: '/about',
  },
  portfolio: {
    label: 'Portfolio',
    path: '/portfolio',
  },
  /* resume: {
    label: 'Resume',
    path: '/resume',
  }, */
  contact: {
    label: 'Contact',
    path: '/contact',
  },
}

const socialMediaIconsParams = {
  github: {
    url: 'https://github.com/maxAubain',
    image: {
      path: './img/github.png',
      alt: 'github-icon',
    },
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/maxaubain/',
    image: {
      path: './img/linkedin.png',
      alt: 'linkedin-icon',
    },
  },
}

export const NavBar = () => {
  // Handles navbar shadow on scroll
  const [navBarContCN, setNavBarContCN] = useState('navbar-container')

  const handleNavBarShadow = event => {
    document.documentElement.scrollTop > 10
      ? setNavBarContCN('navbar-container floating-navbar')
      : setNavBarContCN('navbar-container')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavBarShadow)
  })

  // Handles view reset on navlink click
  const handleViewReset = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }

  // Handles updating component for navLinks className update
  let location = useLocation()
  useEffect(() => {}, [location])

  // NavLinks object with NavLink highlighting style
  const navLinks = Object.keys(navLinksParams).map(key => {
    location.pathname.toString().includes(`/${key}`)
      ? Object.assign(navLinksParams[key], {
          className: 'navlink-current',
        })
      : Object.assign(navLinksParams[key], { className: 'navlink' })

    return (
      <NavLink
        key={key}
        className={navLinksParams[key].className}
        to={navLinksParams[key].path}
        onClick={handleViewReset}
      >
        {navLinksParams[key].label}
      </NavLink>
    )
  })

  // Social media icons links object
  const socialMediaIcons = Object.keys(socialMediaIconsParams).map(key => {
    return (
      <a
        key={key}
        onClick={() => {
          window.open(`${socialMediaIconsParams[key].url}`, '_blank')
        }}
      >
        <IconSmallPlus
          src={require(`${socialMediaIconsParams[key].image.path}`)}
          alt={socialMediaIconsParams[key].image.alt}
        />
      </a>
    )
  })

  return (
    <div className={navBarContCN}>
      <div className="navbar-navlinks">{navLinks}</div>
      <div className="navbar-social">{socialMediaIcons}</div>
    </div>
  )
}
