import React, { useState, useEffect } from "react";
import { IconSmallPlus } from "../common/IconSmallPlus";
import { NavLink } from "react-router-dom";

// Handle navLinks and socialMedia parameters
const navLinksParams = {
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

const socialMediaParams = {
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

  // Handle assignment of highlighted style for navLinksParams dependent on current path
  Object.keys(navLinksParams).forEach(key => {
    `/${key}` === location.pathname
      ? Object.assign(navLinksParams[key], { "className": "navlink-current" })
      : Object.assign(navLinksParams[key], { "className": "navlink" })
  });

  // NavLinks object
  const navLinks = Object.keys(navLinksParams).map(key => {
    return (
      <NavLink
        key={key}
        className={navLinksParams[key].className}
        to={`/${key}`}
        onClick={handleViewReset}
      >
        {navLinksParams[key].label}
      </NavLink>
    )
  })

  // Social media link/icons object
  const socialMedia = Object.keys(socialMediaParams).map(key => {
    return (
      <a
        key={key}
        onClick={() => {
          window.open(`${socialMediaParams[key].url}`, "_blank");
        }}
      >
        <IconSmallPlus
          src={socialMediaParams[key].image.path}
          alt={socialMediaParams[key].image.alt}
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
        {socialMedia}
      </div>
    </div>
  );
};
