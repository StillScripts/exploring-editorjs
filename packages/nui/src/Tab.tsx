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
      className={clsx(
        "nui-rounded-lg nui-px-3 nui-py-1 nui-text-sm nui-font-medium",
        {
          "nui-bg-gray-700 nui-text-gray-100 nui-hover:bg-gray-500 nui-hover:text-white":
            !isActive,
          "nui-bg-vercel-pink nui-text-white": isActive,
        }
      )}
    >
      {item.text}
    </Link>
  )
}
