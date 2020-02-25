import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/Navbar/Navbar"
import { About } from "./components/about/About"
import { Portfolio } from "./components/portfolio/Portfolio"
/* import { Resume } from "./components/resume/Resume" */
import { EmailForm } from "./components/contact/EmailForm"
import "./css/blog-post"
import "./css/blog-post-preview"
import "./css/common"
import "./css/education"
import "./css/global"
import "./css/portfolio"
import "./css/project-card"
import "./css/profile"
import "./css/resume"
import "./css/social-media"
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
