import React, { useEffect, useState } from 'react'
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
  const [topState, setTopState] = useState({
      atSplash: true,
      navbarTimeout: false,
    }),
    top = { state: topState, setState: setTopState }

  const routes = Object.keys(routesParams).map(key => {
    return (
      <Route
        key={key}
        path={routesParams[key].path}
        component={routesParams[key].component}
      />
    )
  })

  let appClassName, topClassName
  if (!top.state.atSplash) {
    appClassName = 'app--unhidden'
    topClassName = 'top--scroll-up'
  }

  return (
    <>
      <Splash top={top} />
      <div className={`top ${topClassName}`}>
        <NavBar />
        <div className="top__content">
          <Switch>
            {routes}
            <Redirect from="/" to="/profile" />
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  )
}
