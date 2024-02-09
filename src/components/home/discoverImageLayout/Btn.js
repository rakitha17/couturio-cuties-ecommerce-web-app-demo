import React from "react"
//LINK - packages
import Button from "@mui/material/Button"
import { useMediaQuery } from "@mui/material"
// import { motion } from "framer-motion"

/* const childVariant = {
  rest: {
    transition: { duration: 0.2, ease: "easeOut", type: "twean" },
  },
  hover: {
    transition: { duration: 0.5, ease: "easeIn", type: "twean" },
  },
} */

export default function Btn() {
  let maxWidth425 = useMediaQuery("(max-width: 425px)")
  return (
    <Button
      // component={motion.div}
      variant="contained"
      // variants={childVariant}
      style={{
        backgroundColor: "#323232",
        color: "#DDD0C8",
        fontFamily: "DM Sans",
        fontSize: maxWidth425 && ".75rem",
        fontWeight: "400",
      }}
    >
      Find More
    </Button>
  )
}
