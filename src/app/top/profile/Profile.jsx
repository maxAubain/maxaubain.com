import React from 'react'
import {
  NavLink,
  Route,
  Redirect,
  Switch,
  useRouteMatch,
} from 'react-router-dom'
import { AboutMe } from './aboutMe/AboutMe'
import { Education } from './education/Education'
import { Recommendations } from './recommendations/Recommendations'
import './style/profile'

const routerParams = {
  profile: {
    label: 'About Me',
    relPath: '/aboutme',
    component: AboutMe,
  },
  recommendations: {
    label: 'Recommendations',
    relPath: '/recommendations',
    component: Recommendations,
  },
  education: {
    label: 'Education',
    relPath: '/education',
    component: Education,
  },
}

export const Profile = () => {
  let { url, path } = useRouteMatch()

  // NavLinks object with NavLink highlighting style
  const navLinks = Object.keys(routerParams).map(key => {
    return (
      <NavLink
        key={key}
        className="navlink-section"
        activeClassName="navlink-section-current"
        to={`${url}${routerParams[key].relPath}`}
      >
        {routerParams[key].label}
      </NavLink>
    )
  })

  // Routes object
  /* const routes = Object.keys(routerParams).map(key => {
    return (
      <Route
        key={key}
        path={`${path}${routerParams[key].relPath}`}
        component={routerParams[key].component}
      />
    )
  }) */

  return (
    <div className="profile__container">
      content
      {/* <div className="navlink-section-container">{navLinks}</div> */}
      {/* <Switch>
        {routes}
        <Redirect from="/profile" to="/profile/aboutme" />
      </Switch> */}
    </div>
  )
}
