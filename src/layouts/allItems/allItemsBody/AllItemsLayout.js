import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
import { /* useDispatch, */ useSelector } from "react-redux"
//LINK - utilities
/* import {
  ladingProductList,
  getProductList,
} from "../../../store/actions/productAction" */
//LINK - project components
import ProductionListLayout from "./allItemsLayout/ProductListLayout"
import FilterSectionLayout from "./allItemsLayout/FilterSectionLayout"
import SkeletonCard from "../../../components/allItems/SkeletonCard"
import ErrorMsg from "../../../components/common/ErrorMsg"

export default function AllItemsLayout() {
  let productStore = useSelector((store) => store.productStore)
  const { fetchingDataStatus, /* productList, */ displayProductList } =
    productStore
  // let dispatch = useDispatch()

/*   React.useEffect(() => {
    dispatch(ladingProductList())
    dispatch(getProductList())
  }, []) */

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={2}>
        <FilterSectionLayout />
      </Grid>
      <Grid item xs={12} md={10}>
        {fetchingDataStatus === "loading" ? (
          <SkeletonCard cards={12} />
        ) : fetchingDataStatus === "success" ? (
          <ProductionListLayout productList={displayProductList} />
        ) : fetchingDataStatus === "failed" ? (
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ErrorMsg content="Sorry, Something went wrong." />
          </div>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  )
}

//NOTE - randomly generated product list
/* let [productList, setProductList] = React.useState([])
   React.useState(() => {
    let tempProduct = []
    let defaultSizeArr = ["xs", "s", "m", "l", "xl"]

    for (let i = 0; i < 100; i++) {
      let rSizeArr = []
      let rValue = Math.round(Math.random() * 100) % 5
      let image1 = Math.floor(Math.random() * 9)

      for (let j = 0; j < defaultSizeArr.length; j++) {
        while (rSizeArr.length <= rValue) {
          if (rSizeArr[j] === defaultSizeArr[j]) {
            break
          }
          rSizeArr.push(defaultSizeArr[j])
        }
      }

      const product = {
        name: `Product No. ${i + 1}`,
        type: getImageType(image1),
        images: [image1, image1 + 100],
        description: `This is a sample description about the Project No. ${
          i + 1
        }`,
        price: Math.round(Math.random() * 98 + 5) * 100,
        sizes: rSizeArr,
        stockHave: Math.floor(Math.random() * 100),
        SKU: `SK000${i + 1}`,
      }

      tempProduct.push(product)
    }

    setProductList(tempProduct)
  }, []) */
//NOTE - sample product list layout
/* <Grid item xs={12} md={10}>
  {fetchingDataStatus === "loading" ? (
    <div>.....Loading</div>
  ) : fetchingDataStatus === "success" ? (
    <ProductionListLayout productList={displayProductList} />
  ) : fetchingDataStatus === "failed" ? (
    <div>Error</div>
  ) : (
    ""
  )}
</Grid> */
