import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

const Layout = async ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export default Layout;
