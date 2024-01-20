import { Grid } from "@mui/material"
import React from "react"
import SingleSize from "./sizes/SingleSize"

const defaultSizes = ["xs", "s", "m", "l", "xl"]

export default function Sizes({ availableSizes }) {
  let [sizesArr, setSizes] = React.useState([])

  React.useEffect(() => {
    let tempArr = []
    if (availableSizes) {
      defaultSizes.forEach((size) => {
        tempArr.push({
          value: size,
          isAvailable: availableSizes.includes(size)
        })
        // if (availableSizes.includes(size)) {
        //   tempArr.push({
        //     value: size,
        //     isAvailable: true,
        //   })
        // } else {
        //   tempArr.push({
        //     value: size,
        //     isAvailable: false,
        //   })
        // }
      })
    }

    setSizes(tempArr)
  }, [availableSizes])

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        {sizesArr.map((val, index) => {
          return (
            <Grid
              key={index}
              item
              xs={2}
            >
              <SingleSize size={val.value} isAvailable={val.isAvailable} />
            </Grid>
          )
        })}
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  )
}
