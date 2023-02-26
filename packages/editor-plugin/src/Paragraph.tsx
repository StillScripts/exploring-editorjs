import { HTML } from "./HTML"

export const Paragraph: React.FC<{ text: string }> = ({ text }) => (
  <p>
    <HTML text={text} />
  </p>
)
