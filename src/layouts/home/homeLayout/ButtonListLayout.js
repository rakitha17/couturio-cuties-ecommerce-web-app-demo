import * as React from "react"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import ButtonBase from "@mui/material/ButtonBase"
import Typography from "@mui/material/Typography"
import { useMediaQuery } from "@mui/material"
import {Link} from 'react-router-dom'

import image1 from "../../../assets/images/home/buttonList/1-all-items.jpg"
import image2 from "../../../assets/images/home/buttonList/2-new-items.jpg"
import image3 from "../../../assets/images/home/buttonList/3-trending-items.jpg"
import image4 from "../../../assets/images/home/buttonList/4-top-items.jpg"

const images = [
  {
    url: image1,
    title: "all items",
    label:
      "portrait-girl-red-beret-whistling-holding-package-pink-background-with-hangers-with-dresses",
    // width: "22%", //NOTE - used grid
    path:'/all-items'
  },
  {
    url: image2,
    title: "new items",
    label:
      "lovely-girl-with-short-pink-hair-laughing-with-eyes-closed-refined-young-lady-wears-peruke-trendy-glasses-during-photoshoot-min",
    // width: "22%",
    path: '/'
  },
  {
    url: image3,
    title: "trending items",
    label: "woman-sunglasses-smiling-holding-suitcase-min",
    // width: "22%",
    path: '/'

  },
  {
    url: image4,
    title: "top items",
    label: "client-wearing-fashion-clothes-thumbs-up-min",
    // width: "22%",
    path: '/'
  },
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}))

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
})

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}))

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}))

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}))

export default function ButtonListLayout() {
  let minWidth1500 = useMediaQuery("(min-width: 1500px)")
  let minWidth768 = useMediaQuery("(min-width: 768px)")

  return (
    <Box
      sx={{
        display: "grid",
        columnGap: "calc(1.5rem * .5)",
        gridAutoFlow: minWidth768 ? "column" : "row",
        rowGap: minWidth768 ? "0" : "calc(1.5rem * .5)",
        minWidth: 300,
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {images.map((image) => (
        <ImageButton
          component={Link}
          to={image.path}
          focusRipple
          key={image.title}
          style={{
            width: "100%",
            height: minWidth1500 && "300px",
          }}
          role="button"
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${image.url})`,
              inlineSize: "100%",
              objectFit: "cover",
            }}
            aria-label={image.label.split("-").join(" ")}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
              style={{
                textTransform: "capitalize",
                fontFamily: "DM Sans",
                fontSize: minWidth1500 && "1.2rem",
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  )
}
