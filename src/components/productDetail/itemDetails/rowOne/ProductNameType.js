import React from "react"
//LINK - packages
import { Typography, useMediaQuery } from "@mui/material"

export default function ProductNameType({addItem}) {
  const { productName, productType } = addItem
  let minWidth768 = useMediaQuery("(min-width: 768px)")
  let minWidth375 = useMediaQuery("(min-width: 375px)")
  return (
    <Typography
      style={{
        margin: 0,
        fontFamily: "DM Sans",
        fontSize: minWidth768 ? "1.8rem" : minWidth375 ? "1.5rem" : "1.3rem",
        fontWeight: "600",
        textTransform: "capitalize",
        letterSpacing: ".5px",
      }}
    >
      {
        typeof(productType) === 'string' ? (
          productType.trim() !== '' ? (
            typeof(productName) === 'string' ? (
              productName.trim() !== '' ? `${productName} : ${productType}` : productType
            ) : productType
          ) : <span style={{fontSize: '.8rem', fontWeight: '100'}}>Product and Name are not mentioned</span>
        ) : <span style={{fontSize: '.8rem', fontWeight: '100'}}>Product and Name are not mentioned</span>
      }
    </Typography>
  )
}
