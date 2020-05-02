import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { App } from './app/top/App'
import "./global/components/icon/style/icon"
import "./global/components/link/style/link"
import './global/fonts/arial'

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>,
  document.getElementById("app"));