import React, { useState } from "react";

import { Education } from "./Education"
import { Profile } from "./Profile"
import { Recommendations } from "./Recommendations";

export const About = () => {
  const components = ["Profile", "Recommendations", "Education"];
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
    case "Profile":
      component = <Profile />;
      break;
    case "Recommendations":
      component = <Recommendations />;
      break;
    case "Education":
      component = <Education />
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
