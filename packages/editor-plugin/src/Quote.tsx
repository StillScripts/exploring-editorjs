import { HTML } from "./HTML"

export const Quote: React.FC<{ text: string }> = ({ text }) => {
  return (
    <blockquote>
      <HTML text={text} />
    </blockquote>
  )
}
