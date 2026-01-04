"use client";
import { FiStar } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function CompanyHeader() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 6px 14px rgba(0,0,0,0.06)",
        marginBottom: "12px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "#e8f0fb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              color: "#3b6fdc",
            }}
          >
            SC
          </div>

          <div>
            <h2 style={{ margin: 0 }}>SuperCompany Ltd ASA</h2>
            <p style={{ color: "#777", marginTop: 2 }}>Department Stockholm</p>
          </div>
        </div>
        
        <div style={{ display: "flex", gap: 10 }}>
          <button style={iconBtn}>
            <FiStar />
          </button>

          <button
            style={{ ...iconBtn, background: "#ffefe6", color: "#d8622b" }}
          >
            <FiEdit2 />
          </button>

          <button style={iconBtn}>
            <HiOutlineDotsHorizontal />
          </button>
        </div>
      </div>
    </div>
  );
}

const iconBtn = {
  width: 34,
  height: 34,
  borderRadius: "50%",
  border: "1px solid #ddd",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};
