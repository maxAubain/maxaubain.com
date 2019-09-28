import React, { useState } from "react";

import { Projects } from "./Projects";
import { ProjectsCount } from "./ProjectsCount";
import { IconSmall } from "./imageComponents/IconSmall";

import "../css/developerProjects.css";

let src, alt, projectsContainerClassName, projectsCountClassName, icon;
export const DeveloperProjects = () => {
  const [
    projectCategoriesAttributes,
    setProjectCategoriesAttributes
  ] = useState({
    0: {
      title: "Full Stack Applications",
      path: "./src/data/projectsFullStack.json",
      hidden: false
    },
    1: {
      title: "Front End Applications",
      path: "./src/data/projectsFrontEnd.json",
      hidden: true
    },
    2: {
      title: "Mobile Applications",
      path: "./src/data/projectsMobile.json",
      hidden: true
    },
    3: {
      title: "Coding Exercises",
      path: "./src/data/projectsExercises.json",
      hidden: true
    }
  });

  const projectCategories = Object.keys(projectCategoriesAttributes).map(
    key => {
      if (projectCategoriesAttributes[key].hidden) {
        src = "./src/img/icon/plus.png";
        alt = "plus-icon";
        projectsContainerClassName = "hidden";
        projectsCountClassName = "section-title";
      } else {
        src = "./src/img/icon/minus.png";
        alt = "minus-icon";
        projectsContainerClassName = "";
        projectsCountClassName = "hidden";
      }

      icon = <IconSmall src={src} alt={alt} />;

      return (
        <div key={projectCategoriesAttributes[key].title}>
          <div
            className="section"
            onClick={() => {
              setProjectCategoriesAttributes({
                ...projectCategoriesAttributes,
                [key]: {
                  id: projectCategoriesAttributes[key].id,
                  title: projectCategoriesAttributes[key].title,
                  path: projectCategoriesAttributes[key].path,
                  hidden: !projectCategoriesAttributes[key].hidden
                }
              });
            }}
          >
            {icon}
            <div className="section-title">
              {projectCategoriesAttributes[key].title}{" "}
            </div>
            <div className={projectsCountClassName}>
              <ProjectsCount path={projectCategoriesAttributes[key].path} />
            </div>
          </div>
          <div className={projectsContainerClassName}>
            <Projects path={projectCategoriesAttributes[key].path} />
          </div>
        </div>
      );
    }
  );

  return <>{projectCategories}</>;
};
