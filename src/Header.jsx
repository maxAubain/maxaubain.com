import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
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
      <NavLink class="navlink" to="Lab2">
        Curriculum Vitae
      </NavLink>
      <NavLink class="navlink" to="/">
        Travel
      </NavLink>
    </div>
  );
};

export default Header;
