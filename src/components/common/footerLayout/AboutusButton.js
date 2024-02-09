import * as React from "react"
//LINK - packages
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import List from "@mui/material/List"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"
import { useMediaQuery } from "@mui/material"
//LINK - project components
import SwitchBtn from "./aboutUsButton/SwitchBtn"
import ListContent from "./aboutUsButton/ListContent"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AboutusButton() {
  const [open, setOpen] = React.useState(false)
  let minWidth600 = useMediaQuery("(min-width: 600px)")
  let minWidth425 = useMediaQuery("(min-width: 425px)")
  let minWidth375 = useMediaQuery("(min-width: 375px)")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        style={{
          border: "none",
          backgroundColor: "#DDD0C8",
          color: "#323232",
          fontFamily: "DM Sans",
          fontSize: ".9rem",
          fontWeight: "600",
          textTransform: "capitalize",
        }}
        onClick={handleClickOpen}
      >
        FAQs
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#323232" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon
                style={{
                  fontSize: minWidth600
                    ? "1.2rem"
                    : minWidth425
                    ? "1rem"
                    : minWidth375
                    ? ".9rem"
                    : ".8rem",
                }}
              />
            </IconButton>
            <Typography
              sx={{
                ml: 2,
                flex: 1,
                fontFamily: "DM Sans",
                fontSize: minWidth600
                  ? "1.2rem"
                  : minWidth425
                  ? "1rem"
                  : minWidth375
                  ? ".9rem"
                  : ".8rem",
                textAlign: "center",
                letterSpacing: ".5px",
              }}
              component="div"
            >
              Frequently Asked Questions
            </Typography>
            <SwitchBtn />
          </Toolbar>
        </AppBar>
        <List>
          <ListContent />
        </List>
      </Dialog>
    </React.Fragment>
  )
}
