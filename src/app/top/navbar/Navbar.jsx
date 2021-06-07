import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IconSmallPlus } from '../../global/icons/IconSmallPlus'
import './style/navbar'

const navLinksParams = {
  about: {
    label: 'Profile',
    path: '/profile',
  },
  portfolio: {
    label: 'Portfolio',
    path: '/portfolio',
  },
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

export const Navbar = ({ top }) => {
  const [navbarState, setNavbarState] = useState({
    navbarPosition: 'relative',
    navbarTopVal: 0,
    pageYScrollAbsVal: 0,
    pageYScrollLastVal: 0,
  })

  // Page yScroll tracking and update logic
  const updateYScroll = () => {
    const pageYScrollLastVal = navbarState.pageYScrollAbsVal
    setNavbarState({
      ...navbarState,
      pageYScrollAbsVal: document.documentElement.scrollTop,
      pageYScrollLastVal,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', updateYScroll)
    return () => {
      window.removeEventListener('scroll', updateYScroll)
    }
  })

  // Update navbar position logic
  useEffect(() => {
    if (!top.state.isAtSplash) {
      setTimeout(function() {
        setNavbarState({ ...navbarState, navbarPosition: 'fixed' })
      }, 2000)
    }
  }, [top.state.isAtSplash])

  useEffect(() => {
    const navbarHeight = 54, // px
      navbarTopValDiff =
        navbarState.pageYScrollLastVal - navbarState.pageYScrollAbsVal // negative if scrolling down
    let navbarTopVal = navbarState.navbarTopVal

    // navbarTopVal = 0 when showing
    // if scrolling up, show navbar in amount of scroll differential
    if (navbarTopValDiff > 0) {
      if (Math.abs(navbarTopVal + navbarTopValDiff <= 0)) {
        navbarTopVal = navbarTopVal + navbarTopValDiff
      } else {
        navbarTopVal = 0
      }
    }

    // navbarTopVal = -navbarHeight when hidden
    // if scrolling down, hide navbar in amount of scroll differential
    if (navbarTopValDiff < 0) {
      if (Math.abs(navbarTopVal + navbarTopValDiff >= -navbarHeight)) {
        navbarTopVal = navbarTopVal + navbarTopValDiff
      } else {
        navbarTopVal = -navbarHeight
      }
    }

    setNavbarState({
      ...navbarState,
      navbarTopVal,
    })
  }, [navbarState.pageYScrollAbsVal])

  // Side nav elements and logic
  const handleViewReset = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    },
    location = useLocation(),
    navLinks = Object.keys(navLinksParams).map(key => {
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

  const socialMediaIcons = Object.keys(socialMediaIconsParams).map(key => {
    return (
      <a
        key={key}
        onClick={() => {
          window.open(`${socialMediaIconsParams[key].url}`, '_blank')
        }}
        className="navbar__social__icon"
      >
        <IconSmallPlus
          src={require(`${socialMediaIconsParams[key].image.path}`)}
          alt={socialMediaIconsParams[key].image.alt}
        />
      </a>
    )
  })

  // console.log('Navbar state: ', navbarState)

  return (
    <div
      className="navbar"
      style={{
        position: navbarState.navbarPosition,
        top: `${navbarState.navbarTopVal}px`,
      }}
    >
      <div className="navbar__navlinks__container">{navLinks}</div>
      <div className="navbar__social__container">{socialMediaIcons}</div>
    </div>
  )
}
