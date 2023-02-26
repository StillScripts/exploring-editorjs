import type { OutputData } from "@editorjs/editorjs"

const env = import.meta.env

export async function readJSON() {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${env.VITE_JSONBIN_ID}/latest`,
    {
      headers: {
        "X-Master-Key": env.VITE_X_MASTER_KEY,
      },
    }
  )
  if (!response.ok) {
    throw new Error("Failed to fetch data from JSON Bin")
  }
  return (await response.json()) as { metadata: object; record: OutputData }
}

export async function updateJSON(data: OutputData) {
  await fetch(`https://api.jsonbin.io/v3/b/${env.VITE_JSONBIN_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": env.VITE_X_MASTER_KEY,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
}
