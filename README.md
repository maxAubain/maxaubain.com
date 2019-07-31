# Front End Application: Professional Portfolio
Developed and documented by,
* Aubain, Max - [Github](https://github.com/CA-ma)  

## Summary
**Front end**: HTML, Tailwind CSS framework, and JS ES6/ES2015 with JSX/React.<br>
**Display format**: TBD.<br>
**Back end**: N/A.<br>
**Testing**: TBD.

This repository stores a code base for a front end implementation of a porfolio that showcases my work history, skills, education, and web development projects.  

## Deployment
The [Portfolio App](https://max-aubain-portfolio.netlify.com/) is deployed using [Netlify](https://app.netlify.com/) webhosting services.

(image of home page)

## Build
This application's scaffolding is maintained using Node Package Manager (NPM).  As such, the following process was used to install the necessary [React](https://reactjs.org/), [Babel](https://babeljs.io/) compilier, and  [Webpack](https://webpack.js.org/) module bundler.

```
// Initialize NPM
$ npm init   

// Install React and React-DOM
$ npm install --save react react-dom

// Install Babel core, command line interface (CLI), and presets for the JS syntax transforms for React
$ npm install --save--dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ touch .babelrc
```
In `.babelrc` config file add the following configuration setting,
```
{
  "presets": [
    "@babel/env",
    "@babel/preset-react"
  ]
}
```
Finally,
```
// Webpack installation and configuration
$ npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2
```

## Development

## Acknowledgements
Thank you to [Craft Academy](https://craftacademy.se/) in Stockholm, Sweden for crafting this challenge.


