"use client";

import { IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiFilter, CiExport,CiRedo } from "react-icons/ci";

export default function Toolbar({ onAdd, onDelete, onFilter, onExport, onRefresh }) {
  return (
    <div
      style={{
        marginTop: "12px",
        paddingTop: "10px",
        borderTop: "1px solid #e6e6e6",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
     
      <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
        <button onClick={onAdd} style={btnStyle}>
          <IoMdAddCircleOutline style={iconStyle} />
          <span style={textStyle}>Add</span>
        </button>

        <button onClick={onDelete} style={btnStyle}>
          <RiDeleteBinLine style={iconStyle} />
          <span style={textStyle}>Delete</span>
        </button>

        <button onClick={onFilter} style={btnStyle}>
          <CiFilter style={iconStyle} />
          <span style={textStyle}>Filter</span>
        </button>

        <button onClick={onExport} style={btnStyle}>
          <CiExport style={iconStyle} />
          <span style={textStyle}>Export</span>
        </button>
      </div>

     
      <button onClick={onRefresh} style={btnStyle}>
        <CiRedo style={{ fontSize: "20px", color: "#7a7a7a" }} />
      </button>
    </div>
  );
}

const btnStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  background: "transparent",
  border: "none",
  cursor: "pointer"
};

const iconStyle = {
  color: "#d8622b",
  fontSize: "18px"
};

const textStyle = {
  color: "black",
  fontSize: "13px"
};
