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
import { Applications } from './applications/Applications'
import featuredContentData from '../../global/data/featured-content'
import blogPostsData from '../../global/data/blogPosts/blog-posts-list'
import applicationsData from '../../global/data/applications'
import './style/portfolio'

const routerParams = {
  featured: {
    label: 'Featured',
    relPath: '/featured',
    component: Featured,
    data: featuredContentData,
  },
  blog: {
    label: 'Blog',
    relPath: '/blog',
    component: Blog,
    data: blogPostsData,
  },
  apps: {
    label: 'Apps',
    relPath: '/apps',
    component: Applications,
    data: applicationsData,
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
        <ContentItemsCount data={routerParams[key].data} />
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
