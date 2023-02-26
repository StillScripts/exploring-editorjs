import React from "react"
import ReactDOM from "react-dom/client"
import EditorJS from "@editorjs/editorjs"
import Header from "@editorjs/header"
import List from "@editorjs/list"
import Quote from "@editorjs/quote"
import Paragraph from "@editorjs/paragraph"
import App from "./App"
import "./index.css"
import { readJSON, updateJSON } from "./utils/jsonBin"

async function checkIfPreviewing() {
  try {
    const params = new URLSearchParams(window.location.search)
    const isPreview = !!params.get("preview")
    return isPreview
  } catch (error) {
    console.log("Url param error: " + error)
    return false
  }
}

async function setup() {
  const isPreview = await checkIfPreviewing()
  if (isPreview) {
    const data = await readJSON()
    ReactDOM.createRoot(document.getElementById("react") as HTMLElement).render(
      <React.StrictMode>
        <App blocks={data?.record?.blocks || []} />
      </React.StrictMode>
    )
  } else {
    const container = document.getElementById("container")
    const editorUI = document.createElement("div")
    editorUI.innerHTML = `
    <div>
      <div class="my-6 flex w-full justify-between">
        <h1 class="text-indigo-700 font-extrabold text-4xl mr-4">Editor.js Demo</h1>
        <div>
          <a id="preview"
            href="/?preview=true"
            class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            View Preview
          </a>
          <button id="save"
            class="ml-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Save
          </button>
        </div>
      </div>
      <div class="bg-white shadow-lg rounded px-8 prose lg:prose-xl">
        <!-- Render Editor here -->
        <div id="editorjs"></div>
      </div>
    </div>
    `
    if (container) {
      container.appendChild(editorUI)
      const data = await readJSON()

      const editor = new EditorJS({
        holder: "editorjs",
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
        data: data.record,
      })

      const saveButton = document.getElementById("save")
      saveButton?.addEventListener("click", () => {
        editor
          .save()
          .then(async (data) => {
            await updateJSON(data)
            console.log("Updated data: ", data)
          })
          .catch((error) => {
            console.log("Saving failed: ", error)
          })
      })
    }
  }
}

await setup()
