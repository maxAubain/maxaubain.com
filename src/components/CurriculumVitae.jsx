import React, { useState } from "react";

import { Skills } from "./Skills";

export const CurriculumVitae = () => {
  const [currentComponent, setCurrentComponent] = useState("Skills");

  let component;
  switch (currentComponent) {
    case "Skills":
      component = <Skills />;
      break;
    case "Education":
      component = <p>Education</p>;
  }

  return (
    <>
      <p className="navlink" onClick={() => { setCurrentComponent("Skills") }}>Skills</p>
      <p className="navlink" onClick={() => { setCurrentComponent("Education") }}>Education</p>
      <p>Current Section: {currentComponent}</p>
      {component}
    </>
  );
};

/*      <p>
        Coming soon. For more information about education, work experience, and
        publications, please visit my{" "}
        <a href="https://www.linkedin.com/in/maxaubain/">Linkedin profile</a>.
      </p> */
