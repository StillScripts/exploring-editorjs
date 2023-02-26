import type { OutputBlockData } from "@editorjs/editorjs"
import { Preview } from "./components/Preview"

const App: React.FC<{ blocks: OutputBlockData[] }> = ({ blocks }) => {
  return (
    <div className="flex w-full justify-center">
      <div>
        <div className="mt-12 flex w-full justify-between">
          <h1 className="mr-4 text-4xl font-extrabold text-indigo-700">
            Preview Page
          </h1>
          <div>
            <a
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href="/"
            >
              Return To Editor
            </a>
            <a
              className="ml-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href="http://localhost:3000/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Visit Website Page
            </a>
          </div>
        </div>
        <Preview blocks={blocks} />
      </div>
    </div>
  )
}

export default App
