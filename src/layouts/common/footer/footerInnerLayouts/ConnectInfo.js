import React from "react"

import ContactInfo from "./contactInfo/ContactInfo"

const connectInfo = [
  { title: "our address", line1: "Badulla 66", line2: "814 17 Passara" },
  {
    title: "contact us",
    line1: "info@couturio_cuties.com",
    line2: "+94768476609",
  },
]

export default function ConnectInfo() {
  return (
    <div>
      {connectInfo.map((val, index) => {
        return (
          <div key={index} style={{ marginBottom: index === 0 ? "10px" : "0" }}>
            <ContactInfo
              index={index}
              title={val.title}
              line1={val.line1}
              line2={val.line2}
            />
          </div>
        )
      })}
    </div>
  )
}
