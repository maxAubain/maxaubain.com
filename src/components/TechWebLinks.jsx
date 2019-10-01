import React from "react";

import { WebLink } from "./common/WebLink";

let keyArray, i, link;
export const TechWebLinks = ({ keyword, externalLinks }) => {
  keyArray = Object.keys(externalLinks); // e.g. keyArray = ["Axios", "Body Parser", "Cartify",...]
  for (i = 0; i < keyArray.length; i++) {
    if (keyArray[i] == keyword) {
      link = (
        <WebLink
          key={keyword}
          url={externalLinks[keyword]}
          linkText={keyword}
          className="weblink"
        />
      );
      i = keyArray.length; // Ends for-loop when key matches keyword
    } else {
      link = keyword;
    }
  }
  return link; // Returns weblink object or string keyword value
};
