import React from "react"

import Address from '../../../../../components/common/footerLayout/Address'
import Contact from "../../../../../components/common/footerLayout/Contact"

export default function ContactInfo({ index, title, line1, line2 }) {
  return (
    <>
      <p
        style={{
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "600",
          textTransform: "capitalize",
          margin: "0",
        }}
      >
        {title}
      </p>
      <div>
        {index === 0 ? (
          <Address line1={line1} line2={line2} />
        ) : (
          <Contact line1={line1} line2={line2} />
        )}
      </div>
    </>
  )
}
