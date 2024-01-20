import React from "react"
import ProductNameType from "./rowOne/ProductNameType"
import StockAvailability from "./rowOne/StockAvailability"

export default function RowOne({ addItem }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ProductNameType addItem={addItem} />
      <div style={{ alignSelf: "center" }}>
        <StockAvailability addItem={addItem} />
      </div>
    </div>
  )
}
