import * as React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { ThemeProvider, Typography, createTheme } from "@mui/material"

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#323232",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: "DM Sans",
          fontSize: ".9rem",
          fontWeight: 600,
        },
      },
    },
  },
})

export default function SizeFilteringComponents({
  sizeFilter,
  filteredListFunc,
}) {
  return (
    <>
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
          Size
        </Typography>
      </div>
      <ThemeProvider theme={theme}>
        <FormGroup>
          {sizeFilter.map((val, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={val.value}
                    name={val.name}
                    size="small"
                    onChange={(e) => filteredListFunc("size", e.target)}
                  />
                }
                label={val.name.toUpperCase()}
              />
            )
          })}
        </FormGroup>
      </ThemeProvider>
    </>
  )
}
