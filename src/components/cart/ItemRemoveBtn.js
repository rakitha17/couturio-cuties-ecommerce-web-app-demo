import * as React from "react"
//LINK - packages
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { DeleteForever as DeleteForeverIcon } from "@mui/icons-material"
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material"
//LINK - project components
import RemoveProduct from "./itemRemoveBtn/RemoveProduct"

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, .1)",
          },
          "&:focus": {
            backgroundColor: "rgba(255, 255, 255, .1)",
          },
        },
      },
    },
  },
})

export default function ItemRemoveBtn({ removeProduct, productItem }) {
  const [open, setOpen] = React.useState(false)
  let minWidth768 = useMediaQuery("(min-width: 768px)")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button
        variant="contained"
        startIcon={<DeleteForeverIcon />}
        style={{ fontFamily: "DM Sans", backgroundColor: "#DC143C" }}
        onClick={handleClickOpen}
        size={minWidth768 ? "medium" : "small"}
      >
        Remove
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            color: "#fff",
            fontFamily: "DM Sans",
            fontSize: "1.2rem",
            backgroundColor: "#323232",
          }}
        >
          {"Are you sure you want to remove this item from the cart ?"}
        </DialogTitle>
        <DialogContent style={{ paddingTop: "20px" }}>
          <RemoveProduct productItem={productItem} />
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#323232" }}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={handleClose}
              style={{ color: "#fff", fontFamily: "DM Sans" }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                return handleClose(), removeProduct()
              }}
              autoFocus
              style={{ color: "#fff", fontFamily: "DM Sans" }}
            >
              Remove
            </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
