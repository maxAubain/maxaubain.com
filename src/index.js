import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"

const HelloWorld = () => {
    return <Hello />
};

ReactDOM.render(<HelloWorld />, document.getElementById("app"))