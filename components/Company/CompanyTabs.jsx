"use client";
import { useState } from "react";

const tabs = ["Company", "More", "Interest", "Note", "Market data","Misc"];

export default function CompanyTabs({ active, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        marginTop: 6,
        marginBottom: 6,
        borderBottom: "1px solid #e5e7eb",
        paddingBottom: 4
      }}
    >
      {tabs.map((t) => {
        const isActive = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            style={{
              padding: "6px 12px",
              borderRadius: "20px",
              border: "1px solid #ddd",
              background: isActive ? "#E7F2FF" : "#fff",
              color: isActive ? "#2a7c4b" : "#555",
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
