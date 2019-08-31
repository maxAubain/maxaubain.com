import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  /*   let currentLocation = window.location.pathname;
  console.log("current location", currentLocation) */
  return (
    <div class="navbar">
      <NavLink class="navlink" to="/">
        Profile
      </NavLink>
      <NavLink class="navlink" to="DeveloperProjects">
        Web Development
      </NavLink>
      <NavLink class="navlink" to="CurriculumVitae">
        Curriculum Vitae
      </NavLink>
      <NavLink class="navlink" to="TravelBlog">
        Travel Blog
      </NavLink>
    </div>
  );
};

export default NavBar;
