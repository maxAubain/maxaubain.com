import React from 'react'

import { WebLink } from './WebLink'

let keyArray, i, link

export const TechWebLinks = ({ keyword, externalLinksData }) => {
  keyArray = Object.keys(externalLinksData) // e.g. keyArray = ["Axios", "Body Parser", "Cartify",...]
  for (i = 0; i < keyArray.length; i++) {
    if (keyArray[i] == keyword) {
      link = (
        <WebLink
          key={keyword}
          url={externalLinksData[keyword]}
          linkObj={keyword}
          className="weblink"
        />
      )
      i = keyArray.length // Ends for-loop when key matches keyword
    } else {
      link = keyword
    }
  }
  return link // Returns weblink object or string keyword value
}
