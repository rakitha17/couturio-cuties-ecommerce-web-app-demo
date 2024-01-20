import React from "react"

//LINK - packages
import { isBrowser } from "react-device-detect"
import { useDispatch } from "react-redux"
//LINK - sources
import {ladingProductList, getProductList} from '../../store/actions/productAction'

//LINK - project components
import CarouselLayout from "./homeLayout/CarouselLayout"
import ButtonListLayout from "./homeLayout/ButtonListLayout"
import SloganTaxt from "./homeLayout/SloganTaxt"
import DiscoverImageLayout from "./homeLayout/DiscoverImageLayout"
import CollectionLayout from "./homeLayout/CollectionLayout"
import CommonLayout from "../common/CommonLayout"

export default function HomeLayout() {
  let dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(ladingProductList())
    dispatch(getProductList())
  } ,[dispatch])

  return (
    <CommonLayout>
      <CarouselLayout />

      <div style={{ margin: "calc(1.5rem * .5) 0" }}>
        <SloganTaxt />
      </div>

      <div
        style={{
          padding: "0 calc(1.5rem * .5)",
          marginBottom: "calc(1.5rem * .5)",
        }}
      >
        <ButtonListLayout />
      </div>

      {isBrowser && (
        <div
          style={{
            width: "100%",
            padding: "3rem calc(1.5rem * .5)",
            marginBottom: "calc(1.5rem * .5)",
          }}
        >
          <CollectionLayout />
        </div>
      )}

      <div
        style={{
          padding: "0 calc(1.5rem * .5)",
          marginBottom: "calc(1.5rem * .5)",
        }}
      >
        <DiscoverImageLayout />
      </div>
    </CommonLayout>
  )
}
