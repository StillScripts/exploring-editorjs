// import React from "react"
// import ReactDOM from "react-dom/client"
import EditorJS from "@editorjs/editorjs"
import Header from "@editorjs/header"
import List from "@editorjs/list"
import Quote from "@editorjs/quote"
import Paragraph from "@editorjs/paragraph"
//import App from "./App"
import "./index.css"

// React App (may be useful for rendering previews of components)
// ReactDOM.createRoot(document.getElementById("react") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

export const LOCAL_KEY = "exploring-editorjs-current-state"

const storedContent = JSON.parse(localStorage.getItem(LOCAL_KEY) || "")

const editor = new EditorJS({
  holder: "editor",
  placeholder: "Get started",
  tools: {
    header: {
      class: Header,
      inlineToolbar: ["link"],
    },
    paragragh: {
      class: Paragraph,
    },
    quote: {
      class: Quote,
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
  },
  data: storedContent,
})

const saveButton = document.getElementById("save")

if (saveButton) {
  saveButton.addEventListener("click", () => {
    editor
      .save()
      .then((data) => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(data))
        console.log("Article data: ", data)
      })
      .catch((error) => {
        console.log("Saving failed: ", error)
      })
  })
}
