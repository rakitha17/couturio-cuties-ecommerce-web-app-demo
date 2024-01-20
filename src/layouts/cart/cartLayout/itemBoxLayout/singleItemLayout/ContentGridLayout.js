import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
//LINK - project components
import {
  Image,
  ItemDesc,
  OrderInfo,
} from "../../../../../components/cart/layouts"

export default function ContentGridLayout({ productItem, orderDetails }) {
  const { productName, productType, images, description, price, SKU } =
    productItem
  const { size, qty } = orderDetails

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Image image={images} />
      </Grid>
      <Grid item xs={5}>
        <ItemDesc
          name={productName}
          type={productType}
          desc={description}
          price={price}
          sku={SKU}
        />
      </Grid>
      <Grid item xs={5}>
        <OrderInfo orderSize={size} orderQty={qty} total={price * qty} />
      </Grid>
    </Grid>
  )
}
