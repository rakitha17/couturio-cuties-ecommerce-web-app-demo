import React from "react"
//LINK - packages
import { Typography } from "@mui/material"
//LINK - utilities
import { priceValueFormat } from "../../../../utilities/priceValueFormat"

export default function TotalPrice({ totalPrice }) {
  return (
    <Typography style={{ color: "#DC143C", fontWeight: "600" }}>
      {priceValueFormat(totalPrice)}
    </Typography>
  )
}
