import React from "react"
//LINK - packages
import { useMediaQuery } from "@mui/material"
import { motion } from "framer-motion"

export default function SingleText({ txt, index }) {
  let minWidth1500 = useMediaQuery("(min-width: 1500px)")
  let minWidth425 = useMediaQuery("(min-width: 425px)")

  const childVariant = {
    rest: {
      transition: { duration: 0.2, ease: "easeOut", type: "twean" },
    },
    hover: {
      color: index === 1 ? "#FF4500" : "#ddd",
      transition: { duration: 0.2, ease: "easeIn", type: "twean" },
    },
  }

  return (
    <motion.p
      variants={childVariant}
      style={{
        margin: "0",
        color: index === 1 ? "#FF4500" : "#323232",
        fontWeight: "600",
        // fontSize: index === 0 ? "1rem" : index === 1 ? "2rem" : ".8rem",
        fontSize: minWidth1500
          ? index === 0
            ? "1.2rem"
            : index === 1
            ? "2.2rem"
            : "1rem"
          : minWidth425
          ? index === 0
            ? "1rem"
            : index === 1
            ? "2rem"
            : ".8rem"
          : index === 0
          ? ".9rem"
          : index === 1
          ? "1.5rem"
          : ".7rem",
        textTransform: index === 2 ? "capitalize" : "uppercase",
        letterSpacing: ".5px",
        transition: "color .5s",
      }}
    >
      {txt}
    </motion.p>
  )
}
