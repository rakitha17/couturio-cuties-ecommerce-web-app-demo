import * as React from "react"
//LINK - packages
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { Typography, useMediaQuery } from "@mui/material"

export default function SizeFilteringComponents({
  title,
  sizes,
  handleSizeFilterFunc,
}) {
  let minWidth900 = useMediaQuery("(min-width: 900px)")

  return (
    <FormGroup
      style={{ display: "flex", flexDirection: minWidth900 ? "column" : "row" }}
    >
      {/* <Typography>{title}</Typography> */}
      {sizes.map((val, index) => {
        return (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                size="small"
                checked={val.value}
                name={val.name}
                onChange={handleSizeFilterFunc}
              />
            }
            label={val.name.toUpperCase()}
          />
        )
      })}
    </FormGroup>
  )
}
