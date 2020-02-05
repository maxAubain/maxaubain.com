import React, { useState, useEffect } from "react";
import axios from "axios";
import { Content } from "./Content";
import { ContentItemsCount } from "./ContentItemsCount";

export const Portfolio = () => {
  // Define hash of portfolio categories and content data source files
  const portfolioCats = {
    Featured: "./src/data/projectsFeatured.json",
    "Blog": "./src/data/postsBlog.json",
    "Apps": "./src/data/projectsApplications.json",
    "Exercises": "./src/data/projectsExercises.json"
  };

  // Get externalLinks data containing tech keywords with related weblinks
  const [externalLinks, setExternalLinks] = useState({});
  useEffect(() => {
    if (Object.keys(externalLinks).length === 0) {
      axios.get("./src/data/linksExternal.json").then(response => {
        setExternalLinks(response.data);
      });
    }
  });

  // Set Portfolio state with initial portfolio category
  const [curPortfolioCat, setCurPortfolioCat] = useState(
    "Featured"
  );

  // Portfolio categories navlinks objects, with style (selected / unselected)
  let navlinkCN
  const PortfolioCatsNavlinks = Object.keys(portfolioCats).map(key => {
    key === curPortfolioCat
      ? (navlinkCN = "navlink-section-current")
      : (navlinkCN = "navlink-section");

    return (
      <div
        key={key}
        className={navlinkCN}
        onClick={() => {
          setCurPortfolioCat(key);
        }}
      >
        {key}
        <ContentItemsCount path={portfolioCats[key]} />
      </div>
    );
  });

  // Content object of the particular portfolio category ( selected )
  const portfolioCatContent = Object.keys(portfolioCats).map(key => {
    if (key === curPortfolioCat) {
      return (
        <Content
          key={key}
          contentCat={key}
          path={portfolioCats[key]}
          externalLinks={externalLinks}
        />
      );
    }
  });

  // When externalLinks data is loaded, content is displayed
  if (Object.keys(externalLinks).length > 0) {
    return (
      <>
        <div className="navlink-section-container">
          {PortfolioCatsNavlinks}
        </div>
        {portfolioCatContent}
      </>
    );
  } else {
    return <></>;
  }
};