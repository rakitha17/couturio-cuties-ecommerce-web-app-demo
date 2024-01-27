import React from "react"

export default function Illustrator({ image }) {
  return (
    <img
      src={image}
      alt="no items in the cart"
      style={{
        height: "auto",
        inlineSize: "100%",
        aspectRatio: 8 / 10,
        objectFit: "contain",
        objectPosition: "center",
      }}
    />
  )
}
