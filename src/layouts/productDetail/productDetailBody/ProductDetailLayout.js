import React from "react"
//LINK - packages
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Grid } from "@mui/material"
import { useDispatch } from "react-redux"
//LINK - project components
import SwiperImage from "../../../components/productDetail/imageBox/SwiperImage"
import {
  RowOne,
  Ratings,
  Price,
  Sizes,
  AddCart,
  Description,
  Note,
  QuantityTotal,
} from "../../../components/productDetail/itemDetails/layouts"
//LINK - sources
import image1 from "../../../assets/images/productDetail/image-1.jpg"
import image2 from "../../../assets/images/productDetail/image-2.jpg"
import image3 from "../../../assets/images/productDetail/image-3.jpg"
import image4 from "../../../assets/images/productDetail/image-4.jpg"
//LINK - utilities
import { addToCartCreator } from "../../../store/actions/cartAction"

const imageList = [
  { smallImage: image1, largeImage: image2 },
  { smallImage: image3, largeImage: image4 },
]

export default function ProductDetailLayout({ product }) {
  const {
    availableQty,
    description,
    /* images, */
    price,
    productName,
    productType,
    size,
  } = product

  let [addItem, setAddItem] = React.useState({
    qtyCount: 1,
    remainingQty: availableQty,
    sizeChecked: "not checked",
    productName,
    productType,
    price,
    size,
    description,
  })

  let dispatch = useDispatch()

  const addProductToCartFunc = () => {
    dispatch(addToCartCreator(product))
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={5}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {imageList.map((val, index) => {
            return (
              <SwiperSlide key={index}>
                <SwiperImage
                  smallImage={val.smallImage}
                  largeImage={val.largeImage}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <div style={{ padding: "calc(1.5rem * .5)", textAlign: "left" }}>
          <div style={{ marginBottom: "10px" }}>
            <RowOne addItem={addItem} />
          </div>
          <div>
            <Ratings />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Price addItem={addItem} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Sizes addItem={addItem} setAddItem={setAddItem} />
          </div>
          <hr />
          <div style={{ marginBottom: "20px" }}>
            <QuantityTotal addItem={addItem} setAddItem={setAddItem} />
          </div>

          <div style={{ marginBottom: "10px", textAlign: "center" }}>
            <AddCart addItem={addItem} setAddItem={setAddItem} addProductToCartFunc={addProductToCartFunc} />
          </div>
          <hr />
          <div>
            <Description addItem={addItem} />
          </div>
          <hr />
          <div>
            <Note />
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

//TODO
//add colors group

//NOTE - pagination bullet issue
// backgroundColor: change it with css using class
