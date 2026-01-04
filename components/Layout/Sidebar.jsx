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

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className={styles.toggleBtn}
      >
        ☰
      </button>

      <div
        className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.avatar}>L</div>

        {icons.map((Icon, idx) => (
          <div
            key={idx}
            className={`${styles.icon} ${idx === 1 ? styles.iconActive : ""}`}
          >
            <Icon size={18} />
          </div>
        ))}
      </div>
    </>
  );
}
