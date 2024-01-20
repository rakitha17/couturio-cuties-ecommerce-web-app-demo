import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
//LINK - utilities
import {
  setFilteredDataCreator,
  sizeFilterCreator,
} from "../../../../store/actions/productAction"
//LINK - project components
import DropdownFilteringComponent from "../../../../components/allItems/filterSectionLayout/DropdownFilteringComponent"
import SizeFilteringComponents from "../../../../components/allItems/filterSectionLayout/SizeFilteringComponent"

const options = [
  {
    name: "Price Ascending",
    value: "price-ascending",
  },
  {
    name: "Price Descending",
    value: "price-descending",
  },
]

/* const sizes = [
  {name: 'xs', value: false},
  {name: 's', value: false},
  {name: 'm', value: false},
  {name: 'l', value: false},
  {name: 'xl', value: false},
] */

export default function FilterSectionLayout() {
  let productStore = useSelector((store) => store.productStore)
  let dispatch = useDispatch()

  const { productList, sizeFilteringProductList } = productStore

  const handleDropdownFunc = (option) => {
    switch (option) {
      case "price-ascending":
        var sortedArr = productList.sort((a, b) => a.price - b.price)
        dispatch(setFilteredDataCreator(sortedArr))
        break
      case "price-descending":
        var sortedArr = productList.sort((a, b) => b.price - a.price)
        dispatch(setFilteredDataCreator(sortedArr))
        break
      default:
        break
    }
  }

  const upDateInitialArrFunc = (arr, name, value) => {
    return arr.map((val) => {
      if (val.name === name) {
        return { ...val, value: value }
      } else {
        return val
      }
    })
  }

  const getFilteredProductList = (checkedArr) => {
    if (checkedArr.length > 0) {
      let filterArr = []
      productList.forEach((product) => {
        let contain = checkedArr.some((val) => product.size.includes(val.name))

        if (contain) {
          filterArr.push(product)
        }
      })
      dispatch(setFilteredDataCreator(filterArr))
    } else {
      dispatch(setFilteredDataCreator(productList))
    }
  }

  const filtercheckedFunc = (checkStatusArr) => {
    let checkedArr = []
    checkStatusArr.forEach((val) => {
      if (val.value) {
        checkedArr.push(val)
      }
    })
    getFilteredProductList(checkedArr)
  }

  const handleSizeFilterFunc = (e) => {
    const { name, checked } = e.target
    const updatedSizeFilterList = upDateInitialArrFunc(
      sizeFilteringProductList,
      name,
      checked
    )

    dispatch(sizeFilterCreator(updatedSizeFilterList))
    filtercheckedFunc(updatedSizeFilterList)
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sm={3} md={12}>
        <div style={{ width: "100%" /* backgroundColor: "lightblue" */ }}>
          <DropdownFilteringComponent
            options={options}
            handleDropdownFunc={handleDropdownFunc}
          />
        </div>
      </Grid>
      <Grid item xs={6} sm={3} md={12}>
        <div style={{ width: "100%", backgroundColor: "lightcoral" }}>
          item 2
        </div>
      </Grid>
      <Grid item xs={6} sm={3} md={12}>
        <div style={{ width: "100%", backgroundColor: "lightgreen" }}>
          <SizeFilteringComponents
            title="Size"
            sizes={sizeFilteringProductList}
            handleSizeFilterFunc={handleSizeFilterFunc}
          />
        </div>
      </Grid>
      <Grid item xs={6} sm={3} md={12}>
        <div style={{ width: "100%", backgroundColor: "lightpink" }}>
          item 4
        </div>
      </Grid>
    </Grid>
  )
}
