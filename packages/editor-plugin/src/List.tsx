import { HTML } from "./HTML"

interface ListItemsProps {
  items: string[]
  blockId: string
}

const ListItems: React.FC<ListItemsProps> = ({ items, blockId }) => (
  <>
    {items.map((item, id) => (
      <li key={`${blockId}-list-item-${id}`}>
        <HTML text={item} />
      </li>
    ))}
  </>
)

interface ListProps extends ListItemsProps {
  style: "ordered" | "unordered"
}

export const List: React.FC<ListProps> = ({ style, ...props }) => {
  switch (style) {
    case "ordered":
      return (
        <ol>
          <ListItems {...props} />
        </ol>
      )
    case "unordered":
      return (
        <ol>
          <ListItems {...props} />
        </ol>
      )
    default:
      return null
  }
}
