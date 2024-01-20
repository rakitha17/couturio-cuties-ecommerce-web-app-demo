import React from "react"

import Button from "@mui/material/Button"
import { useMediaQuery } from "@mui/material"

export default function Btn() {
  let maxWidth425 = useMediaQuery("(max-width: 425px)")
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "#323232",
        color: "#DDD0C8",
        fontFamily: "DM Sans",
        fontSize: maxWidth425 && ".75rem",
        fontWeight: "400",
      }}
    >
      Find More
    </Button>
  )
}
