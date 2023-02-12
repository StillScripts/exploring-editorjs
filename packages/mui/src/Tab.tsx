"use client"

import type { Item } from "./TabGroup"
import clsx from "clsx"
// import Link from "next/link"
// import { useSelectedLayoutSegment } from "next/navigation"

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  //const segment = useSelectedLayoutSegment()
  const href = item.slug ? path + "/" + item.slug : path
  const isActive = false
  //   // Example home pages e.g. `/layouts`
  //   (!item.slug && segment === null) ||
  //   segment === item.segment ||
  //   // Nested pages e.g. `/layouts/electronics`
  //   segment === item.slug

  return (
    <a
      href={href}
      className={clsx(
        "ui-rounded-lg ui-px-3 ui-py-1 ui-text-sm ui-font-medium",
        {
          "ui-bg-gray-700 ui-text-gray-100 ui-hover:bg-gray-500 ui-hover:text-white":
            !isActive,
          "ui-bg-vercel-blue ui-text-white": isActive,
        }
      )}
    >
      {item.text}
    </a>
  )
}
