import * as React from "react"
//LINK - packages
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
//LINK - project components
import SingleSizeComponent from "./sizeGroup/SingleSizeComponent"

export default function SizeGroup({ addItem, setAddItem }) {
  const handleChange = (e) => {
    setAddItem({
      ...addItem,
      sizeChecked: "checked",
      orderSize: [e.target.value],
    })
  }

  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        style={{
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: "1.2rem",
          fontWeight: "600",
        }}
      >
        Sizes
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="radio buttons group of available product sizes"
        name="row-radio-buttons-group"
      >
        {addItem.size.map((val, index) => {
          return (
            <FormControlLabel
              key={index}
              value={val}
              control={
                <Radio
                  sx={{
                    color: "#323232",
                    "&.Mui-checked": {
                      color: "#DC143C",
                    },
                  }}
                  onChange={handleChange}
                />
              }
              label={<SingleSizeComponent val={val} />}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}
