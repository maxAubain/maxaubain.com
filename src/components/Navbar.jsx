import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

let navLinkClasses = {
  profile: "",
  webDevelopment: "",
  curriculumVitae: "",
  skills: ""
};

export const NavBar = () => {
  // Handle navbar shadow
  const [navBarContainerClass, setNavBarContainerClass] = useState("navbar-container");

  const handleNavBarShadow = event => {
    document.documentElement.scrollTop > 10
      ? setNavBarContainerClass("navbar-container floating-navbar")
      : setNavBarContainerClass("navbar-container");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavBarShadow);
  });

  // Handle Navlink style classes
  // navLinkClasses are not stored in State to avoid an infinite loop on render
  Object.keys(navLinkClasses).forEach(key => {
    `/${key}` === location.pathname
      ? Object.assign(navLinkClasses, { [key]: "navlink navlink-current" })
      : Object.assign(navLinkClasses, { [key]: "navlink" });
  });

  const handleViewReset = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });

  return (
    <div className={navBarContainerClass}>
      <div id="navbar" className="navbar">
        <NavLink
          className={navLinkClasses.profile}
          to="/profile"
          onClick={handleViewReset}
        >
          Profile
        </NavLink>
        <NavLink
          className={navLinkClasses.webDevelopment}
          to="webDevelopment"
          onClick={handleViewReset}
        >
          Web Development
        </NavLink>
        <NavLink
          className={navLinkClasses.curriculumVitae}
          to="curriculumVitae"
          onClick={handleViewReset}
        >
          Curriculum Vitae
        </NavLink>
      </div>
    </div>
  );
};
