import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Profile from "./Profile";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import DeveloperProjects from "./components/DeveloperProjects";
import CurriculumVitae from "./components/CurriculumVitae";
import TravelBlog from "./components/TravelBlog";

import "./css/global.css";
import "./css/profile.css";
import "./css/developer-projects.css";
import WebFont from "webfontloader";

/* App component returns Header and Footer components, and uses React
Router to switch between components that populate the body of the website. */
const App = () => {
  return (
    <>
      <NavBar />
      <div className="page-content">
        <Switch>
          <Route exact path="/" component={Profile}></Route>
          <Route
            exact
            path="/WebDevelopment"
            component={DeveloperProjects}
          ></Route>
          <Route
            exact
            path="/CurriculumVitae"
            component={CurriculumVitae}
          ></Route>
          <Route exact path="/TravelBlog" component={TravelBlog}></Route>
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

// Renders the App component in the virtual ReactDOM
ReactDOM.render(
  /* forceRefresh={true} is a quick fix so that when a NavLink is 
  used, the page view starts at the top so all content is visible. */
  <BrowserRouter forceRefresh={true}>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
