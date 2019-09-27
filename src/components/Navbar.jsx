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
  const [navBarClass, setNavBarClass] = useState("navbar");

  const handleNavBarShadow = event => {
    document.documentElement.scrollTop > 10
      ? setNavBarClass("navbar floating-navbar")
      : setNavBarClass("navbar");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavBarShadow);
  });

  // Handle Navlink style classes
  // navLinkClasses are not stored in State to avoid an infinite loop on render
  Object.keys(navLinkClasses).forEach(key => {
    if (`/${key}` === location.pathname) {
      Object.assign(navLinkClasses, { [key]: "navlink current" });
    } else {
      Object.assign(navLinkClasses, { [key]: "navlink" });
    }
  });

  const handleViewReset = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });

  return (
    <div id="navbar" className={navBarClass}>
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
  );
};
