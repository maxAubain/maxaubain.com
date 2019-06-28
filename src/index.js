import React from "react"
import ReactDOM from "react-dom"
{/* import Home from "./Home" */}
import Header from "./Header"
import Footer from "./Footer"
import TileArray from "./TileArray"
{/* import About from "./About" */}
import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import Lab3 from "./Lab3"
import Lab4 from "./Lab4"

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/tailwind.css'

const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content" style={{ minHeight: '100vh', backgroundColor: '#f1f5f8'}}>
                <Header />
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={TileArray} ></Route>
                        <Route exact path='/Lab1' component={Lab1}></Route> 
                        <Route exact path='/Lab2' component={Lab2}></Route> 
                        <Route exact path='/Lab3' component={Lab3}></Route> 
                        <Route exact path='/Lab4' component={Lab4}></Route> 
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