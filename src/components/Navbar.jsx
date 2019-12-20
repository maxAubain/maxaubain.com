import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { IconSmall } from "./common/IconSmall";

let navLinkClasses = {
  profile: "",
  webDevelopment: "",
  curriculumVitae: "",
  resume: ""
};

export const NavBar = () => {
  // Handle navbar shadow
  const [navBarContainerClass, setNavBarContainerClass] = useState(
    "navbar-container"
  );
  const handleNavBarShadow = event => {
    document.documentElement.scrollTop > 10
      ? setNavBarContainerClass("navbar-container floating-navbar")
      : setNavBarContainerClass("navbar-container");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavBarShadow);
  });

  // Handle view reset on navlink click
  const handleViewReset = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });

  // Handle Navlink style classes
  // navLinkClasses are not stored in State to avoid an infinite loop on render
  Object.keys(navLinkClasses).forEach(key => {
    `/${key}` === location.pathname
      ? Object.assign(navLinkClasses, { [key]: "navlink-current" })
      : Object.assign(navLinkClasses, { [key]: "navlink" });
  });

  return (
    <div className={navBarContainerClass}>
      <div className="navbar-navlinks">
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
        <NavLink
          className={navLinkClasses.resume}
          to="resume"
          onClick={handleViewReset}
        >
          Resume
        </NavLink>
      </div>
      <div className="navbar-social">
        <NavLink
          /* className={navLinkClasses.curriculumVitae} */
          to="emailForm"
          onClick={handleViewReset}
        >
          <IconSmall src="./src/img/icon/email3.png" alt="email icon"/>
        </NavLink>
        <a
          onClick={() => {
            window.open("https://github.com/maxAubain", "_blank");
          }}
        >
          <IconSmall src="./src/img/icon/github3.png" alt="github icon" />
        </a>
        <a
          onClick={() => {
            window.open("https://www.linkedin.com/in/maxaubain/", "_blank");
          }}
        >
          <IconSmall src="./src/img/icon/linkedin2.png" alt="linkedin icon" />
        </a>
      </div>
    </div>
  );
};
