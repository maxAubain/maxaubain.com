import React, { useState } from "react";

export const Project = props => {
  const [projectClass, setProjectClass] = useState(
    "project-details-container hidden"
  );
  const [project] = useState(props.project);

  const descriptionFull = project.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  const handleProjectShow = () => {
    projectClass == "project-details-container hidden"
      ? setProjectClass("project-details-container")
      : setProjectClass("project-details-container hidden");
  };

  return (
    <>
      <div className="project-summary" onClick={handleProjectShow}>
        <img
          className="project-summary-icon"
          src={project.image.path}
          alt={project.image.alt}
          height="30"
          width="30"
        ></img>
        <div className="project-summary-title">{project.title}</div>
        <div className="project-summary-description">
          {project.descriptionShort}
        </div>
      </div>

      <div className={projectClass}>
        <div className="project-details-padding">
          {descriptionFull}
          <strong>Technologies: {project.tech}</strong>
          <div className="project-details-link-container">
            <a href={project.link1} className="project-details-link">
              {project.linkLabel1}
            </a>
            <a href={project.link2} className="project-details-link">
              {project.linkLabel2}
            </a>
            <a href={project.link3} className="project-details-link">
              {project.linkLabel3}
            </a>
            <a href={project.link4} className="project-details-link">
              {project.linkLabel4}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
