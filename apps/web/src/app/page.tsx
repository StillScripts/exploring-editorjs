import { BlockRenderer, OutputBlockData } from "editor-plugin"
import Link from "next/link"
import { env } from "../env.mjs"

// const CARD_CONTENT: ComponentProps<typeof Card>[] = [
//   {
//     title: "Caching Tasks",
//     href: "https://turbo.build/repo/docs/core-concepts/caching",
//     cta: "Read More",
//   },
//   {
//     title: "Running Tasks",
//     href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
//     cta: "Read More",
//   },
//   {
//     title: "Configuration Options",
//     href: "https://turbo.build/repo/docs/reference/configuration",
//     cta: "Read More",
//   },
// ]

async function getData() {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${env.JSONBIN_ID}/latest`,
    {
      headers: {
        "X-Master-Key": env.X_MASTER_KEY,
      },
    }
  )
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  return response.json()
}

export default async function Home() {
  const data = await getData()
  const blocks: OutputBlockData[] = data?.record?.blocks || []

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          <span className="from-secondary to-primary block bg-gradient-to-r bg-clip-text px-2 uppercase text-transparent">
            Page Designed by Editor.js
          </span>
        </h1>
        <div className="py-6 text-center">
          <Link
            className="from-secondary to-primary focus:ring-primary hover:bg-primary ml-2 inline-flex items-center rounded-md border border-transparent bg-gradient-to-br px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            href="http://127.0.0.1:5173/"
            target="_black"
            rel="noreferrer noopener"
          >
            Edit This Page
          </Link>
        </div>
        <div className="prose lg:prose-xl prose-headings:text-primary prose-blockquote:text-gray-300 shadow-primary rounded-lg px-8 pt-6 pb-12 text-white shadow-sm">
          {blocks.map((block) => (
            <BlockRenderer block={block} />
          ))}
        </div>
        {/* <div className="mt-12 grid grid-cols-1 place-content-evenly gap-4 sm:grid-cols-3">
          {CARD_CONTENT.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div> */}
      </main>
    </div>
  )
}
