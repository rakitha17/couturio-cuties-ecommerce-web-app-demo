import React from "react"
//LINK - packages
import ReactImageMagnify from "easy-magnify"

export default function SwiperImage({smallImage, largeImage}) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, .3)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ inlineSize: "80%", aspectRatio: 7 / 10, objectFit: 'contain' }}>
        <ReactImageMagnify
          enlargedImagePosition="over"
          isHintEnabled
          {...{
            smallImage: {
              alt: "",
              isFluidWidth: true,
              src: smallImage,
            },
            largeImage: {
              src: largeImage,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
    </div>
  )
}
