import React from 'react'
import {
  NavLink,
  Route,
  Redirect,
  Switch,
  useRouteMatch,
} from 'react-router-dom'
import { ContentItemsCount } from './ContentItemsCount'
import { Featured } from './featured/Featured'
import { Blog } from './blog/Blog'
import { Apps } from './apps/Apps'

const routerParams = {
  featured: {
    label: 'Featured',
    relPath: '/featured',
    component: Featured,
    dataPath: '../../data/featured-content.json',
  },
  blog: {
    label: 'Blog',
    relPath: '/blog',
    component: Blog,
    dataPath: '../../data/blog-posts.json',
  },
  apps: {
    label: 'Apps',
    relPath: '/apps',
    component: Apps,
    dataPath: '../../data/applications.json',
  },
}

export const Portfolio = () => {
  let { path, url } = useRouteMatch()

  // Navlinks object
  const navLinks = Object.keys(routerParams).map(key => {
    return (
      <NavLink
        key={key}
        className="navlink-section"
        activeClassName="navlink-section-current"
        to={`${url}${routerParams[key].relPath}`}
      >
        {routerParams[key].label}
        <ContentItemsCount path={routerParams[key].dataPath} />
      </NavLink>
    )
  })

  // Routes object
  const routes = Object.keys(routerParams).map(key => {
    return (
      <Route
        key={key}
        path={`${path}${routerParams[key].relPath}`}
        component={routerParams[key].component}
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
