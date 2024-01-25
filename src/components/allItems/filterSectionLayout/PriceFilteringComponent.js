import * as React from "react"
//LINK - utilities
import { priceValueFormat } from "../../../utilities/priceValueFormat"
//LINK - packages
import Slider from "@mui/material/Slider"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Grid } from "@mui/material"

const PrettoSlider = styled(Slider)({
  color: "#32CD32",
  height: 6,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
    backgroundColor: "#DDD0C8",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#32CD32",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
})

export default function PriceFilteringComponent({
  priceFilter,
  filteredListFunc,
}) {
  let [values, setValues] = React.useState(priceFilter)

  const handleSlider = () => {
    filteredListFunc("price", values)
  }

  React.useEffect(() => {
    setValues(priceFilter)
  }, [priceFilter])

  return (
    <Box>
      <div
        style={{
          marginBottom: "10px",
          padding: "5px",
          backgroundColor: "#323232",
          borderRadius: '4px'
        }}
      >
        <Typography
          style={{ color: "#DDD0C8", fontFamily: "DM Sans", fontSize: "1rem" }}
        >
          Price
        </Typography>
      </div>

      <Box sx={{ m: 2 }} />
      <Grid container justifyContent={"space-between"}>
        <Typography
          style={{
            fontFamily: "DM Sans",
            fontSize: ".8rem",
            fontWeight: "600",
          }}
        >
          {priceValueFormat(priceFilter[0])}
        </Typography>
        <Typography
          style={{
            fontFamily: "DM Sans",
            fontSize: ".8rem",
            fontWeight: "600",
          }}
        >
          {priceValueFormat(priceFilter[1])}
        </Typography>
      </Grid>
      <PrettoSlider
        valueLabelDisplay="auto"
        defaultValue={20}
        min={500}
        max={10000}
        step={500}
        value={values}
        onChange={(e, newValue) => setValues(newValue)}
        onChangeCommitted={handleSlider}
      />
    </Box>
  )
}
