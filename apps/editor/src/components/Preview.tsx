import { OutputBlockData } from "@editorjs/editorjs"
import { BlockRenderer } from "editor-plugin"

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
