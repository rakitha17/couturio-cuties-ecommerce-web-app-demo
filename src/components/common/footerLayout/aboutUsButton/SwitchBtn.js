import * as React from "react"
//LINK - packages
import { styled } from "@mui/material/styles"
import FormGroup from "@mui/material/FormGroup"
import Switch from "@mui/material/Switch"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "@mui/material"
//LINK - utilities
import i18n from "../../../../i18next"

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#32CD32",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "#32CD32" : "rgba(255,255,255,.3)",
    boxSizing: "border-box",
  },
}))

export default function SwitchBtn() {
  // const [langValue, setLangValue] = React.useState(false)
  let minWidth600 = useMediaQuery("(min-width: 600px)")
  let minWidth425 = useMediaQuery("(min-width: 425px)")
  let minWidth375 = useMediaQuery("(min-width: 375px)")
  const { t } = useTranslation()

  const handleChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "sin" : "en")
  }

  return (
    <FormGroup>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography
          style={{
            inlineSize: minWidth600 ? "60px" : minWidth375 ? "50px" : "40px",
            fontFamily: "DM Sans",
            fontSize: minWidth600
              ? "1rem"
              : minWidth425
              ? ".9rem"
              : minWidth375
              ? ".8rem"
              : ".7rem",
            textAlign: "center",
            letterSpacing: ".5px",
          }}
        >
          {/* {langValue ? "සිංහල" : "English" } */}
          {t("switch_language")}
        </Typography>
        <AntSwitch
          checked={i18n.language === "en" ? false : true}
          inputProps={{ "aria-label": "change language" }}
          onChange={handleChange}
        />
      </Stack>
    </FormGroup>
  )
}
