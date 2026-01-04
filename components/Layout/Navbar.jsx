"use client";

import { useState } from "react";
import {
  FiPlus,
  FiFilter,
  FiSearch,
  FiBell,
  FiUser,
  FiSettings,
  FiLogOut
} from "react-icons/fi";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 10px",
            borderRadius: "20px",
            border: "1px solid #d6e3df",
            background: "#ffffff",
            color: "#1f7a6b",
            cursor: "pointer"
          }}
        >
          <FiPlus /> New
        </button>

        <button
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1px solid #d6e3df",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1f7a6b",
            cursor: "pointer"
          }}
        >
          <FiFilter size={16} />
        </button>
      </div>

      <div className={styles.searchWrap}>
        <div className={styles.searchBox}>
          <FiSearch size={14} color="#888" />
          <input
            placeholder="Search for anything"
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.right}>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <FiBell size={18} />
          <span
            style={{
              position: "absolute",
              top: -6,
              right: -6,
              background: "#c0392b",
              color: "#fff",
              borderRadius: "50%",
              fontSize: 10,
              padding: "2px 5px"
            }}
          >
            3
          </span>
        </div>

        {/* PROFILE */}
        <div style={{ position: "relative" }}>
          <div
            onClick={() => setOpen(o => !o)}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#1f7a6b",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontWeight: 600
            }}
          >
            R
          </div>

          {open && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 40,
                background: "#fff",
                borderRadius: "12px",
                border: "1px solid #e5e5e5",
                boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
                width: 190,
                padding: "8px"
              }}
            >
              <div style={{ padding: 8, fontWeight: 600 }}>Riya Fathima</div>
              <hr style={{ border: "none", borderTop: "1px solid #eee" }} />

              <button style={menuItem}>
                <FiUser /> Profile
              </button>

              <button style={menuItem}>
                <FiSettings /> Settings
              </button>

              <button style={{ ...menuItem, color: "#b3312f" }}>
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "8px",
  width: "100%",
  borderRadius: "8px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: 13
};
