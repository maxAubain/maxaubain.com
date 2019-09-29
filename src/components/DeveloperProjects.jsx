import React, { useState } from "react";

import { Projects } from "./Projects";
import { ProjectsCount } from "./ProjectsCount";

import "../css/developerProjects.css";

export const DeveloperProjects = () => {
  const projectCategories = {
    "Full Stack": "./src/data/projectsFullStack.json"/* ,
    "Front End": "./src/data/projectsFrontEnd.json",
    "Mobile": "./src/data/projectsMobile.json",
    "Coding Exercises": "./src/data/projectsExercises.json" */
  };
  const [currentProjectCategory, setCurrentProjectCategory] = useState(
    "Full Stack"
  );

  let navlinkSectionClassName;
  const projectCategoriesSelectors = Object.keys(projectCategories).map(key => {
    key === currentProjectCategory
      ? (navlinkSectionClassName = "navlink-section-current")
      : (navlinkSectionClassName = "navlink-section");

    return (
      <div
        key={key}
        className={navlinkSectionClassName}
        onClick={() => {
          setCurrentProjectCategory(key);
        }}
      >
        {key}
        <ProjectsCount path={projectCategories[key]} />
      </div>
    );
  });

  const projects = Object.keys(projectCategories).map(key => {
    if (key === currentProjectCategory) {
      return (
        <Projects key={key} path={projectCategories[currentProjectCategory]} />
      );
    }
  });

  return (
    <>
      <div className="navlink-section-container">
        {projectCategoriesSelectors}
      </div>
      <div className="project-categories-wrapper">{projects}</div>
    </>
  );
};
