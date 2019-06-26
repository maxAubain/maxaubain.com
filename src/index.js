import React from "react"
import ReactDOM from "react-dom"
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import Projects from "./Projects"
import About from "./About"

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/tailwind.css'

const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Projects}></Route>
                        {/* <Route exact path='/about' component={About}></Route> */}
                        {/* <Route exact path='/projects' component={Projects}></Route> */}
                    </Switch>
                </div>
                <Footer />
            </div >
        </div >
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById("app"))