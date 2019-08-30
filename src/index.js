import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Profile from "./Profile";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import DeveloperProjects from "./components/DeveloperProjects";
import CurriculumVitae from "./components/CurriculumVitae";
import TravelBlog from "./components/TravelBlog";

import "./css/global.css"
import "./css/web-development.css";
import WebFont from "webfontloader";

// App component returns Header and Footer components, and uses React Router to switch
// between components that populate the body of the website.
const App = () => {
  return (
    <>
      <NavBar />
      <div className="page-content">
        <Switch>
          <Route exact path="/" component={Profile}></Route>
          <Route
            exact
            path="/DeveloperProjects"
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
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
