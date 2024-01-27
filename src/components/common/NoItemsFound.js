import React from "react"
//LINK - project components
import Illustrator from "./noItemsFound/Illustrator"
import { Grid, Typography, useMediaQuery } from "@mui/material"

export default function NoItemsFound({ content, image }) {
  let minWidth600 = useMediaQuery("(min-width: 600px)")
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        style={{ padding: "0 20%" }}
      >
        <Grid item xs={12} sm={6}>
          <Illustrator image={image} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            style={{
              fontFamily: "DM Sans",
              fontSize: minWidth600 ? "1.2rem" : "1rem",
              fontWeight: 600,
              textAlign: "center",
              letterSpacing: ".5px",
            }}
          >
            {content}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
