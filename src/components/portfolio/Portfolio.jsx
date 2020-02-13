import React from 'react'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import { ContentItemsCount } from './ContentItemsCount'
import { navLinksParams } from '../../router/links'
import { Featured } from './Featured'
import { Blog } from './Blog'
import { Apps } from './Apps'
import { Exercises } from './Exercises'

const routesParams = {
  'portfolio/featured': {
    path: '/portfolio/featured',
    component: Featured,
  },
  'portfolio/blog': {
    path: '/portfolio/blog',
    component: Blog,
  },
  'portfolio/apps': {
    path: '/portfolio/apps',
    component: Apps,
  },
  'portfolio/exercises': {
    path: '/portfolio/exercises',
    component: Exercises,
  },
}

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
  const routes = Object.keys(routesParams).map(key => {
    return (
      <Route
        key={key}
        path={routesParams[key].path}
        component={routesParams[key].component}
      />
    )
  })

  return (
    <>
      <div className="navlink-section-container">{navLinks}</div>
      <Switch>
        {routes}
        <Redirect from="/portfolio" to="/portfolio/featured" />
      </Switch>
    </>
  )
}
