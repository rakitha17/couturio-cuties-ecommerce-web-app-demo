import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
//LINK - project components
import SingleProduct from "./productListlayout/SingleProduct"

export default function ProductListLayout({ productList }) {
  return (
    <div>
      <Grid container spacing={2}>
        {productList.map((val, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <SingleProduct product={val} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
