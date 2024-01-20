import React from "react"
//LINK - packages
import Button from "@mui/material/Button"
import { useMediaQuery } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import AddCartTooltip from "../../common/AddCartTooltip"
import SnackBarComponent from "../../common/SnackBarComponent"

export default function AddCart({ addItem, setAddItem, addProductToCartFunc }) {
  const { qtyCount, remainingQty, sizeChecked } = addItem
  let minWidth900 = useMediaQuery("(min-width: 900px)")
  let minWidth600 = useMediaQuery("(min-width: 600px)")

  const target = React.useRef(null)
  let [change, setChange] = React.useState(0)
  let [snackbar, setSnackbar] = React.useState(false)
  let [toolTip, setToolTip] = React.useState(false)

  React.useEffect(() => {
    setToolTip(false)
  }, [sizeChecked])

  const handleCartBtn = () => {
    setChange(change + 1)
    if (sizeChecked === "checked") {
      return remainingQty - qtyCount >= 0
        ? (setAddItem({ ...addItem, remainingQty: remainingQty - qtyCount }),
          setSnackbar(true), addProductToCartFunc())
        : setSnackbar(false)
    } else if (remainingQty > 0) {
      setToolTip(true)
    }
  }

  return (
    <>
      <Button
        style={{
          color: "#DDD0C8",
          fontFamily: "DM Sans",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "1px",
          width: minWidth900 ? "50%" : minWidth600 ? "40%" : "100%",
          backgroundColor: "#323232",
        }}
        startIcon={<AddShoppingCart />}
        ref={target}
        onClick={handleCartBtn}
      >
        Add to Cart
      </Button>
      <AddCartTooltip
        target={target}
        toolTip={toolTip}
        remainingQty={remainingQty}
      />
      <SnackBarComponent
        change={change}
        snackbar={snackbar}
        addItem={addItem}
      />
    </>
  )
}
