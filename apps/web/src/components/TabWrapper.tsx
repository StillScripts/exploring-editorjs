"use client"

import { Item } from "#/../../packages/mui/dist"
import { useSelectedLayoutSegment } from "next/navigation"
import { Tab } from "mui"

export const TabWrapper = ({ path, item }: { path: string; item: Item }) => {
  const segment = useSelectedLayoutSegment()
  const isActive =
    // Example home pages e.g. `/layouts`
    (!item.slug && segment === null) ||
    segment === item.segment ||
    // Nested pages e.g. `/layouts/electronics`
    segment === item.slug
  return <Tab path={path} item={item} isActive={isActive} />
}
