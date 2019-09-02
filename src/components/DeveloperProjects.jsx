import React from "react";

import Projects from "./Projects";

/* DeveloperProjects returns instances of the Projects component which contain types of projects,
where the return for each project is formatted by the Project component. There are four projects 
categories: Full Stack, Front End, Mobile, and Exercises.  */
const DeveloperProjects = () => {
  return (
    <>
      <div class="section-title">Full Stack Applications</div>
      <Projects path={"./src/data/projectsFullStack.json"} />

      <div className="section-title">Front End Applications</div>
      <Projects path={"./src/data/projectsFrontEnd.json"} />

      <div class="section-title">Mobile Applications</div>
      <Projects path={"./src/data/projectsMobile.json"} />

      <div class="section-title">Coding Exercises</div>
      <Projects path={"./src/data/projectsExercises.json"} />
    </>
  );
};

export default DeveloperProjects;
