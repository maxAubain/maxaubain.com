import React, { useState, useEffect } from "react";
import { IconSmallPlus } from "../common/IconSmallPlus";
import { NavLink } from "react-router-dom";
import { navLinksParams } from "../../router/navLinks.js"

// Handle socialMediaIcons parameters
const socialMediaIconsParams = {
  "github": {
    "url": "https://github.com/maxAubain",
    "image": {
      "path": "./src/img/icon/github.png",
      "alt": "github-icon"
    }
  },
  "linkedin": {
    "url": "https://www.linkedin.com/in/maxaubain/",
    "image": {
      "path": "./src/img/icon/linkedin.png",
      "alt": "linkedin-icon"
    }
  }
}

export const NavBar = () => {
  // Handle navbar shadow on scroll
  const [navBarContCN, setNavBarContCN] = useState(
    "navbar-container"
  );

  const handleNavBarShadow = event => {
    document.documentElement.scrollTop > 10
      ? setNavBarContCN("navbar-container floating-navbar")
      : setNavBarContCN("navbar-container");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavBarShadow);
  });

  // Handle view reset on navlink click
  const handleViewReset = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  }

  // NavLinks object with current NavLink highlighting style
  const navLinks = Object.keys(navLinksParams.navBar).map(key => {
    location.pathname.toString().includes(`/${key}`)
      ? Object.assign(navLinksParams.navBar[key], { "className": "navlink-current" })
      : Object.assign(navLinksParams.navBar[key], { "className": "navlink" })

    return (
      <NavLink
        key={key}
        className={navLinksParams.navBar[key].className}
        to={navLinksParams.navBar[key].path}
        onClick={handleViewReset}
      >
        {navLinksParams.navBar[key].label}
      </NavLink>
    )
  })

  // Social media link/icons object
  const socialMediaIcons = Object.keys(socialMediaIconsParams).map(key => {
    return (
      <a
        key={key}
        onClick={() => {
          window.open(`${socialMediaIconsParams[key].url}`, "_blank");
        }}
      >
        <IconSmallPlus
          src={socialMediaIconsParams[key].image.path}
          alt={socialMediaIconsParams[key].image.alt}
        />
      </a>
    )
  })

  return (
    <div className={navBarContCN}>
      <div className="navbar-navlinks">
        {navLinks}
      </div>
      <div className="navbar-social">
        {socialMediaIcons}
      </div>
    </div>
  );
};
