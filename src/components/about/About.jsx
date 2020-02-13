import React from 'react'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import { navLinksParams } from '../../router/links'
import { Profile } from './Profile'
import { Education } from './Education'
import { Recommendations } from './Recommendations'

const routesParams = {
  'about/profile': {
    path: '/about/profile',
    component: Profile,
  },
  'about/recommendations': {
    path: '/about/recommendations',
    component: Recommendations,
  },
  'about/education': {
    path: '/about/education',
    component: Education,
  },
}

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
        <Redirect from="/about" to="/about/profile" />
      </Switch>
    </>
  )
}
