"use client";

import { useEffect, useState } from "react";
import AddSaleModal from "./AddSaleModal";
import Toolbar from "./Toolbar";

export default function SalesTable({ onSelect }) {
  const [sales, setSales] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Sales");
  const [selected, setSelected] = useState(null);

  async function fetchSales(p = 1) {
    const res = await fetch(`/api/sales?page=${p}&limit=5`);
    const json = await res.json();

    setSales(json.data);
    setPages(json.pagination.pages);
    setPage(json.pagination.page);
  }
  function selectRow(sale) {
    setSelected(sale);
    onSelect?.(sale);
  }

  useEffect(() => {
    fetchSales(page);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "0",
        boxShadow: "0 6px 14px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
          padding: "12px 16px",
          borderBottom: "1px solid #eee",
        }}
      >
        {["Activities", "Contacts", "Projects", "Sales", "Requests"].map(
          (tab) => {
            const isActive = tab === activeTab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: isActive ? "#e7f3ef" : "transparent",
                  color: isActive ? "#2a7c4b" : "#555",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {tab}
              </button>
            );
          }
        )}
      </div>
      {activeTab === "Sales" && (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {[
                  "Status",
                  "Sale Date",
                  "Amount",
                  "Stage",
                  "Next Activity",
                  "Sale Name",
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "10px 6px",
                      borderBottom: "1px solid #e6e6e6",
                      fontSize: "13px",
                      color: "#555",
                      fontWeight: 600,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sales.map((s) => (
                <tr
                  key={s._id}
                  onClick={() => selectRow(s)}
                  style={{
                    cursor: "pointer",
                    background: selected?._id === s._id ? "#E8F2FF" : "#fff",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <td style={{ padding: "8px" }}>
                    <span
                      style={{
                        padding: "4px 8px",
                        borderRadius: "10px",
                        background: "#E7F5EE",
                        color: "#2A7C4B",
                        fontSize: "12px",
                      }}
                    >
                      {s.status}
                    </span>
                  </td>

                  <td style={{ padding: "8px" }}>
                    {new Date(s.createdAt).toLocaleDateString()}
                  </td>
                  <td style={{ padding: "8px" }}>{s.amount}</td>
                  <td style={{ padding: "8px" }}>{s.stage}</td>
                  <td style={{ padding: "8px" }}>{s.nextActivityDate}</td>
                  <td style={{ padding: "8px" }}>{s.saleName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <Toolbar
        onAdd={() => setShowModal(true)}
        onDelete={() => console.log("delete clicked")}
        onFilter={() => console.log("filter clicked")}
        onExport={() => console.log("export clicked")}
        onRefresh={() => fetchSales(page)}
      />

      {showModal && (
        <AddSaleModal
          onClose={() => setShowModal(false)}
          onSuccess={() => fetchSales(page)}
        />
      )}
    </div>
  );
}
