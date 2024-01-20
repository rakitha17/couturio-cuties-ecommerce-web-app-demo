import React from "react"
import HeaderLayout from "./header/HeaderLayout"
import FooterLayout from "./footer/FooterLayout"

export default function CommonLayout({ children }) {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <HeaderLayout />
      {children}
      <div style={{ marginTop: "auto" }}>
        <FooterLayout />
      </div>
    </div>
  )
}
