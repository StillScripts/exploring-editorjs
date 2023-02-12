import "../styles/globals.css"
// include styles from the ui package
import "ui/styles.css"

const Layout = async ({ children }: { children: React.ReactNode }) => (
  <html>
    <body>
      <div className="bg-zinc-900">{children}</div>
    </body>
  </html>
)

export default Layout
