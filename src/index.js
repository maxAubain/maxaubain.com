import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import { CurriculumVitae } from "./components/CurriculumVitae";
import { DeveloperProjects } from "./components/DeveloperProjects";
import { EmailForm } from "./components/EmailForm";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Resume } from "./components/Resume";

import "./css/global.css";
import "./css/socialMedia.css"
import "./css/curriculumVitae.css";
import "./css/resume.css";
import "./css/developerProjects.css";

import WebFont from "webfontloader";

const App = () => {
  return (
    <Route
      render={({}) => (
        <>
          <NavBar />
          <div className="page-content">
            <Switch>
              <Redirect exact from="/" to="/profile" />
              <Route path="/profile" component={Profile} />
              <Route path="/webDevelopment" component={DeveloperProjects} />
              <Route path="/curriculumVitae" component={CurriculumVitae} />
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
