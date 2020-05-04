import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import './style/navlink'

export const NavLinkUpRouteTop = ({ linkObj }) => {
  const goUpOneRoute = url => {
    let newUrl = url.substring(0, url.lastIndexOf('/'))
    return newUrl
  }

  // Handles view reset on navlink click
  const handleViewReset = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }

  const { url } = useRouteMatch()
  return (
    <>
      <NavLink
        to={goUpOneRoute(url)}
        className="navlink"
        onClick={handleViewReset}
      >
        {linkObj}
      </NavLink>
    </>
  )
}
