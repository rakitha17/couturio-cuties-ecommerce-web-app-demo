import { useMediaQuery } from "@mui/material"
import React from "react"

export default function SloganTaxt() {
  let minWidth1500 = useMediaQuery("(min-width: 1500px)")
  return (
    <h1
      style={{
        fontSize: minWidth1500 ? "1.5rem" : "1.2rem",
        fontWeight: "400",
        margin: "0",
        textAlign: "center",
        textTransform: "capitalize",
        textShadow: "0 0 2px #323232",
      }}
    >
      discover the new you.
    </h1>
  )
}
