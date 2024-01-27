import React from "react"
//LINK - packages
import { useMediaQuery } from "@mui/material"
//LINK - sources
import image from "../../assets/images/no items found/no-items-cart.png"
//LINK - utilities
import { useSelector } from "react-redux"
//LINK - project components
import CommonLayout from "../common/CommonLayout"
import TotalAmount from "../../components/cart/TotalAmount"
import ItemBoxLayout from "./cartLayout/ItemBoxLayout"
import NoItemsFound from "../../components/common/NoItemsFound"

export default function CartLayout() {
  let cartStore = useSelector((store) => store.cartStore)
  let minWidth900 = useMediaQuery("(min-width: 900px)")

  const { cartProduct } = cartStore

  return (
    <CommonLayout>
      {cartProduct.length > 0 ? (
        <div
          style={{
            padding: minWidth900
              ? "calc(1.5rem * .5) 15%"
              : "calc(1.5rem * .5)",
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
      ) : (
        <div
          style={{
            width: "100%",
            height: "70vh",
            padding: "calc(1.5rem * .5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NoItemsFound content={"Sorry, Your cart is empty."} image={image} />
        </div>
      )}
    </CommonLayout>
  )
}

//NOTE - sample product
//LINK - sources
// import image from "../../assets/images/allIems/singleProducts/image-2.jpg"
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
