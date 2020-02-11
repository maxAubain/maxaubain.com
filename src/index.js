import { BrowserRouter, Route, Redirect } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./components/layouts/Footer";
import { NavBar } from "./components/layouts/Navbar";
import { routesParams } from "./router/routes.js";

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
        {routes}
      </div>
      <Footer />

      <Redirect from="/" to="/about" />
      <Redirect from="/about" to="/about/profile" />
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
