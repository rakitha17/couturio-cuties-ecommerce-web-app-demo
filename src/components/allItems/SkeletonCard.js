import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function SkeletonCard({ cards }) {
  return (
    <Grid container spacing={2}>
      {Array(cards)
        .fill(0)
        .map((_, key) => {
          return (
            <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
              <div>
                <Skeleton
                  borderRadius="5px"
                  style={{ aspectRatio: 7 / 10, marginBottom: "10px" }}
                />
                <Skeleton count={3} style={{marginBottom: '10px'}} />
              </div>
            </Grid>
          )
        })}
    </Grid>
  )
}
