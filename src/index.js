import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Profile from "./Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DeveloperProjects from "./components/DeveloperProjects";
import CurriculumVitae from "./components/CurriculumVitae";
import TravelBlog from "./components/TravelBlog";

import "./css/tailwind.css";
import WebFont from "webfontloader";

// App component returns Header and Footer components, and uses React Router to switch
// between components that populate the body of the website.
const App = () => {
  return (
    <div className="page-content">
      <Header />
      <div className="content-wrapper">
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
    </div>
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
