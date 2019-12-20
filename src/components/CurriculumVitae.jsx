import React, { useState } from "react";

import { Resume } from "./Resume";
import { Recommendations } from "./Recommendations";
import { Education } from "./Education"

export const CurriculumVitae = () => {
  const components = ["Recommendations", "Education", "Resume"];
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
      component = <Education />
      break;
    case "Resume":
      component = <Resume />;
      break;
  }

  return (
    <>
      <div className="navlink-section-container">
        {componentsSelectors}
      </div>
      {component}
    </>
  );
};
