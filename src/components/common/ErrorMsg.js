import { Typography } from "@mui/material"
import React from "react"

export default function ErrorMsg({ content }) {
  return (
    <div style={{ padding: "0 20%" }}>
      <Typography
        style={{
          fontFamily: "DM Sans",
          fontSize: '1.2rem',
          fontWeight: "600",
          textAlign: "center",
          letterSpacing: ".5px",
        }}
      >
        {content}
      </Typography>
    </div>
  )
}
