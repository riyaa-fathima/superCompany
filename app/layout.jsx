import Sidebar from "@/components/Layout/Sidebar";
import Navbar from "@/components/Layout/Navbar";
import styles from "./RootLayout.module.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={styles.layoutBody}>
        <Sidebar />

        <div className={styles.content}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
