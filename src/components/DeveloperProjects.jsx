import React from "react";

import Projects from "./Projects";

// DeveloperProjects returns instances of the Projects component which contain projects
//I have worked on, where the return for each project is formatted by the Project component.
const DeveloperProjects = () => {
  /* Generates references to project information files */
  const fullStackPath = "./src/data/projectsFullStack.json";
  const frontEndPath = "./src/data/projectsFrontEnd.json";
  const backEndPath = "./src/data/projectsBackEnd.json";

  return (
    <div class="component">
      <div class="feature-title-outside">Full Stack</div>
      <Projects path={fullStackPath} />
      
      <div class="feature-title-outside">Front End</div>
      <Projects path={frontEndPath} />
      
      <div class="feature-title-outside">Back End</div>
      <Projects path={backEndPath} />
    </div>
  );
};

export default DeveloperProjects;
