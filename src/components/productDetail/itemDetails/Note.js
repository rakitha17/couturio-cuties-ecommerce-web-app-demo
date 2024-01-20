import React from "react"
//LINK - packages
import { Typography } from "@mui/material"

export default function Note() {
  return (
    <Typography
      style={{ color: "#323232", fontFamily: "DM Sans", fontSize: ".8rem" }}
    >
      Note: Product color may slightly vary due to photographic lightning
      sources or your monitor settings.
    </Typography>
  )
}
