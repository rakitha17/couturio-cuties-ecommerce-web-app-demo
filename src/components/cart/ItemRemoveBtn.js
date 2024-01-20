import * as React from "react"
//LINK - packages
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { DeleteForever as DeleteForeverIcon } from "@mui/icons-material"
import { useMediaQuery } from "@mui/material"

export default function ItemRemoveBtn() {
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
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
