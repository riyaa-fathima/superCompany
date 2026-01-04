"use client";

import { useState } from "react";

export default function AddSaleModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    saleName: "",
    status: "",
    amount: "",
    stage: "",
    nextActivityDate: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.saleName ||
      !form.status ||
      !form.amount ||
      !form.stage ||
      !form.nextActivityDate
    ) {
      setError("All fields are required");
      return;
    }
    console.log(form);

    const res = await fetch("/api/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        amount: Number(String(form.amount).replace(/,/g, "")),
      }),
    });

    if (!res.ok) {
      const msg = await res.json();
      setError(msg.error || "Something went wrong");
      return;
    }

    onSuccess(); 
    onClose(); 
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          background: "#2C786C",
          padding: "18px",
          borderRadius: "12px",
          width: "400px",
        }}
      >
        <h3 style={{ marginBottom: 10 }}>Add New Sale</h3>

        {error && <p style={{ color: "red", marginBottom: 8 }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          {[
            { name: "saleName", label: "Sale Name" },
            { name: "status", label: "Status" },
            { name: "amount", label: "Amount" },
            { name: "stage", label: "Stage" },
            { name: "nextActivityDate", label: "Next Activity Date" },
          ].map((f) => (
            <div key={f.name} style={{ marginBottom: 8 }}>
              <label style={{ fontSize: 12 }}>{f.label}</label>
              <input
                name={f.name}
                value={form[f.name]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "6px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          ))}

          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
