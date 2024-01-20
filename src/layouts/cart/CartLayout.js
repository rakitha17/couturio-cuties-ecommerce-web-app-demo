import React from "react"
//LINK - packages
import { useMediaQuery } from "@mui/material"
//LINK - utilities
import { useSelector } from "react-redux"
//LINK - sources
// import image from "../../assets/images/allIems/singleProducts/image-2.jpg"
//LINK - project components
import CommonLayout from "../common/CommonLayout"
import TotalAmount from "../../components/cart/TotalAmount"
import ItemBoxLayout from "./cartLayout/ItemBoxLayout"

/* const cartList = {
  productItem: {
    name: "Product 1",
    type: "Skirt",
    image: image,
    description: "This is a sample description about the product 1",
    price: 3800,
    stockHave: 10,
    SKU: "S0001",
  },
  orderDetails: {
    size: "m",
    qty: 5,
  },
} */

export default function CartLayout() {
  let cartStore = useSelector((store) => store.cartStore)
  let minWidth900 = useMediaQuery("(min-width: 900px)")

  const { cartProduct } = cartStore
  console.log(cartProduct)

  return (
    <CommonLayout>
      <div
        style={{
          padding: minWidth900 ? "calc(1.5rem * .5) 15%" : "calc(1.5rem * .5)",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <TotalAmount />
        </div>
        <div>
          {cartProduct.map((val, index) => {
            return <ItemBoxLayout key={index} cartList={val} />
          })}
        </div>
      </div>
    </CommonLayout>
  )
}
