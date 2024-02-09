import React from "react"
//LINK - packages
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

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

export default function ListContent() {
  let minWidth600 = useMediaQuery("(min-width: 600px)")
  let minWidth425 = useMediaQuery("(min-width: 425px)")
  let minWidth375 = useMediaQuery("(min-width: 375px)")
  const { t } = useTranslation()

  const questions = t("questions", { returnObjects: true })

  return (
    <div style={{ overflowX: "hidden" }}>
      {questions.map((q, index) => {
        return (
          <div key={index}>
            <ListItem
              button
              style={{
                justifyContent: index % 2 !== 0 ? "flex-end" : "flex-start",
              }}
            >
              <ThemeProvider theme={theme}>
                <motion.p
                  style={{
                    margin: 0,
                    padding: "2px",
                    fontFamily: "DM Sans",
                    fontSize: minWidth600
                      ? "1rem"
                      : minWidth425
                      ? ".9rem"
                      : minWidth375
                      ? ".8rem"
                      : ".7rem",
                    fontWeight: "600",
                    backgroundColor: "#DDD0C8",
                    borderRadius: "2px",
                  }}
                  initial={{ x: index % 2 !== 0 ? "100vw" : "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {q}
                </motion.p>
              </ThemeProvider>
            </ListItem>
            <Divider />
          </div>
        )
      })}
    </div>
  )
}
