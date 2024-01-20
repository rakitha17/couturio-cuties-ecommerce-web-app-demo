import React from "react"
//LINK - packages
import { Typography } from "@mui/material"

export default function SingleSizeComponent({ val }) {
  return (
    <Typography
      style={{
        color: "#DDD0C8",
        fontFamily: "DM Sans",
        fontSize: "1rem",
        fontWeight: "600",
        padding: "2px 10px",
        backgroundColor: "#323232",
        borderRadius: "5px",
      }}
    >
      {val}
    </Typography>
  )
}
