import React from "react"
//LINK - utilities
import { priceValueFormat } from "../../../utilities/priceValueFormat"

export default function PriceTag({ addItem }) {
  return (
    <p style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600" }}>
      {priceValueFormat(addItem.price)}
    </p>
  )
}
