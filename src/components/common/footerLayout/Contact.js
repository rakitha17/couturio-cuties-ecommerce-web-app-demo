import React from "react"

export default function Contact({ line1, line2 }) {
  return (
    <span style={{ display: "block" }}>
      <a
        href="/"
        style={{
          color: "#ddd",
          fontSize: ".8rem",
        }}
      >
        {line1}
      </a>
      <br />
      <a
        href="/"
        style={{
          color: "#ddd",
          fontSize: ".8rem",
        }}
      >
        {line2}
      </a>
    </span>
  )
}
