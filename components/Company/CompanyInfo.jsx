import CompanyHeader from "@/components/Company/CompanyHeader";
import CompanyTabs from "@/components/Company/CompanyTabs";
export default function CompanyInfo() {
  return (
    <>
      <CompanyHeader />
      <CompanyTabs/>
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.06)",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          <div>
            <p>
              <b>Postal:</b> Västgötagatan 5, 102 61 Stockholm
            </p>
            <p>
              <b>Country:</b> Sweden
            </p>
            <p>
              <b>Phone:</b> +46 800 193 2820
            </p>
            <p>
              <b>Webaddress:</b> info@sc.se
            </p>
            <p>
              <b>E-mail:</b> www.sc.se
            </p>
          </div>

          <div>
            <p>
              <b>Category:</b> Customer A
            </p>
            <p>
              <b>Code:</b> SUPERCO
            </p>
            <p>
              <b>Number:</b> 2002
            </p>
            <p>
              <b>VAT No:</b> SE123456789
            </p>
            <p>
              <b>Business:</b> IT
            </p>
          </div>
        </div>

        
        <div
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 8,
            borderTop: "1px solid #eee",
          }}
        >
          <div>
            <label>
              <input type="checkbox" /> Stop
            </label>

            <label style={{ marginLeft: 14 }}>
              <input type="checkbox" /> No mailings
            </label>
          </div>

          <div style={{ color: "#666", fontSize: "12px" }}>
            Updated: 18/09/2023 OG
          </div>
        </div>
      </div>
    </>
  );
}
