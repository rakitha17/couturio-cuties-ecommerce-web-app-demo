import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
//LINK - sources
import image from "../../../../assets/images/no items found/no-items-allItems.png"
//LINK - project components
import SingleProduct from "./productListlayout/SingleProduct"
import NoItemsFound from "../../../../components/common/NoItemsFound"

export default function ProductListLayout({ productList }) {
  let productStore = useSelector((store) => store.productStore)
  const { displayProductList } = productStore

  return (
    <>
      {displayProductList.length > 0 ? (
        <div>
          <Grid container spacing={2}>
            {productList.map((val, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <SingleProduct product={val} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NoItemsFound
            content="The items you searched for were not found."
            image={image}
          />
        </div>
      )}
    </>
  )
}
