import { OutputBlockData } from "@editorjs/editorjs"
import { Heading } from "./Heading"
import { List } from "./List"
import { Paragraph } from "./Paragraph"
import { Quote } from "./Quote"

export type BlockType = "header" | "paragraph" | "list" | "quote"

export const BlockRenderer: React.FC<{ block: OutputBlockData }> = ({
  block,
}) => {
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
