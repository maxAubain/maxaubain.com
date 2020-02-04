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
  let contentItem;
  const contentItems = content.map(item => {
    switch (contentCat) {
      case "Featured":
        contentItem = <ProjectCard project={item} />
        break;
      case "Applications":
        contentItem = <Project project={item} externalLinks={externalLinks} />
        break;
      case "Coding Exercises":
        contentItem = <Project project={item} externalLinks={externalLinks} />
        break;
    }
    return (
      <div key={item.id}>
        {contentItem}
      </div>
    )
  });

  // If content has been set, return content items wrapped in associated layout styles
  let portfolioCatContentCN;
  if (content.length > 0) {
    switch (contentCat) {
      case "Featured":
        portfolioCatContentCN =
          "project-categories-wrapper project-categories-wrapper-featured"
        break;
      case "Applications":
        portfolioCatContentCN = "project-categories-wrapper"
        break;
      case "Coding Exercises":
        portfolioCatContentCN = "project-categories-wrapper"
        break;
    }
    return (
      <div className={portfolioCatContentCN}>
        {contentItems}
      </div>);
  } else {
    return <></>;
  }
};
