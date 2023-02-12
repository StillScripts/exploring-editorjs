"use client"

import type { Item } from "./TabGroup"
import clsx from "clsx"
//import Link from "next/link"
//import { useSelectedLayoutSegment } from "next/navigation"

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  //const segment = useSelectedLayoutSegment()
  const href = item.slug ? path + "/" + item.slug : path
  const isActive = false
  // Example home pages e.g. `/layouts`
  // (!item.slug && segment === null) ||
  // segment === item.segment ||
  // // Nested pages e.g. `/layouts/electronics`
  // segment === item.slug

  return (
    <a
      href={href}
      className={clsx(
        "nui-rounded-lg nui-px-3 nui-py-1 nui-text-sm nui-font-medium",
        {
          "nui-bg-gray-700 nui-text-gray-100 nui-hover:bg-gray-500 nui-hover:text-white":
            !isActive,
          "nui-bg-vercel-blue nui-text-white": isActive,
        }
      )}
    >
      {item.text}
    </a>
  )
}
