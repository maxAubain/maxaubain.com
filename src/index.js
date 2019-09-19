import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Profile from "./components/Profile";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import DeveloperProjects from "./components/DeveloperProjects";
import CurriculumVitae from "./components/CurriculumVitae";
import TravelBlog from "./components/TravelBlog";

import "./css/global.css";
import "./css/profile.css";
import "./css/developer-projects.css";
import WebFont from "webfontloader";

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
          {/* <Route exact path="/TravelBlog" component={TravelBlog}></Route> */}
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
