import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom"
import { Footer } from "./components/layouts/Footer"
import { NavBar } from "./components/layouts/Navbar"
import { About } from "./components/about/About"
import { Portfolio } from "./components/portfolio/Portfolio"
import { Resume } from "./components/resume/Resume"
import { EmailForm } from "./components/contact/EmailForm"
import "./css/blog-post.css"
import "./css/blog-post-preview.css"
import "./css/common.css"
import "./css/education.css"
import "./css/global.css"
import "./css/portfolio.css"
import "./css/project-card.css"
import "./css/profile.css"
import "./css/resume.css"
import "./css/social-media.css"
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
  "resume": {
    "path": "/resume",
    "component": Resume
  },
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
