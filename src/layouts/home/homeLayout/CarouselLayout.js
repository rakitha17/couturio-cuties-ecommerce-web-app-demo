import React from "react"

import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import SliderLayout from "../../../components/home/carouselLayout/SliderLayout"

import image1 from '../../../assets/images/home/carousel/1-carousel.jpg'
import image2 from '../../../assets/images/home/carousel/2-carousel.jpg'
import image3 from '../../../assets/images/home/carousel/3-carousel.jpg'
import image4 from '../../../assets/images/home/carousel/4-carousel.jpg'
import image5 from '../../../assets/images/home/carousel/5-carousel.jpg'
import image6 from '../../../assets/images/home/carousel/6-carousel.jpg'
import image7 from '../../../assets/images/home/carousel/7-carousel.jpg'
import image8 from '../../../assets/images/home/carousel/8-carousel.jpg'
import { useMediaQuery } from "@mui/material"

const imageList = [
  {
    src: image1,
    alt: "happy-smiling-short-haired-girl-posing-over-yellow-wall.-warm-colors",
  },
  {
    src: image2,
    alt: "fashionable-portrait-smiling-elegant-brunette-girl-sunglasses",
  },
  {
    src: image3,
    alt: "fashion-woman-casual-summer-clothes",
  },
  {
    src: image4,
    alt: "beautiful-girl-posing-eco-jacket-indoor-photo-fascinating-pretty-woman",
  },
  {
    src: image5,
    alt: "beautiful-black-woman-with-afro-curls-hairstyle-smiling-model-dressed-white-summer-green-dress-sexy-carefree-female-posing-near-wall-studio-tanned-cheerful-isolated-sunglasses",
  },
  {
    src: image6,
    alt: "young-woman-fluffy-jacket-red-sunglasses-looking-into-camera",
  },
  {
    src: image7,
    alt: "young-beautiful-smiling-female-trendy-summer-blue-dress-sexy-carefree-woman-posing-near-yellow-wall-studio-positive-model-having-fun-going-crazy-cheerful-happy",
  },
  {
    src: image8,
    alt: "beautiful-black-woman-with-african-hairstyle-posing-summer-style",
  },
]

export default function CarouselLayout() {
  let minWidth768 = useMediaQuery("(min-width: 768px)")
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={minWidth768 ? 35 : 50}
      totalSlides={imageList.length}
    >
      <Slider>
        {imageList.map((image, index) => {
          return (
            <Slide key={index} index={index}>
              <SliderLayout image={image} displayBtn={index % 2 === 0} />
            </Slide>
          )
        })}
      </Slider>
    </CarouselProvider>
  )
}
