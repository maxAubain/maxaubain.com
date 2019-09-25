import React, { useState } from "react";

import { IconSmall } from "./imageComponents/IconSmall";

export const Project = props => {
  const [projectAttributes, setProjectAttributes] = useState({
    hidden: true
  });

  let projectContainerClassName, projectSummaryTitleClassName;
  if (projectAttributes.hidden) {
    projectContainerClassName = "project-details-container hidden";
    projectSummaryTitleClassName = "project-summary-title";
  } else {
    projectContainerClassName = "project-details-container";
    projectSummaryTitleClassName = "project-summary-title current";
  }

  const descriptionFull = props.project.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  return (
    <>
      <div
        className="project-summary"
        onClick={() => {setProjectAttributes({ hidden: !projectAttributes.hidden })}}
      >
        <IconSmall src={props.project.image.path} alt={props.project.image.alt} />
        <div className={projectSummaryTitleClassName}>{props.project.title}</div>
        <div className="project-summary-description">
          {props.project.descriptionShort}
        </div>
      </div>

      <div className={projectContainerClassName}>
        <div className="project-details-padding">
          {descriptionFull}
          <strong>Technology Stack: {props.project.tech}</strong>
          <div className="project-details-link-container">
            <a href={props.project.link1} className="project-details-link">
              {props.project.linkLabel1}
            </a>
            <a href={props.project.link2} className="project-details-link">
              {props.project.linkLabel2}
            </a>
            <a href={props.project.link3} className="project-details-link">
              {props.project.linkLabel3}
            </a>
            <a href={props.project.link4} className="project-details-link">
              {props.project.linkLabel4}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
