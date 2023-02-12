import { Tab } from "./Tab"

export type Item = {
  text: string
  slug?: string
  segment?: string
}

export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  return (
    <div className="ui-flex ui-flex-wrap ui-items-center ui-gap-2">
      {items.map((item) => (
        <Tab key={path + item.slug} item={item} path={path} />
      ))}
    </div>
  )
}
