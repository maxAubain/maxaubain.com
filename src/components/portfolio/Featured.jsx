import React, { useState, useEffect } from "react";
import axios from "axios";
import { navLinksParams } from "../../router/navLinks";
import { ProjectCard } from "./ProjectCard";

export const Featured = () => {
  // If content has not been set, get content items data from file
  const [content, setContent] = useState([]);
  useEffect(() => {
    if (content.length === 0) {
      axios.get(navLinksParams.portfolio.featured.dataPath).then(response => {
        setContent(response.data);
      });
    }
  });

  let contentItem;
  const contentItems = content.map(item => {
    contentItem = <ProjectCard project={item} />
    return (
      <div key={item.id}>
        {contentItem}
      </div>
    )
  });

  return (
    <div className="project-categories-wrapper 
    project-categories-wrapper-featured">
      {contentItems}
    </div>
  )
}