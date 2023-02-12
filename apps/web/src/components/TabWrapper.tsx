"use client"

import { Item } from "@/utils/getCategories"
import { useSelectedLayoutSegment } from "next/navigation"
import { Tab } from "mui"

export const TabWrapper = ({ path, item }: { path: string; item: Item }) => {
  const segment = useSelectedLayoutSegment()
  const isActive =
    (!item.slug && segment === null) ||
    segment === item.segment ||
    segment === item.slug
  return <Tab path={path} item={item} isActive={isActive} />
}
