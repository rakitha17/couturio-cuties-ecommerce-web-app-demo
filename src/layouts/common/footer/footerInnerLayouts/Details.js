import React from "react"

import AboutusButton from '../../../../components/common/footerLayout/AboutusButton'
import WorkingHours from "../../../../components/common/footerLayout/WorkingHours"

export default function Details() {
  return (
    <div>
      <WorkingHours />
      <div style={{ marginTop: "10px" }}>
        <AboutusButton />
      </div>
    </div>
  )
}
