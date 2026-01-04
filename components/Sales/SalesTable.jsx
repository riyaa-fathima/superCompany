"use client";

import { useEffect, useState } from "react";
import AddSaleModal from "./AddSaleModal";
import Toolbar from "./Toolbar";
import styles from "./SalesTable.module.css";

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

    setSales(Array.isArray(json.data) ? json.data : []);
    setPages(json?.pagination?.pages ?? 1);
    setPage(json?.pagination?.page ?? 1);
  }

  function selectRow(sale) {
    setSelected(sale);
    onSelect?.(sale);
  }

  useEffect(() => {
    fetchSales(1);
  }, []);

  return (
    <div className={styles.wrapper}>
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
            const active = tab === activeTab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: active ? "#e7f3ef" : "transparent",
                  color: active ? "#2a7c4b" : "#555",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: active ? 600 : 500,
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
          <div className={styles.tableWrap}>
            <table className={styles.table}>
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
                      background:
                        selected?._id === s._id ? "#E8F2FF" : "#fff",
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
                    <td style={{ padding: "8px" }}>
                      {s.nextActivityDate}
                    </td>
                    <td style={{ padding: "8px" }}>{s.saleName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.toolbar}>
            <button
              disabled={page === 1}
              onClick={() => fetchSales(page - 1)}
            >
              Prev
            </button>

            <span>Page {page} of {pages}</span>

            <button
              disabled={page === pages}
              onClick={() => fetchSales(page + 1)}
            >
              Next
            </button>
          </div>

          <Toolbar
            onAdd={() => setShowModal(true)}
            onDelete={() => console.log("delete clicked")}
            onFilter={() => console.log("filter clicked")}
            onExport={() => console.log("export clicked")}
            onRefresh={() => fetchSales(page)}
          />
        </>
      )}
      {activeTab !== "Sales" && (
        <div style={{ padding: 18, color: "#777", textAlign: "center" }}>
          No content available for this section
        </div>
      )}

      {showModal && (
        <AddSaleModal
          onClose={() => setShowModal(false)}
          onSuccess={() => fetchSales(page)}
        />
      )}
    </div>
  );
}
