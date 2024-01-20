import React from "react"

import CardLayout from "./collectionLayout/CardLayout"

import Button from "@mui/material/Button"

import printDress from "../../../assets/images/home/collection/1-collection.jpg"
import officeDress from "../../../assets/images/home/collection/2-collection.jpg"
import sunDress from "../../../assets/images/home/collection/3-collection.jpg"
import offShoulderDress from "../../../assets/images/home/collection/4-collection.jpg"
import casualDress from "../../../assets/images/home/collection/5-collection.jpg"
import DetailLayout from "./collectionLayout/DetailLayout"
import { useMediaQuery } from "@mui/material"

const collectionList = [
  {
    title: "print dress",
    image: printDress,
    label: "woman-wearing-sundress",
    description:
      "Summer is the time of the year for prints of varying kinds and these prints find their way onto dresses just like all other items of clothing. The image above is one brilliant example of the nature of printed dresses.",
    cardDoc:
      "Latest Summer Single Printed Dresses Digital Floral Designs 2023-24 Collection",
  },
  {
    title: "summer work outfit",
    image: officeDress,
    label:
      "young-attractive-businesswoman-beige-suit-with-laptop-thoughtfully-talking-cellphone-city-street",
    description:
      "If you wish to take your preference for dresses to the workplace; it would be good to know that there are multiple dress designs that are appropriate for office wear.",
    cardDoc:
      " From a trusty blazer to nine-to-five dresses, 9 summer work outfits that are smart as they are stylish",
  },
  {
    title: "sundress",
    image: sunDress,
    label: "woman-happy-beach",
    description:
      "During the warmer months; it is imperative to have a few sundresses in your closet that are ideal to wear for your time out in the summer sun.",
    cardDoc:
      "Elevate your warm-weather style with classic florals, flowy maxis, trendy midi tank styles, and more",
  },
  {
    title: "off shoulder dresses",
    image: offShoulderDress,
    label: "young-woman-wearing-dress-hat-walking-park",
    description:
      "The summer months are also a popular time of the year to flaunt off-shoulder dresses and here is one stunning example.",
    cardDoc:
      "Buy trendy off shoulder dresses for ladies online on a la mode. Choose from a wide range of off shoulder dresses in various types & colors",
  },
  {
    title: "summer casual evening wear",
    image: casualDress,
    label:
      "young-stylish-beautiful-woman-blue-dress-summer-fashion-trend-vacation-garden-tropical-hotel-terrace-smiling",
    description:
      "In many places around the world; the temperatures barely drop during summer evenings, making it compulsory to wear light fabrics at all times of the day.",
    cardDoc:
      "Check out our casual evening dress selection for the very best in unique or custom, handmade pieces from our dresses shops",
  },
]

const btns = ["Previous", "Next"]

export default function CollectionLayout() {
  let [idx, setIdx] = React.useState(0)
  let minWidth1500 = useMediaQuery("(min-width: 1500px)")
  let minWidth768 = useMediaQuery("(min-width: 768px)")
  let maxWidth768 = useMediaQuery("(max-width: 768px)")

  const nextfunc = () => {
    if (idx >= collectionList.length - 1) {
      return
    }
    setIdx(idx + 1)
  }

  const previousFunc = () => {
    if (idx <= 0) {
      return
    }
    setIdx(idx - 1)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: minWidth768 ? "row" : "column",
        justifyContent: "center",
        gap: "calc(1.5rem * .5)",
      }}
    >
      <div
        style={{
          width: minWidth1500 ? "30%" : minWidth768 ? "50%" : "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "80%",
            borderBottom: "1.5px solid #323232",
          }}
        >
          <DetailLayout collection={collectionList[idx]} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "5px",
          }}
        >
          {btns.map((btn, index) => {
            return (
              <Button
                key={index}
                style={{
                  width: "100px",
                  color: "#DDD0C8",
                  fontFamily: "DM Sans",
                  fontSize: ".8rem",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginLeft: index === 1 && "5px",
                  marginRight: index === 0 && "5px",
                  backgroundColor: "#323232",
                }}
                onClick={index === 0 ? previousFunc : nextfunc}
              >
                {btn}
              </Button>
            )
          })}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: maxWidth768 && "center" }}>
        <CardLayout collection={collectionList[idx]} />
      </div>
    </div>
  )
}
