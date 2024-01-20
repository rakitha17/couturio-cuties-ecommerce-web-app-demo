import React from "react"
//LINK - packages
import Overlay from "react-bootstrap/Overlay"
import Tooltip from "react-bootstrap/Tooltip"

export default function ToolTip({ target, toolTip }) {
  const { display, content } = toolTip
  return (
    <Overlay target={target.current} show={display} placement="right">
      {(props) => (
        <Tooltip id="overlay-example" {...props}>
          <span
            style={{
              color: "#DDD0C8",
              fontFamily: "DM Sans",
              fontSize: ".8rem",
            }}
          >
            {content}
          </span>
        </Tooltip>
      )}
    </Overlay>
  )
}
