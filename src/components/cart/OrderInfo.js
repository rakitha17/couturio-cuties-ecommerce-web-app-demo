import React from "react"
//LINK - packages
import { Typography, useMediaQuery } from "@mui/material"
//LINK - utilities
import { priceValueFormat } from "../../utilities/priceValueFormat"

export default function OrderInfo({ orderSize, orderQty, total }) {
  let minWidth768 = useMediaQuery("(min-width: 768px)")

  return (
    <>
      <Typography
        style={{
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: minWidth768 ? "1rem" : ".9rem",
          fontWeight: "600",
          marginBottom: "10px",
        }}
      >
        Order Details
      </Typography>
      <Typography
        style={{
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: minWidth768 ? ".9rem" : ".8rem",
        }}
      >
        Size:{" "}
        <span
          style={{
            fontWeight: "600",
            fontSize: minWidth768 ? ".9rem" : ".8rem",
          }}
        >
          {orderSize.toUpperCase()}
        </span>
      </Typography>
      <Typography
        style={{
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: minWidth768 ? ".9rem" : ".8rem",
        }}
      >
        Quantity:{" "}
        <span
          style={{
            fontWeight: "600",
            fontSize: minWidth768 ? ".9rem" : ".8rem",
          }}
        >
          {orderQty}
        </span>
      </Typography>
      <Typography
        style={{
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: minWidth768 ? ".9rem" : ".8rem",
        }}
      >
        Total:{" "}
        <span
          style={{
            fontWeight: "600",
            fontSize: minWidth768 ? ".9rem" : ".8rem",
          }}
        >
          {priceValueFormat(total)}
        </span>
      </Typography>
    </>
  )
}
