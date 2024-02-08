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
//LINK - project components
import SwitchBtn from "./aboutUsButton/SwitchBtn"
import ListContent from "./aboutUsButton/ListContent"

const questions = [
  "gg I want to return my purchase! What do I do?",
  "I would like to return a gift that was sent to me. How do I do that?",
  "Can I exchange my order instead of returning it?",
  "I printed out my label and misplaced it. How can I retrieve it again?",
  "How long does it take for me to get a refund?",
  "Do your pre-paid labels cover international returns?",
  "I am returning an item purchased with a Gift Certificate or Gift Card, how does that work?",
  "I only see the option to return my order through UPS on the website. Am I able to return through USPS instead?",
  "What is Drop-off without shipping box and label?",
]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AboutusButton() {
  const [open, setOpen] = React.useState(false)

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
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{
                ml: 2,
                flex: 1,
                fontFamily: "DM Sans",
                textAlign: "center",
                letterSpacing: ".5px",
              }}
              variant="h6"
              component="div"
            >
              Frequently Asked Questions
            </Typography>
            <SwitchBtn />
          </Toolbar>
        </AppBar>
        <List>
          {questions.map((q, index) => {
            return <ListContent key={index} question={q} index={index} />
          })}
        </List>
      </Dialog>
    </React.Fragment>
  )
}
