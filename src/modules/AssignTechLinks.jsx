import React, { useState, useEffect } from "react";
import axios from "axios";

import { NewTabLink } from "../components/common/NewTabLink";

const externalLinks = {
  "Axios": "https://github.com/axios/axios#axios",
  "Body Parser": "https://www.npmjs.com/package/body-parser",
  "Cartify": "https://github.com/GalenkoEugene/cartify#cartify",
  "Capacitor": "https://capacitor.ionicframework.com/",
  "Coveralls": "https://coveralls.io/",
  CSS3: "https://developer.mozilla.org/en-US/docs/Archive/CSS3",
  "Cucumber": "https://cucumber.io",
  "Cypress": "https://www.cypress.io/features",
  "Devise": "https://github.com/plataformatec/devise",
  "Devise Token Auth": "https://github.com/lynndylanhurley/devise_token_auth#devise-token-auth",
  "Enzyme": "https://airbnb.io/enzyme/",
  "Express CORS": "https://expressjs.com/en/resources/middleware/cors.html",
  "Express server": "https://expressjs.com/",
  Github: "https://github.com/features",
  "Github-pages": "https://help.github.com/en/categories/github-pages-basics",
  "Haml": "http://haml.info/",
  "Heroku": "https://www.heroku.com/platform",
  Ionic: "https://ionicframework.com/docs",
  "jQuery": "https://jquery.com/",
  "Material-UI": "https://material-ui.com/",
  Mocha: "https://mochajs.org/",
  "Netlify": "https://www.netlify.com/products/",
  "Node.js": "https://nodejs.org/en/about/",
  "PhantomJS": "https://phantomjs.org/",
  "Pivotal Tracker": "https://www.pivotaltracker.com/",
  "Rails Active Storage": "https://edgeguides.rubyonrails.org/active_storage_overview.html",
  "Rails CORS": "https://github.com/cyu/rack-cors",
  "React v16 with ES6": "https://5a046bf5a6188f4b8fa4938a--reactjs.netlify.com/",
  "React v16.9 with ES8": "https://5d4b5feba32acd0008d0df98--reactjs.netlify.com/docs/hooks-intro.html",
  "Redux": "https://redux.js.org/",
  "Ruby": "https://www.ruby-lang.org/en/",
  "Ruby on Rails": "https://rubyonrails.org/",
  "Rspec": "https://rspec.info/",
  "Semantic-UI": "https://semantic-ui.com/usage/layout.html",
  "Semaphore CI": "https://semaphoreci.com/product",
  "Stripe": "https://stripe.com/docs/api",
  "Webshot": "https://github.com/vitalie/webshot#webshot"
};

let keyArray, i, link;
export const AssignTechLinks = keyword => {
/*   const [externalLinks, setExternalLinks] = useState({});

  useEffect(() => {
    if (externalLinks.length === 0) {
      axios.get("./src/data/externalLinks.json").then(response => {
        setExternalLinks(response.data);
      });
    }
  });

  const extLinks = externalLinks.map(hash => {
    return {hash}
  }) */

  keyArray = Object.keys(externalLinks);
  console.log(keyArray)
  for (i = 0; i < keyArray.length; i++) {
    if (keyArray[i] == keyword) {
      link = (
        <NewTabLink
          key={keyArray[i]}
          url={externalLinks[keyArray[i]]}
          linkText={keyword}
          className="weblink"
        />
      );
      i = keyArray.length;
    } else {
      link = keyword;
    }
  }
  return link;
};
