import React, { useState, useEffect } from "react";

import { IconSmallPlus } from "./common/IconSmallPlus";
import { NavLink } from "react-router-dom";

let navLinkClasses = {
  about: "",
  webDevelopment: "",
  resume: "",
  contact:""
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
          className={navLinkClasses.about}
          to="/about"
          onClick={handleViewReset}
        >
          About
        </NavLink>
        <NavLink
          className={navLinkClasses.webDevelopment}
          to="webDevelopment"
          onClick={handleViewReset}
        >
          Web Development
        </NavLink>
        <NavLink
          className={navLinkClasses.resume}
          to="resume"
          onClick={handleViewReset}
        >
          Resume
        </NavLink>
        <NavLink
          className={navLinkClasses.contact}
          to="contact"
          onClick={handleViewReset}
        >
          Contact
        </NavLink>
      </div>
      <div className="navbar-social">
        <a
          onClick={() => {
            window.open("https://github.com/maxAubain", "_blank");
          }}
        >
          <IconSmallPlus src="./src/img/icon/github4.png" alt="github icon" />
        </a>
        <a
          onClick={() => {
            window.open("https://www.linkedin.com/in/maxaubain/", "_blank");
          }}
        >
          <IconSmallPlus src="./src/img/icon/linkedin3.png" alt="linkedin icon" />
        </a>
      </div>
    </div>
  );
};
