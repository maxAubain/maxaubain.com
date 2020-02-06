import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import { About } from "./components/about/About";
import { Portfolio } from "./components/portfolio/Portfolio";
import { EmailForm } from "./components/contact/EmailForm";
import { Footer } from "./components/layouts/Footer";
import { NavBar } from "./components/layouts/Navbar";
import { Resume } from "./components/resume/Resume";

import "./css/blog-post-preview.css"
import "./css/common.css";
import "./css/education.css";
import "./css/global.css";
import "./css/portfolio.css";
import "./css/project-card.css";
import "./css/profile.css";
import "./css/resume.css";
import "./css/social-media.css";

import WebFont from "webfontloader";

// Handles routes parameters
const routesParams = {
  "about": {
    "path": "/about",
    "component": About
  },
  "portfolio": {
    "path": "/portfolio",
    "component": Portfolio
  },
  "resume": {
    "path": "/resume",
    "component": Resume
  },
  "contact": {
    "path": "/contact",
    "component": EmailForm
  },
}

const App = () => {
  // Routes object to render children components
  const routes = Object.keys(routesParams).map(key => {
    return (
      <Route key={key} path={routesParams[key].path} component={routesParams[key].component} />
    )
  })

  return (
    // Establish initial route to condigure location.pathname
    <Route
      render={({ }) => (
        <>
          <NavBar />
          <div className="page-content">
            <Switch>
              <Redirect exact from="/" to="/about" />
              {routes}
            </Switch>
          </div>
          <Footer />
        </>
      )}
    />
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
