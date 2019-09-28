import React, { useState } from "react";

import { Skills } from "./Skills";

export const CurriculumVitae = () => {
  const components = ["Skills", "Recommendations", "Education", "Publications"]
  const [currentComponent, setCurrentComponent] = useState(components[0]);
  const [componentHidden, setComponentHidden] = useState({
    skills: false,
    recommendations: true,
    education: true,
    publications: true
  });

  let component;
  switch (currentComponent) {
    case "Skills":
      component = <Skills />;
      break;
    case "Recommendations":
      component = (
        <p>
          For the original posts of the recommendations, please visit my &nbsp;
          <a href="https://www.linkedin.com/in/maxaubain/">Linkedin profile</a>.
        </p>
      );
      break;
    case "Education":
      component = (
        <p>
          For more information about education, please visit my &nbsp;
          <a href="https://www.linkedin.com/in/maxaubain/">Linkedin profile</a>.
        </p>
      );
      break;
    case "Publications":
      component = (
        <p>
          For more information about publications, please visit my &nbsp;
          <a href="https://www.linkedin.com/in/maxaubain/">Linkedin profile</a>.
        </p>
      );
      break;
  }

  const componentsSelectors = components.map(component => {
    
    return (
      <div className="section-title"
        onClick={() => {
        setCurrentComponent(component)
      }}>{component}</div>
    );
  })

  return (
    <>
      <div>
        {componentsSelectors}
      </div>
      {component}
    </>
  );
};
