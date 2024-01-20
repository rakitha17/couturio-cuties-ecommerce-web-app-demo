import React from "react"

import FindMore from "./discoverImageLayout/FindMore"

import image1 from "../../../assets/images/home/discoverImage/image1.jpg"
import image2 from "../../../assets/images/home/discoverImage/image2.jpg"
import { useMediaQuery } from "@mui/material"

const images = [
  {
    image: image1,
    label:
      "young-pretty-brunette-woman-posing-beige-marble-background-wearing-linen-beige-shorts-caramel-leather-luxury-bag-white-shirt-gold-accessories-street-style-outfit(1)",
    innerTexts: {
      topTxt: "new arrivals",
      midTxt: "touch of color",
      bottomTxt: "essential styles come alive in bright colors",
    },
  },
  {
    image: image2,
    label:
      "outdoor-hight-fashion-portrait-stylish-casual-woman-black-hat-pink-suit-white-blouse-posing-old-street",
    innerTexts: {
      topTxt: "discover them all",
      midTxt: "styles that work",
      bottomTxt: "work wear collection",
    },
  },
]

export default function DiscoverImageLayout() {
  let minWidth768 = useMediaQuery("(min-width: 768px)")

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: minWidth768 ? "row" : "column",
        gap: "calc(1.5rem * .5)",
      }}
    >
      {images.map((val, index) => {
        return (
          <div
            key={index}
            style={{
              flex: 1,
              width: "100%",
              aspectRatio: "7 / 10",
              backgroundImage: `url(${val.image})`,
              backgroundRepeat: "none",
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
            }}
            role="img"
            aria-label={val.label.split("-").join(" ")}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "rgba(0, 0, 0, .5)", //NOTE - at hover this going to be active
              }}
            >
              <FindMore
                topTxt={val.innerTexts.topTxt}
                midTxt={val.innerTexts.midTxt}
                bottomTxt={val.innerTexts.bottomTxt}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
