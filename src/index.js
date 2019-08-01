import React from "react"
import ReactDOM from "react-dom"
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import TileArray from "./TileArray"
{/* import About from "./About" */ }
import Lab2 from "./Lab2"

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/tailwind.css'

const App = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content" style={{ minHeight: '100vh' }}>
        <Header />
        <div className="content-wrapper">
          <Switch>
            <Route exact path='/' component={Home} ></Route>
            <Route exact path='/TileArray' component={TileArray}></Route>
            <Route exact path='/Lab2' component={Lab2}></Route>
          </Switch>
        </div>
        <Footer />
      </div >
    </div >
  )
};

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("app"))