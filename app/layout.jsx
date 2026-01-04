import Sidebar from "@/components/Layout/Sidebar";
import Navbar from "@/components/Layout/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ background: "#f5f6fa", display: "flex" }}>
        <Sidebar />

        <div style={{ marginLeft: "68px", flex: 1 }}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
