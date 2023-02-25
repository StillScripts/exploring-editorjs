"use client"

import clsx from "clsx"
import Link from "next/link"

type Item = {
  text: string
  slug?: string
  segment?: string
}

export const Tab = ({
  path,
  item,
  isActive = false,
}: {
  path: string
  item: Item
  isActive?: boolean
}) => {
  const href = item.slug ? path + "/" + item.slug : path
  return (
    <Link
      href={href}
      className={clsx("rounded-lg px-3 py-1 text-sm font-medium", {
        "bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white":
          !isActive,
        "bg-vercel-pink text-white": isActive,
      })}
    >
      {item.text}
    </Link>
  )
}
