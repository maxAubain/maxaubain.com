import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import './style/navlink'

export const NavLinkUpRoute = ({ linkObj }) => {
  const goUpOneRoute = url => {
    let newUrl = url.substring(0, url.lastIndexOf('/'))
    return newUrl
  }
  const { url } = useRouteMatch()
  return (
    <>
      <NavLink to={goUpOneRoute(url)} className="navlink">
        {linkObj}
      </NavLink>
    </>
  )
}
