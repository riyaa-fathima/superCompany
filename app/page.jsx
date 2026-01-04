"use client";

import { useState } from "react";

import CompanyHeader from "@/components/Company/CompanyHeader";
import CompanyInfo from "@/components/Company/CompanyInfo";
import CompanyTabs from "@/components/Company/CompanyTabs";
import SalesTable from "@/components/Sales/SalesTable";
import PreviewPanel from "@/components/Preview/PreviewPanel";

export default function Home() {
  const [selectedSale, setSelectedSale] = useState(null);

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        <CompanyInfo />
        <SalesTable onSelect={setSelectedSale} />
      </div>

      <PreviewPanel sale={selectedSale} />
    </div>
  );
}
