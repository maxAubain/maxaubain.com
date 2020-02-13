import React from 'react'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import { ContentItemsCount } from './ContentItemsCount'
import { Featured } from './Featured'
import { Blog } from './Blog'
import { Apps } from './Apps'
import { Exercises } from './Exercises'

const navLinksParams = {
  featured: {
    label: 'Featured',
    path: '/portfolio/featured',
    dataPath: '../../src/data/projectsFeatured.json',
  },
  blog: {
    label: 'Blog',
    path: '/portfolio/blog',
    dataPath: '../../src/data/postsBlog.json',
  },
  apps: {
    label: 'Apps',
    path: '/portfolio/apps',
    dataPath: '../../src/data/projectsApplications.json',
  },
  exercises: {
    label: 'Exercises',
    path: '/portfolio/exercises',
    dataPath: '../../src/data/projectsExercises.json',
  },
}

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
  const navLinks = Object.keys(navLinksParams).map(key => {
    return (
      <NavLink
        key={key}
        className="navlink-section"
        activeClassName="navlink-section-current"
        to={navLinksParams[key].path}
      >
        {navLinksParams[key].label}
        <ContentItemsCount path={navLinksParams[key].dataPath} />
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
