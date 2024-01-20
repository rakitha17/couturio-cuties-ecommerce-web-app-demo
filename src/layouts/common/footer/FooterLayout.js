import React from "react"

import { useMediaQuery } from "@mui/material"

import SocialAccounts from "./footerInnerLayouts/SocialAccounts"
import Details from "./footerInnerLayouts/Details"
import ConnectInfo from "./footerInnerLayouts/ConnectInfo"

export default function FooterLayout() {
  let minWidth650 = useMediaQuery("(min-width: 650px)")

  return (
    <div
      style={{
        width: "100%",
        padding: "calc(1.5rem * .5)",
        backgroundColor: "#323232",
        overflow: "hidden",
        display: "grid",
        gridAutoFlow: "column",
        gridTemplateColumns: minWidth650 ? "80% 20%" : "60% 40%",
      }}
    >
      <div
        style={{
          gridColumn: "1 / 2",
          display: "flex",
          flexDirection: minWidth650 ? "row" : "column",
          alignItems: minWidth650 ? "center" : "flex-start",
        }}
      >
        <div style={{ flex: 1 }}>
          <ConnectInfo />
        </div>
        <div
          style={{
            flex: 4,
            textAlign: minWidth650 ? "center" : "left",
            marginTop: minWidth650 ? "0" : "20px",
          }}
        >
          <SocialAccounts />
        </div>
      </div>
      <div
        style={{
          gridColumn: "2 / 3",
          display: "flex",
          alignItems: "flex-start",
          marginLeft: 'auto'
        }}
      >
        <Details />
      </div>
    </div>
  )
}
