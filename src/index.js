import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import { About } from "./components/About";
import { DeveloperProjects } from "./components/DeveloperProjects";
import { EmailForm } from "./components/EmailForm";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import { Resume } from "./components/Resume";

import "./css/developerProjects.css";
import "./css/education.css";
import "./css/global.css";
import "./css/profile.css";
import "./css/resume.css";
import "./css/socialMedia.css"


import WebFont from "webfontloader";

const App = () => {
  return (
    <Route
      render={({}) => (
        <>
          <NavBar />
          <div className="page-content">
            <Switch>
              <Redirect exact from="/" to="/about" />
              <Route path="/about" component={About} />
              <Route path="/webDevelopment" component={DeveloperProjects} />
              <Route path="/resume" component={Resume} />
              <Route path="/emailForm" component={EmailForm} />
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
