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
  // const [navBarContCN, setNavBarContCN] = useState('navbar container')

  /* const handleNavBarShadow = event => {
    document.documentElement.scrollTop > 10
      ? setNavBarContCN('navbar container floating')
      : setNavBarContCN('navbar container')
  } */

  const [navbarState, setNavbarState] = useState({
    navbarPosition: 'relative',
    navbarTopVal: 0,
    yScrollPageAbsVal: 0,
    yScrollPageRelVal: 0,
  })

  const handleScrollCount = () => {
    // console.log(document.documentElement.scrollTop)
    setNavbarState({
      ...navbarState,
      yScrollPageAbsVal: document.documentElement.scrollTop,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollCount)
    return () => {
      window.removeEventListener('scroll', handleScrollCount)
    }
  })

  useEffect(() => {
    if (!top.state.isAtSplash) {
      setTimeout(function() {
        setNavbarState({ ...navbarState, navbarPosition: 'fixed' })
      }, 2000)
    }
  }, [top.state.isAtSplash])

  const handleViewReset = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }

  let location = useLocation()
  useEffect(() => {}, [location])

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

  console.log('Navbar state: ', navbarState)

  return (
    <div
      className="navbar container"
      style={{
        position: navbarState.navbarPosition,
        top: `${navbarState.navbarTopVal}px`,
      }}
    >
      <div className="navbar navlinks">{navLinks}</div>
      <div className="navbar social">{socialMediaIcons}</div>
    </div>
  )
}
