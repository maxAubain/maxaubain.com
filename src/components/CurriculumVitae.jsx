import React, { useState } from "react";

import { Resume } from "./Resume";
import { Recommendations } from "./Recommendations"
import { WebLink } from "./common/WebLink";

import "../css/curriculumVitae.css";

export const CurriculumVitae = () => {
  const components = [
    "Recommendations",
    "Education",
    "Publications",
    "Resume"
  ];
  const [currentComponent, setCurrentComponent] = useState(components[0]);

  let navlinkSectionClassName;
  const componentsSelectors = components.map(component => {
    component === currentComponent
      ? (navlinkSectionClassName = "navlink-section-current")
      : (navlinkSectionClassName = "navlink-section");

    return (
      <div
        key={component}
        className={navlinkSectionClassName}
        onClick={() => {
          setCurrentComponent(component);
        }}
      >
        {component}
      </div>
    );
  });

  let component;
  switch (currentComponent) {
    case "Recommendations":
      component = <Recommendations />;
      break;
    case "Education":
      component = <p>Education here.</p>;
      break;
    case "Publications":
      component = <p>Publications here.</p>;
      break;
    case "Resume":
      component = <Resume />;
      break;
  }

  return (
    <>
      <div className="navlink-section-container">
        {componentsSelectors}
        <div className="navlink-section">
          <WebLink
            url="https://www.linkedin.com/in/maxaubain/"
            linkText="Linkedin Profile"
            className="weblink"
          />
        </div>
      </div>
      <div className="cv-component-container">{component}</div>
    </>
  );
};
