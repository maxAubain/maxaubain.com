import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { NavBar } from './navbar/Navbar'
import { About } from './about/About'
import { Portfolio } from './portfolio/Portfolio'
import { EmailForm } from './contact/EmailForm'

const routesParams = {
  about: {
    path: '/about',
    component: About,
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

export const App = () => {
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
      <NavBar />
      <div className="page-content">
        <Switch>
          {routes}
          <Redirect from="/" to="/about" />
        </Switch>
      </div>
      <Footer />
    </>
  )
}
