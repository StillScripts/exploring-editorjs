import "../styles/globals.css"
// include styles from the ui packages
import "ui/styles.css"

const Layout = async ({ children }: { children: React.ReactNode }) => (
  <html>
    <body className="min-h-full">
      <div className="min-h-screen bg-zinc-900">{children}</div>
    </body>
  </html>
)

export default Layout
