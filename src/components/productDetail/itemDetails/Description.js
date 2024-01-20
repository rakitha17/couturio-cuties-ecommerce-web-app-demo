import React from "react"

export default function Description({ addItem }) {
  return (
    <>
      <p
        style={{
          margin: 0,
          color: "#323232",
          fontSize: "1rem",
          fontWeight: "600",
        }}
      >
        Description
      </p>
      <p style={{ margin: 0, fontSize: ".9rem", textIndent: "20px" }}>
        {addItem.description}
      </p>
    </>
  )
}
