import * as React from "react"
//LINK - packages
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#999",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#323232 !important",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #999",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "10px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          left: "calc(1.5rem * .5) !important",
          backgroundColor: "#323232",
          color: "#fff",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#DDD0C8",
            color: "#000",
          },
          "&.Mui-selected": {
            backgroundColor: "#696969 !important",
            color: "#fff !important",
          },
        },
      },
    },
  },
})

export default function SortFilteringComponent({
  sortCatArr,
  filteredListFunc,
}) {
  const [sort, setSort] = React.useState("default")

  const handleChange = (event) => {
    setSort(event.target.value)
    filteredListFunc("sort", event.target.value)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{
                color: "#000",
                fontFamily: "DM Sans",
                fontWeight: "600",
              }}
            >
              Sort
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sort"
              onChange={handleChange}
              style={{ fontFamily: "DM Sans", fontSize: "1rem" }}
            >
              <MenuItem value="default">Select</MenuItem>
              {sortCatArr.map((val, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={val.value}
                    style={{ fontFamily: "DM Sans", fontSize: ".9rem" }}
                  >
                    {val.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
      </ThemeProvider>
    </>
  )
}

// sx={[{'&:focus': {backgroundColor: 'red'}}, {'.Mui-selected': {backgroundColor: 'yellow'}}]}
// left: 'calc(1.5rem * .5)'
