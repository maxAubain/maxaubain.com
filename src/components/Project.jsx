import React, { useState } from "react";

import { IconSmall } from "./common/IconSmall";
import { NewTabLink } from "./common/NewTabLink";
import { AssignTechLinks } from "../modules/AssignTechLinks";

export const Project = ({ project }) => {
  const [projectAttributes, setProjectAttributes] = useState({
    hidden: true
  });

  let projectContainerClassName, projectSummaryTitleClassName;
  if (projectAttributes.hidden) {
    projectContainerClassName = "project-details-container hidden";
    projectSummaryTitleClassName = "project-summary-title";
  } else {
    projectContainerClassName = "project-details-container";
    projectSummaryTitleClassName = "project-summary-title-current";
  }

  const descriptionFull = project.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  const links = Object.keys(project.links).map(key => {
    return (
      <div key={key}>
        <NewTabLink
          url={project.links[key]}
          linkText={key}
          className="project-details-link weblink"
        />
      </div>
    );
  });

  let keywordArray, length, i, link;
  const tech = Object.keys(project.tech).map(key => {
    keywordArray = project.tech[key].split(", ");
    //console.log("KEYWORD ARRAY AFTER SPLIT", keywordArray)
    length = keywordArray.length;
    for (i = 0; i < length; i++) {
      link = AssignTechLinks(keywordArray[i]);
      //console.log("LINK AFTER FUNCTION", link)
      keywordArray.splice(i, 1, link);
      //if (i != (length - 1)) { keywordArray.splice(i+1, 0, ", ")}
      //console.log("KEYWORD ARRAY AFTER SPLICE", keywordArray)
    }
    //console.log(keywordArray);

    return (
      <p key={key}>
        {key}: {keywordArray}.
      </p>
    );
  });

  return (
    <>
      <div
        className="project-summary"
        onClick={() => {
          setProjectAttributes({ hidden: !projectAttributes.hidden });
        }}
      >
        <IconSmall src={project.image.path} alt={project.image.alt} />
        <div className={projectSummaryTitleClassName}>{project.title}</div>
        <div className="project-summary-description">
          {project.descriptionShort}
        </div>
      </div>

      <div className={projectContainerClassName}>
        <div className="project-details-padding">
          <div className="project-details-link-container">
            <strong>
              <u>Links</u>
            </strong>
            {links}
          </div>
          <div className="project-description-full-container">
            <div className="project-description-full">
              <strong>
                <u>Description</u>
              </strong>
              {descriptionFull}
            </div>
            <div className="project-stack">
              <strong>
                <u>Technology Stack</u>
              </strong>
              {tech}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
