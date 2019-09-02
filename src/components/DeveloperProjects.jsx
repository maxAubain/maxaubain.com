import React from "react";

import Projects from "./Projects";

/* DeveloperProjects returns instances of the Projects component which contain my projects,
where the return for each project is formatted by the Project component. */
const DeveloperProjects = () => {
  /* Generates references to project information files */
  const fullStackPath = "./src/data/projectsFullStack.json";
  const frontEndPath = "./src/data/projectsFrontEnd.json";
  /*   const backEndPath = "./src/data/projectsBackEnd.json"; */
  const exercisesPath = "./src/data/projectsExercises.json";

  return (
    <>
      <div class="section-title">Full Stack</div>
      <Projects path={fullStackPath} />

      <div className="section-title">Front End Applications</div>
      <Projects path={frontEndPath} />

      {/*        <div class="section-title">Back End</div>
       <Projects path={backEndPath} /> */}

      <div class="section-title">Coding Exercises</div>
      <Projects path={exercisesPath} />
    </>
  );
};

export default DeveloperProjects;
