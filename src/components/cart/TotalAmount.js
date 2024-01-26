import React from "react"
//LINK - sources
import { priceValueFormat } from "../../utilities/priceValueFormat"
//LINK - packages
import { useSelector } from "react-redux"
import { Typography, useMediaQuery } from "@mui/material"

export default function TotalAmount() {
  let cartStore = useSelector((store) => store.cartStore)
  const { cartProduct } = cartStore
  let minWidth600 = useMediaQuery("(min-width: 600px)")

  let totalAmount = cartProduct.reduce((tot, val) => {
    return tot + val.productItem.price * val.orderDetails.qty
  }, 0)

  return (
    <>
      {cartProduct.length > 0 && (
        <div
          style={{
            padding: "5px 10px",
            textAlign: "right",
            backgroundColor: "#323232",
            borderRadius: "4px",
          }}
        >
          <Typography
            style={{
              color: "#fff",
              fontFamily: "DM Sans",
              fontSize: minWidth600 ? "1rem" : ".9rem",
              fontWeight: "500",
              letterSpacing: ".5px",
            }}
          >
            Total Amount : {priceValueFormat(totalAmount)}
          </Typography>
        </div>
      )}
    </>
  )
}
