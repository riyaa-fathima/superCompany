"use client";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 18px",
        background: "#fff",
        borderBottom: "1px solid #eee",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
      }}
    >
      {/* LEFT SIDE — New button + dropdown */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          style={{
            padding: "6px 10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#F7FBFF",
          }}
        >
          New ▼
        </button>
      </div>

      {/* CENTER — Search Bar */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <input
          placeholder="Search for anything"
          style={{
            width: "55%",
            padding: "8px 10px",
            borderRadius: "16px",
            border: "1px solid #ddd",
            background: "#FAFAFA",
          }}
        />
      </div>

      {/* RIGHT SIDE — Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ fontSize: "18px", cursor: "pointer" }}>🔔</span>
        <span style={{ fontSize: "18px", cursor: "pointer" }}>☰</span>
        <span style={{ fontSize: "14px", cursor: "pointer" }}>Help</span>

        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#1f7a6b",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
          }}
        >
          L
        </div>
      </div>
    </div>
  );
}
