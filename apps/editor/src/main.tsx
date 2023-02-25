import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("react") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const editor = document.querySelector<HTMLDivElement>("#editor") // get the app container <div> element

// Update the innerHTML of the app container to contain the header, select input, and the sketch.
if (editor) {
  editor.innerHTML = `<h1>Editor.js</h1>`
}
