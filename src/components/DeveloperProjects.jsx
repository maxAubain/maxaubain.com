import React from "react";

import Projects from "./Projects";

const projectsCategoriesReference = [
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
  const projCatRef = projectsCategoriesReference.map(category => {
    return (
      <>
        <div key={category.title} className="section-title">
          {category.title}
        </div>
        <Projects path={category.path} />
      </>
    );
  });

  return <>{projCatRef}</>;
};
