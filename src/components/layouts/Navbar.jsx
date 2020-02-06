import React, { useState, useEffect } from "react";
import { IconSmallPlus } from "../common/IconSmallPlus";
import { NavLink } from "react-router-dom";

// Handle navLinks and socialMedia parameters
const navLinks = {
  "about": {
    "label": "About",
    "className": ""
  },
  "portfolio": {
    "label": "Portfolio",
    "className": ""
  },
  "resume": {
    "label": "Resume",
    "className": ""
  },
  "contact": {
    "label": "Contact",
    "className": ""
  }
}

const socialMedia = {
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

  // Handle assignment of highlighted style for navLinks dependent on current path
  Object.keys(navLinks).forEach(key => {
    `/${key}` === location.pathname
      ? Object.assign(navLinks[key], { "className": "navlink-current" })
      : Object.assign(navLinks[key], { "className": "navlink" })
  });

  // Navbar NavLinks object
  const navLinksObj = Object.keys(navLinks).map(key => {
    return (
      <NavLink
        key={key}
        className={navLinks[key].className}
        to={`/${key}`}
        onClick={handleViewReset}
      >
        {navLinks[key].label}
      </NavLink>
    )
  })

  // Social media link/icons object
  const socialMediaObj = Object.keys(socialMedia).map(key => {
    return (
      <a
        onClick={() => {
          window.open(`${socialMedia[key].url}`, "_blank");
        }}
      >
        <IconSmallPlus
          src={socialMedia[key].image.path}
          alt={socialMedia[key].image.alt}
        />
      </a>
    )
  })

  return (
    <div className={navBarContCN}>
      <div className="navbar-navlinks">
        {navLinksObj}
      </div>
      <div className="navbar-social">
        {socialMediaObj}
      </div>
    </div>
  );
};
