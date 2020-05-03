import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Top } from './app/top/Top'
import "./app/global/icons/style/icons"
import "./app/global/links/style/links"
import './app/top/style/fonts/arial'

ReactDOM.render(<BrowserRouter> <Top /> </BrowserRouter>,
  document.getElementById("app"));