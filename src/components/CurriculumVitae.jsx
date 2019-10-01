import React, { useState } from "react";

import { Skills } from "./Skills";
import { WebLink } from "./common/WebLink";

import "../css/curriculumVitae.css";

export const CurriculumVitae = () => {
  const components = ["Skills", "Recommendations", "Education", "Publications"];
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
    case "Skills":
      component = <Skills />;
      break;
    case "Recommendations":
      component = (
        <p>
          For the original posts of the recommendations, please visit my&nbsp;
          <WebLink
            url="https://www.linkedin.com/in/maxaubain/"
            linkText="Linkedin Profile"
            className="weblink"
          />
          .
        </p>
      );
      break;
    case "Education":
      component = (
        <p>
          For more information about education, please visit my&nbsp;
          <WebLink
            url="https://www.linkedin.com/in/maxaubain/"
            linkText="Linkedin Profile"
            className="weblink"
          />
          .
        </p>
      );
      break;
    case "Publications":
      component = (
        <p>
          For more information about publications, please visit my&nbsp;
          <WebLink
            url="https://www.linkedin.com/in/maxaubain/"
            linkText="Linkedin Profile"
            className="weblink"
          />
          .
        </p>
      );
      break;
  }

  return (
    <>
      <div className="navlink-section-container">{componentsSelectors}</div>
      <div className="cv-component-container">{component}</div>
    </>
  );
};
