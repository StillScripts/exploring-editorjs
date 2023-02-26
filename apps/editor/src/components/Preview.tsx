import { OutputBlockData } from "@editorjs/editorjs"

export type BlockType = "header" | "paragraph" | "list" | "quote"

const HTML: React.FC<{ text: string }> = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
)

const Heading: React.FC<{ level: 1 | 2 | 3 | 4 | 5 | 6; text: string }> = ({
  level,
  text,
}) => {
  switch (level) {
    case 1:
      return (
        <h1>
          <HTML text={text} />
        </h1>
      )
    case 2:
      return (
        <h2>
          <HTML text={text} />
        </h2>
      )
    case 3:
      return (
        <h3>
          <HTML text={text} />
        </h3>
      )
    case 4:
      return (
        <h4>
          <HTML text={text} />
        </h4>
      )
    case 5:
      return (
        <h5>
          <HTML text={text} />
        </h5>
      )
    case 6:
      return (
        <h6>
          <HTML text={text} />
        </h6>
      )
    default:
      return null
  }
}

const Paragraph: React.FC<{ text: string }> = ({ text }) => (
  <p>
    <HTML text={text} />
  </p>
)

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

const List: React.FC<ListProps> = ({ style, ...props }) => {
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

const Quote: React.FC<{ text: string }> = ({ text }) => {
  return (
    <blockquote>
      <HTML text={text} />
    </blockquote>
  )
}

const BlockRenderer: React.FC<{ block: OutputBlockData }> = ({ block }) => {
  switch (block.type as BlockType) {
    case "header":
      return <Heading level={block.data.level} text={block.data.text} />
    case "paragraph":
      return <Paragraph text={block.data.text} />
    case "list":
      return (
        <List
          blockId={block.id as string}
          style={block.data.style}
          items={block.data.items}
        />
      )
    case "quote":
      return <Quote text={block.data.text} />
    default:
      return null
  }
}

export const Preview: React.FC<{ blocks: OutputBlockData[] }> = ({
  blocks,
}) => {
  return (
    <div className="py-8">
      <div className="prose lg:prose-xl rounded-lg bg-white px-8 pt-6 pb-12 shadow-xl">
        {blocks.map((block, id) => (
          <BlockRenderer key={block.id || id} block={block} />
        ))}
      </div>
    </div>
  )
}
