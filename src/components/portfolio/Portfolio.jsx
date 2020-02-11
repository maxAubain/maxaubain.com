import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { ContentItemsCount } from './ContentItemsCount'
import { navLinksParams } from '../../router/links'
import { routesParams } from '../../router/routes'

export const Portfolio = () => {
  // Navlinks object
  const navLinks = Object.keys(navLinksParams.portfolio).map(key => {
    return (
      <NavLink
        key={key}
        className="navlink-section"
        activeClassName="navlink-section-current"
        to={navLinksParams.portfolio[key].path}
      >
        {navLinksParams.portfolio[key].label}
        <ContentItemsCount path={navLinksParams.portfolio[key].dataPath} />
      </NavLink>
    )
  })

  // Routes object
  const routes = Object.keys(routesParams.portfolio.children).map(key => {
    return (
      <Route
        key={key}
        path={routesParams.portfolio.children[key].path}
        component={routesParams.portfolio.children[key].component}
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
