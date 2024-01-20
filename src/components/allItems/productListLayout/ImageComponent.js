import React from "react"
import image2 from '../../../assets/images/allIems/singleProducts/image-2.jpg'
import image102 from '../../../assets/images/allIems/singleProducts/image-102.jpg'

export default function ImageComponent({ images }) {
  // let [imageSrc, setImageSrc] = React.useState(images[0])
  let [imageSrc, setImageSrc] = React.useState(image2)

  /* React.useEffect(() => {
    setImageSrc(images[0])
  }, [images[0]]) */

  return (
    <div style={{ width: "100%", aspectRatio: "7 / 10" }}>
      <div
        style={{
          inlineSize: "100%",
          height: "100%",
          backgroundImage: `url(${imageSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "5px",
        }}
        onMouseOver={() => setImageSrc(image102)}
        onMouseOut={() => setImageSrc(image2)}
      ></div>
    </div>
  )
}


//NOTE - samples
/* const imageList = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image101,
  image102,
  image103,
  image104,
  image105,
  image106,
  image107,
  image108,
  image109,
] */
/* let [imageSrc, setImageSrc] = React.useState(images[0])
let [imageSrc, setImageSrc] = React.useState(imageList[images[0]]) */
/* onMouseOver={() => setImageSrc(images[1])}
onMouseOut={() => setImageSrc(images[0])}
onMouseOver={() => setImageSrc(imageList[10])}
onMouseOut={() => setImageSrc(imageList[1])} */
/* ;<img
  src={imageSrc}
  alt=""
  style={{
    width: "100%",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center",
    // aspectRatio: '7 / 10'
  }}
  onMouseOver={() => setImageSrc(imageList[images[1]])}
  onMouseOut={() => setImageSrc(imageList[images[0]])}
/> */
