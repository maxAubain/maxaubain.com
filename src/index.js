import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom"
import { Footer } from "./app/Footer"
import { NavBar } from "./app/Navbar/Navbar"
import { About } from "./app/about/About"
import { Portfolio } from "./app/portfolio/Portfolio"
import { EmailForm } from "./app/contact/EmailForm"
import "./global/css/blog-post"
import "./global/css/blog-post-preview"
import "./global/css/common"
import "./global/css/education"
import "./global/css/global"
import "./global/css/portfolio"
import "./global/css/project-card"
import "./global/css/profile"
import "./global/css/resume"
import "./global/css/social-media"
import WebFont from "webfontloader"

const routesParams = {
  "about": {
    "path": "/about",
    "component": About,
  },
  "portfolio": {
    "path": "/portfolio",
    "component": Portfolio,
  },
  /* "resume": {
    "path": "/resume",
    "component": Resume
  }, */
  "contact": {
    "path": "/contact",
    "component": EmailForm
  }
}

const App = () => {
  // Routes object
  const routes = Object.keys(routesParams).map(key => {
    return (
      <Route key={key} path={routesParams[key].path} component={routesParams[key].component} />
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
  );
};

// Installs custom google font
WebFont.load({
  google: {
    families: ["Muli"]
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
