import React from "react";

import Projects from "./Projects";

const projectsCategories = [
  {
    title: "Full Stack Applications",
    path: "./src/data/projectsFullStack.json"
  },
  {
    title: "Front End Applications",
    path: "./src/data/projectsFrontEnd.json"
  },
  {
    title: "Mobile Applications",
    path: "./src/data/projectsMobile.json"
  },
  {
    title: "Coding Exercises",
    path: "./src/data/projectsExercises.json"
  }
];

export const DeveloperProjects = () => {
  const projsCats = projectsCategories.map(projectsCategory => {
    return (
      <>
        <div key={projectsCategory.title} className="section-title">
          {projectsCategory.title}
        </div>
        <Projects path={projectsCategory.path} />
      </>
    );
  });

  return <>{projsCats}</>;
};
