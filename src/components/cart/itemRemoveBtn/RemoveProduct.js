import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
//LINK - sources
import image from "../../../assets/images/allIems/singleProducts/image-2.jpg"
//LINK - project components
import ItemImage from "../ItemImage"
import ItemDescription from "../ItemDescription"

export default function RemoveProduct({ productItem }) {
  const { images, price, productName, productType, description, sku } =
    productItem
  return (
    <Grid container spacing={2} alignItems={'center'} style={{ height: "100%" }}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <ItemImage image={image} />
      </Grid>
      <Grid item xs={8} style={{ paddingTop: "20px" }}>
        <ItemDescription
          name={productName}
          type={productType}
          desc={description}
          price={price}
          sku={sku}
        />
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  )
}
