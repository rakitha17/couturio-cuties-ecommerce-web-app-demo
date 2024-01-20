import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
//LINK - project components
import CommonLayout from "../common/CommonLayout"
import ProductDetailLayout from "./productDetailBody/ProductDetailLayout"

export default function ProductDetailBody() {
  let productStore = useSelector((store) => store.productStore)
  return (
    <CommonLayout>
      <div style={{ padding: "calc(1.5rem * .5)", overflow: "hidden" }}>
        <Grid container>
          <Grid item xs={0} md={0} lg={1}></Grid>
          <Grid item xs={12} md={12} lg={10}>
            <ProductDetailLayout product={productStore.selectedProduct} />
          </Grid>
          <Grid item xs={0} md={0} lg={1}></Grid>
        </Grid>
      </div>
    </CommonLayout>
  )
}
