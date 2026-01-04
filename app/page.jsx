"use client";

import { useState } from "react";
import CompanyInfo from "@/components/Company/CompanyInfo";
import SalesTable from "@/components/Sales/SalesTable";
import PreviewPanel from "@/components/Preview/PreviewPanel";

import styles from "./HomeLayout.module.css";

export default function Home() {
  const [selectedSale, setSelectedSale] = useState(null);

  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <CompanyInfo />
        <SalesTable onSelect={setSelectedSale} />
      </div>

      <div className={styles.right}>
        <PreviewPanel sale={selectedSale} />
      </div>
    </div>
  );
}
