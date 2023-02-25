"use client" // Error components must be Client components

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="w-full bg-white p-8 py-16 text-center">
      <h2 className="my-4 text-lg font-bold text-red-500">
        Something went wrong when fetching data!
      </h2>
      <button
        className="bg-green-700 px-4 py-2 text-white"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
