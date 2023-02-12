import "../styles/globals.css"
// include styles from the ui packages
import "ui/styles.css"
import "mui/styles.css"

const Layout = async ({ children }: { children: React.ReactNode }) => (
  <html>
    <body>
      <div className="bg-zinc-900">{children}</div>
    </body>
  </html>
)

export default Layout
