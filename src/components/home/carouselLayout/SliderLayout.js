import React from "react"

import { Typography, useMediaQuery } from "@mui/material"
import { Link } from 'react-router-dom'

export default function SliderLayout({ image, displayBtn }) {
  let minWidth1500 = useMediaQuery("(min-width: 1500px)")
  let minWidth768 = useMediaQuery("(min-width: 768px)")
  let minWidth600 = useMediaQuery("(min-width: 600px)")
  let minWidth425 = useMediaQuery("(min-width: 425px)")
  return (
    <div>
      {displayBtn && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "5%",
            transform: "translateX(-50%)",
            border: minWidth1500
              ? "3px solid #fff"
              : minWidth768
              ? "2.5px solid #fff"
              : minWidth600
              ? "2px solid #fff"
              : minWidth425
              ? "1.5px solid #fff"
              : "1px solid #fff",
            padding: minWidth1500
              ? "10px 30px"
              : minWidth768
              ? "5px 20px"
              : minWidth425
              ? "3px 10px"
              : "2px 8px",
            backgroundColor: "rgba(0, 0, 0, .35)",
            cursor: "pointer",
          }}
          role="button"
        >
          <Typography
            component={Link}
            to='/all-items'
            style={{
              color: "#fff",
              fontFamily: "DM Sans",
              fontSize: minWidth1500
                ? "1.5rem"
                : minWidth768
                ? "1rem"
                : minWidth600
                ? ".8rem"
                : ".7rem",
              fontWeight: "400",
              textTransform: "uppercase",
              letterSpacing: ".5px",
              textDecoration: 'none'
            }}
          >
            shop now
          </Typography>
        </div>
      )}
      <img
        src={image.src}
        alt={image.alt.split("-").join(" ")}
        style={{
          inlineSize: "100%",
          aspectRatio: 16 / 10,
          objectFit: "cover",
        }}
      />
    </div>
  )
}
