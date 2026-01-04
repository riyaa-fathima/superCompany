"use client";

import { useState } from "react";
import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiCalendar,
  FiDollarSign,
  FiFileText,
  FiBriefcase,
  FiMail,
  FiPieChart,
  FiSettings
} from "react-icons/fi";

export default function Sidebar() {
  const icons = [
    FiHome,
    FiBarChart2,
    FiUsers,
    FiCalendar,
    FiDollarSign,
    FiFileText,
    FiBriefcase,
    FiMail,
    FiPieChart,
    FiSettings
  ];

  const [active, setActive] = useState(1);
  const [hover, setHover] = useState(null);

  return (
    <div
      style={{
        width: "68px",
        background: "#0d6b63",
        height: "100vh",
        borderBottomRightRadius: "14px",
        paddingTop: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "18px",
        position: "fixed",
        left: 0,
        top: 0
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: "50%",
          background: "#0b5d56",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 18,
          marginBottom: 6
        }}
      >
        L
      </div>

      {/* Icons */}
      {icons.map((Icon, idx) => {
        const isActive = active === idx;
        const isHover = hover === idx;

        return (
          <div
            key={idx}
            onClick={() => setActive(idx)}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            style={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              background: isActive
                ? "#1ea896"
                : isHover
                ? "#0b5d56"
                : "transparent"
            }}
          >
            <Icon size={18} />
          </div>
        );
      })}
    </div>
  );
}
