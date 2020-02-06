import React from "react";
import { NavLink } from "react-router-dom";
import { navLinksParams } from "../../router/navLinks"

export const About = () => {
  // NavLinks object with current NavLink highlighting style
  const navLinks = Object.keys(navLinksParams.about).map(key => {
    return (
      <NavLink
        key={key}
        className="navlink-section"
        activeClassName="navlink-section-current"
        to={navLinksParams.about[key].path}
      >
        {navLinksParams.about[key].label}
      </NavLink>
    )
  })

  return (
    <>
      <div className="navlink-section-container">
        {navLinks}
      </div>
    </>
  )
};
