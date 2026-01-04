export default function PreviewPanel({ sale }) {
  if (!sale) {
    return (
      <div
        style={{
          width: "300px",
          background: "#fff",
          borderRadius: "14px",
          padding: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          height: "fit-content"
        }}
      >
        <h4>PREVIEW</h4>
        <p style={{ color: "#777" }}>Select a sale to view details</p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "300px",
        background: "#fff",
        borderRadius: "14px",
        padding: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        height: "fit-content"
      }}
    >
      <h4 style={{ marginBottom: 8 }}>PREVIEW</h4>

      <h3 style={{ margin: 0 }}>{sale.saleName}</h3>
      <p style={{ color: "#666", marginTop: 4 }}>
        {sale.amount?.toLocaleString()} EUR
      </p>

      <div style={{ marginTop: 10 }}>
        <p><b>Company:</b> SuperCompany Ltd ASA</p>
        <p><b>Contact:</b> Peter Elliot</p>
        <p><b>Sale date:</b> 01/02/2025</p>
        <p><b>Owner:</b> Eric Davies</p>
        <p><b>Sale type:</b> Cross-sale</p>
        <p><b>Status:</b> {sale.status}</p>
      </div>

      <h4 style={{ marginTop: 14 }}>Activities</h4>
      <ul style={{ paddingLeft: 16 }}>
        <li>04/11/2024 — Follow-up call</li>
        <li>01/11/2024 — Quote request</li>
        <li>23/09/2024 — Prospect meeting</li>
        <li>22/09/2024 — Introduction call</li>
      </ul>

      <h4 style={{ marginTop: 10 }}>Stakeholders</h4>
      <p>James Vargas</p>
      <p>Lisa Jansson</p>
    </div>
  );
}
