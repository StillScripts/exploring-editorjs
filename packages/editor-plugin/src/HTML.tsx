export const HTML: React.FC<{ text: string }> = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
)
