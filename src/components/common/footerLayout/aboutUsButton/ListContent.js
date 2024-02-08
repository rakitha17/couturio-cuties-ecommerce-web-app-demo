import React from "react"
//LINK - packages
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import { ThemeProvider, createTheme } from "@mui/material"
import { motion } from "framer-motion"

const theme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "DM Sans",
          fontSize: ".95rem",
        },
      },
    },
  },
})

export default function ListContent({ question, index }) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <ListItem
        button
        style={{ justifyContent: index % 2 !== 0 ? "flex-end" : "flex-start" }}
      >
        <ThemeProvider theme={theme}>
          <motion.p
            style={{
              margin: 0,
              padding: "2px",
              fontFamily: "DM Sans",
              fontWeight: "600",
              backgroundColor: "#DDD0C8",
              borderRadius: "2px",
            }}
            initial={{ x: index % 2 !== 0 ? "100vw" : "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {question}
          </motion.p>
        </ThemeProvider>
      </ListItem>
      <Divider />
    </div>
  )
}
