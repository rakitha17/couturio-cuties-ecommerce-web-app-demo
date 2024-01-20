import React from "react"
//LINK - packages
import Typography from "@mui/material/Typography"

export default function QtyNumber({ qtyCount }) {
  return (
    <Typography style={{ fontSize: ".95rem", fontWeight: "600" }}>
      {qtyCount}
    </Typography>
  )
}
