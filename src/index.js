import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import DeveloperProjects from "./DeveloperProjects"
import Lab2 from "./Lab2"

import './css/tailwind.css'

// App component returns Header and Footer components, and uses React Router to switch 
// between components that populate the body of the website.
const App = () => {
  return (
    <div className="page-content">
      <Header />
      <div className="content-wrapper">
        <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/DeveloperProjects' component={DeveloperProjects}></Route>
          <Route exact path='/Lab2' component={Lab2}></Route>
        </Switch>
      </div>
      <Footer />
    </div >
  )
};

// Renders the App component in the virtual ReactDOM
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("app"))