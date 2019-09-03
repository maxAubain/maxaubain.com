# Front End Application: Professional Portfolio
## Summary
This repository stores a code base for a front end implementation of a porfolio that showcases my work history, skills, education, and web development projects.  The general app structure is organized around javascript ES6 compiling requirements and vanilla CSS.  The ReactJS library is used throughout the application to organize and display the information with stateful components.

## Deployment
This [Professional Portfolio Application](https://max-aubain.netlify.com/) is deployed using [Netlify](https://app.netlify.com/) webhosting services.

## Design notes
The foremost requirement of the UI was to be 'mobile friendly'.  I relied upon this reference to learn about, and structure, CSS media queries: [Responsive design with html and css](https://internetingishard.com/html-and-css/responsive-design/).

### Developed and documented by,
* Aubain, Max - [Github](https://github.com/CA-ma)  

---------
## Reference installation notes
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
Also,
1. Install and configure `file-loader` and `url-loader` to the `Webpack` framework in order to compile `url()` methods in css files.
2. Implement images using `background: url()` in the css files.

### dev notes
Scroll to top solution to try:
https://github.com/ReactTraining/react-router/issues/2019

Add pivital tracker links to projects
* Playdate: https://www.pivotaltracker.com/n/projects/2370835
* Gnosis: https://www.pivotaltracker.com/n/projects/2384164
* Kibbles 'n Bites: https://www.pivotaltracker.com/n/projects/2360231

Add `enzyme` to list of technologies for unit testing js

Option to add an effect to each navlink in the navbar when the page is selected
https://reacttraining.com/react-router/web/api/NavLink/isactive-func