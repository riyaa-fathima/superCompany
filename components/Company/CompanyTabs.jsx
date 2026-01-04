"use client";
import { useState } from "react";

const tabs = ["Company", "More", "Interest", "Note", "Market data", "Misc"];

export default function CompanyTabs({ onChange }) {
  const [active, setActive] = useState("Company");

  function handleTab(tab) {
    setActive(tab);
    onChange?.(tab);
  }

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: "6px 0",
        borderBottom: "1px solid #eee"
      }}
    >
      {tabs.map((t) => {
        const isActive = t === active;

        return (
          <button
            key={t}
            onClick={() => handleTab(t)}
            style={{
              padding: "6px 14px",
              borderRadius: "18px",
              border: "none",
              background: isActive ? "#e7f3ef" : "transparent",
              color: isActive ? "#2a7c4b" : "#555",
              fontSize: "13px",
              fontWeight: isActive ? 600 : 500,
              cursor: "pointer"
            }}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
