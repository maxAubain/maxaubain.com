import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Top } from './app/top/Top'
import './app/top/style/fonts/arial'
import './app/global/links/style/navlink'
import './app/global/links/style/weblink'
import './app/top/style/global'

ReactDOM.render(<BrowserRouter> <Top /> </BrowserRouter>,
  document.getElementById("app"));