import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Footer } from './footer/Footer'
import { NavBar } from './navbar/Navbar'
import { Profile } from './profile/Profile'
import { Portfolio } from './portfolio/Portfolio'
import { EmailForm } from './contact/EmailForm'
import { Splash } from './splash/Splash'
import './style/top'

const routesParams = {
  profile: {
    path: '/profile',
    component: Profile,
  },
  portfolio: {
    path: '/portfolio',
    component: Portfolio,
  },
  contact: {
    path: '/contact',
    component: EmailForm,
  },
}

export const Top = () => {
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
      <Splash />
      <NavBar />
      <div className="top content">
        <Switch>
          {routes}
          <Redirect from="/" to="/profile" />
        </Switch>
      </div>
      <Footer />
    </>
  )
}
