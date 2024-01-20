import React, { useRef } from "react"
//LINK - packages
import IconButton from "@mui/material/IconButton"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
//LINK - project components
import ToolTip from "./quantity/ToolTip"
import QtyNumber from "./quantity/QtyNumber"

export default function Quantity({ addItem, setAddItem }) {
  const target = useRef(null)
  const { qtyCount, remainingQty } = addItem
  let [toolTip, setToolTip] = React.useState({
    display: false,
    content: "",
  })

  React.useEffect(() => {
    if (qtyCount >= 10) {
      setToolTip({
        display: true,
        content: "Maximum of 10 quantities apply for the cart at one time.",
      })
    }
    if (qtyCount === remainingQty || qtyCount > remainingQty) {
      setToolTip({
        display: true,
        content: `only ${remainingQty} quantity(s) available.`,
      })
    }
    if (remainingQty === 0) {
      setToolTip({
        display: true,
        content: "No quantity(s) available.",
      })
    }
    if (qtyCount < 10 && qtyCount < remainingQty) {
      setToolTip({
        display: false,
        content: "",
      })
    }
  }, [qtyCount, remainingQty])

  const removeQtyFunc = () => {
    qtyCount - 1 > 0 && setAddItem({ ...addItem, qtyCount: qtyCount - 1 })
  }
  const addQtyFunc = () => {
    if (remainingQty < 10) {
      return qtyCount + 1 <= remainingQty
        ? setAddItem({ ...addItem, qtyCount: qtyCount + 1 })
        : null
    }
    if (remainingQty >= 10) {
      return (
        qtyCount + 1 <= 10 && setAddItem({ ...addItem, qtyCount: qtyCount + 1 })
      )
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <IconButton
        aria-label="remove"
        size="medium"
        style={{ padding: 0 }}
        onClick={removeQtyFunc}
      >
        <RemoveCircleIcon fontSize="inherit" />
      </IconButton>
      <div style={{ width: "18px", margin: "0 5px", textAlign: "center" }}>
        <QtyNumber qtyCount={qtyCount} />
      </div>
      <ToolTip target={target} toolTip={toolTip} />
      <IconButton
        aria-label="add"
        size="medium"
        style={{ padding: 0 }}
        onClick={addQtyFunc}
        ref={target}
      >
        <AddCircleIcon fontSize="inherit" />
      </IconButton>
    </div>
  )
}

/* React.useEffect(() => {
  if (remainingQty > 10 && count === 10) {
    setToolTip({
      display: true,
      content: "Purchase only 10 quantities per one turn.",
    })
  } else if (remainingQty <= 10 && count >= remainingQty) {
    setToolTip({
      display: true,
      content: `Only ${remainingQty} qunatity(s) available in this product.`,
    })
  } else if (remainingQty === 0) {
    setToolTip({
      display: true,
      content: "Sorry, This item not available.",
    })
  }
}, [count, remainingQty])

const removeItem = () => {
  if (remainingQty > 0 && count - 1 > 0) {
    setLogic({
      ...logic,
      count: count - 1,
    })
    setToolTip({
      display: false,
    })
  }
}
const addItem = () => {
  if (remainingQty > 10 && count + 1 <= 10) {
    setLogic({
      ...logic,
      count: count + 1,
    })
  } else if (remainingQty <= 10 && count + 1 <= remainingQty) {
    setLogic({
      ...logic,
      count: count + 1,
    })
  }
} */
