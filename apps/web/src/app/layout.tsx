import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

const Layout = async ({ children }: { children: React.ReactNode }) => (
  <div className="bg-zinc-900">{children}</div>
);

export default Layout;
