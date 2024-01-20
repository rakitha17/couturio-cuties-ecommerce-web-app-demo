import * as React from "react"
//LINK - packages
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export default function DropdownFilteringComponent({ options, handleDropdownFunc }) {
  const [sort, setSort] = React.useState("default")

  const handleChange = (event) => {
    setSort(event.target.value)
    handleDropdownFunc(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value='default'>Select</MenuItem>
          {options.map((val, index) => {
            return (
              <MenuItem key={index} value={val.value}>
                {val.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
