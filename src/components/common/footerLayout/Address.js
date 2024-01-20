import React from "react"

export default function Address({ line1, line2 }) {
  return (
    <span style={{ display: "block" }}>
      <p style={{ margin: "0", color: "#ddd", fontSize: ".8rem" }}>{line1}</p>
      <p style={{ margin: "0", color: "#ddd", fontSize: ".8rem" }}>{line2}</p>
    </span>
  )
}
