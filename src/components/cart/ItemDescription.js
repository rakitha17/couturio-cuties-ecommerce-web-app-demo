import React from "react"
//LINK - packages
import { Typography, useMediaQuery } from "@mui/material"
//LINK - utilities
import { priceValueFormat } from "../../utilities/priceValueFormat"

export default function ItemDescription({ name, type, desc, price, sku }) {
  let minWidth768 = useMediaQuery("(min-width: 768px)")

  return (
    <>
      <Typography
        style={{
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: minWidth768 ? "1rem" : ".9rem",
          fontWeight: "600",
          textTransform: "capitalize",
          marginBottom: "10px",
        }}
      >
        {name}{" "}
        <span
          style={{
            color: "#aaa",
            fontFamily: "DM Sans",
            fontSize: minWidth768 ? ".8rem" : ".7rem",
          }}
        >
          {sku}
        </span>
      </Typography>
      <Typography
        style={{
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: minWidth768 ? ".9rem" : ".8rem",
          marginBottom: "5px",
        }}
      >
        Product Type:{" "}
        <span
          style={{
            fontWeight: "600",
            fontSize: minWidth768 ? ".9rem" : ".8rem",
            textTransform: "capitalize",
          }}
        >
          {type}
        </span>
      </Typography>
      <Typography
        style={{
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: minWidth768 ? ".9rem" : ".8rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          marginBottom: "5px",
        }}
      >
        Description:{" "}
        <span
          style={{
            fontWeight: "600",
            fontSize: minWidth768 ? ".9rem" : ".8rem",
            display: "contents",
          }}
        >
          {desc}
        </span>
      </Typography>
      <Typography
        style={{
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: minWidth768 ? ".9rem" : ".8rem",
        }}
      >
        Price:{" "}
        <span
          style={{
            fontWeight: "600",
            fontSize: minWidth768 ? ".9rem" : ".8rem",
          }}
        >
          {priceValueFormat(price)}
        </span>
      </Typography>
    </>
  )
}
