import React from "react"

export default function ItemImage({ image }) {
  return (
    <img
      src={image}
      style={{
        inlineSize: "100%",
        imageRendering: '-webkit-optimize-contrast',
        objectFit: 'cover',
        borderRadius: '5px'
      }}
      alt=""
    />
  )
}
