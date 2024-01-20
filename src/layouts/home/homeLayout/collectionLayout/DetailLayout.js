import { useMediaQuery } from "@mui/material"
import React from "react"

export default function DetailLayout({ collection }) {
  let minWidth1500 = useMediaQuery("(min-width: 1500px)")
  return (
    <div>
      <h1
        style={{
          fontSize: minWidth1500 ? "1.5rem" : "1.2rem",
          fontWeight: "600",
          textTransform: "capitalize",
        }}
      >
        {collection.title} Collection
      </h1>
      <p
        style={{
          fontSize: minWidth1500 ? "1rem" : ".9rem",
          textTransform: "capitalize",
          margin: "0",
        }}
      >
        {collection.description}
      </p>
    </div>
  )
}
