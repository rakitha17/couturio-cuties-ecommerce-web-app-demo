import React from "react"
//LINK - project components
import Quantity from "./qtyTot/Quantity"
import TotalPrice from "./qtyTot/TotalPrice"

export default function QtyTot({ addItem, setAddItem }) {
  const { qtyCount, price } = addItem
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "1.2rem",
            fontWeight: "600",
            textTransform: "capitalize",
          }}
        >
          select quantitities from selected size
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Quantity addItem={addItem} setAddItem={setAddItem} />
        <TotalPrice totalPrice={price * qtyCount} />
      </div>
    </>
  )
}
