import React from "react"
//LINK - packages
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
//LINK - sources
import { settingupProductDetails } from "../../../../../store/actions/productAction"
//LINK - project components
import ImageComponent from "../../../../../components/allItems/productListLayout/ImageComponent"
import TypeName from "../../../../../components/allItems/productListLayout/TypeName"
import Price from "../../../../../components/allItems/productListLayout/Price"
import Sizes from "../../../../../components/allItems/productListLayout/Sizes"

export default function SingleProduct({ product }) {
  const { productName, productType, images, price, size } = product
  let dispatch = useDispatch()

  const selectProductFunc = () => {
    dispatch(settingupProductDetails(product))
  }

  return (
    <div style={{ textAlign: "center" }} onClick={selectProductFunc}>
      <Link to="/detail" style={{ textDecoration: "none", color: "#000" }}>
        <div style={{ marginBottom: "10px" }}>
          <ImageComponent images={images} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <TypeName name={productName} type={productType} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Price value={price} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Sizes availableSizes={size} />
        </div>
      </Link>
    </div>
  )
}
