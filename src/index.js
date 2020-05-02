import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { App } from './app/App'
import "./global/css/blog-post"
import "./global/css/blog-post-preview"
import "./global/css/common"
import "./global/css/global"
import "./global/css/portfolio"
import "./global/css/project-card"
import "./global/css/profile"
import "./global/css/social-media"
import './global/fonts/arial'

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>,
  document.getElementById("app"));