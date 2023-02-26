import { HTML } from "./HTML"

export const Heading: React.FC<{
  level: 1 | 2 | 3 | 4 | 5 | 6
  text: string
}> = ({ level, text }) => {
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
