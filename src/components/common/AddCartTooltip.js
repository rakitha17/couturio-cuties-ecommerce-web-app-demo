import React from "react"
//LINK - packages
import Overlay from "react-bootstrap/Overlay"
import Tooltip from "react-bootstrap/Tooltip"

export default function AddCartTooltip({ target, toolTip, remainingQty }) {
  return (
    <>
      <Overlay target={target.current} show={toolTip} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <span
              style={{
                color: "#DDD0C8",
                fontFamily: "DM Sans",
                fontSize: ".8rem",
              }}
            >
              {toolTip === true && "Please select one of the sizes above."}
            </span>
          </Tooltip>
        )}
      </Overlay>
    </>
  )
}
