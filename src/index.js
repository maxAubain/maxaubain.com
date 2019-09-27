import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Profile } from "./components/Profile";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { DeveloperProjects } from "./components/DeveloperProjects";
import { CurriculumVitae } from "./components/CurriculumVitae";

import "./css/global.css";
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
