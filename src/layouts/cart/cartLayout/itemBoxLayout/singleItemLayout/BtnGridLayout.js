import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
//LINK - project components
import { Remove } from "../../../../../components/cart/layouts"

export default function BtnGridLayout() {
  return (
    <Grid
      container
      height={"100%"}
      justifyContent={"flex-end"}
      alignItems={"flex-end"}
    >
      <Grid item>
        <Remove />
      </Grid>
    </Grid>
  )
}
