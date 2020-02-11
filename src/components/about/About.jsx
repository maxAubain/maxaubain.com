import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { navLinksParams } from '../../router/links'
import { routesParams } from '../../router/routes'

export const About = () => {
  // NavLinks object with NavLink highlighting style
  const navLinks = Object.keys(navLinksParams.about).map(key => {
    return (
      <NavLink
        key={key}
        className="navlink-section"
        activeClassName="navlink-section-current"
        to={navLinksParams.about[key].path}
      >
        {navLinksParams.about[key].label}
      </NavLink>
    )
  })

  // Routes object
  const routes = Object.keys(routesParams.about.children).map(key => {
    return (
      <Route
        key={key}
        path={routesParams.about.children[key].path}
        component={routesParams.about.children[key].component}
      />
    )
  })

  return (
    <>
      <div className="navlink-section-container">{navLinks}</div>
      {routes}
    </>
  )
}
