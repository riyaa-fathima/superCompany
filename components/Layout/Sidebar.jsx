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
      {/* Top avatar */}
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

      {/* Icon list */}
      {icons.map((Icon, idx) => (
        <div
          key={idx}
          style={{
            width: 36,
            height: 36,
            borderRadius: "10px",
            background: idx === 1 ? "#1ea896" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            cursor: "pointer"
          }}
        >
          <Icon size={18} />
        </div>
      ))}
    </div>
  );
}
