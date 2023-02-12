//import { Tab } from "./Tab"

export type Item = {
  text: string
  slug?: string
  segment?: string
}

export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  return (
    <div className="nui-flex nui-flex-wrap nui-items-center nui-gap-2">
      {items.map((item) => (
        <div>Hey</div>
        // <Tab key={path + item.slug} item={item} path={path} />
      ))}
    </div>
  )
}
