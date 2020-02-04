import React, { useState, useEffect } from "react";
import axios from "axios";
import { Project } from "./Project";
import { ProjectCard } from "./ProjectCard";

export const Content = ({ contentCat, path, externalLinks }) => {

  // If content has not been set, get content items from file
  const [content, setContent] = useState([]);
  useEffect(() => {
    if (content.length === 0) {
      axios.get(path).then(response => {
        setContent(response.data);
      });
    }
  });

  // Generate content items object dependent on content category
  const contentItems = content.map(project => {
    switch (contentCat) {
      case "Featured":
        return (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      case "Applications":
        return (
          <div key={project.id}>
            <Project project={project} externalLinks={externalLinks} />
          </div>
        );
      case "Coding Exercises":
        return (
          <div key={project.id}>
            <Project project={project} externalLinks={externalLinks} />
          </div>
        );
    }
  });

  // If content has been set, return content items
  if (content.length > 0) {
    return <>{contentItems}</>;
  } else {
    return <></>;
  }
};
