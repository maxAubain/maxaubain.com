import React from "react";

import { WebLink } from "./common/WebLink";

export const ProjectCard = ({ project }) => {
  // Project Card object
  const card = (
    <div className="featured-card">
      <div className="featured-title">{project.title}</div>
      <div className="featured-img-container">
        <img src={project.image.path} className="featured-img" />
      </div>
    </div>
  );

  return (
    <div key={project.id} className="featured-container">
      <WebLink url={project.links["live site"]} linkObj={card} />
    </div>
  );
};
