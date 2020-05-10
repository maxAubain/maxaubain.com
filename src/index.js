import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Top } from './app/top/Top'
import 'links/style/navlink'
import 'links/style/weblink'
import 'style/global'

ReactDOM.render(<BrowserRouter> <Top /> </BrowserRouter>,
  document.getElementById("app"));