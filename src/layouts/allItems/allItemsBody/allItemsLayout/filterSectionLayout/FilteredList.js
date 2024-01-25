import React from "react"
//LINK - packages
import { useDispatch, useSelector } from "react-redux"
//LINK - utilities
import {
  clearDressTypeFilterCreator,
  clearSizeFilterCreator,
  clearPriceFilterCreator,
} from "../../../../../store/actions/productAction"
//LINK - project components
import FilterChip from "../../../../../components/allItems/filterSectionLayout/FilterChip"
import { Grid, Typography } from "@mui/material"

export default function FilteredList() {
  let [appliedFilters, setAppliedFilters] = React.useState([])
  let productStore = useSelector((store) => store.productStore)
  let dispatch = useDispatch()
  const { sizeFilter, dressTypeFilter, priceFilter } = productStore

  const handleCurrentFilters = (type, filterType) => {
    switch (type) {
      case "dressType":
        return filterType.some((val) => val.value)
          ? { title: "Dress", type: type, isApplied: true }
          : { title: "Dress", type: type, isApplied: false }
      case "size":
        return filterType.some((val) => val.value)
          ? { title: "Size", type: type, isApplied: true }
          : { title: "Size", type: type, isApplied: false }
      case "price":
        if (filterType[0] > 500 || filterType[1] < 10000) {
          return {
            title: "Price",
            type: type,
            isApplied: true,
          }
        } else {
          return {
            title: "Price",
            type: type,
            isApplied: false,
          }
        }
      default:
        break
    }
  }

  const removeChip = (type) => {
    switch (type) {
      case "dressType":
        dispatch(clearDressTypeFilterCreator())
        break
      case "size":
        dispatch(clearSizeFilterCreator())
        break
      case "price":
        dispatch(clearPriceFilterCreator())
        break
      default:
        break
    }
  }

  React.useEffect(() => {
    let currentAppliedFilters = []

    currentAppliedFilters.push(handleCurrentFilters("size", sizeFilter))
    currentAppliedFilters.push(
      handleCurrentFilters("dressType", dressTypeFilter)
    )
    currentAppliedFilters.push(handleCurrentFilters("price", priceFilter))

    setAppliedFilters(currentAppliedFilters)
  }, [sizeFilter, dressTypeFilter, priceFilter])

  return (
    <div>
      {appliedFilters.length > 0 && (
        <>
          {appliedFilters.some((val) => val.isApplied) && (
            <div
              style={{
                marginBottom: "10px",
                backgroundColor: "#C0C0C0",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                style={{
                  color: "#000",
                  fontFamily: "DM Sans",
                  fontSize: "1rem",
                }}
              >
                Current Filters
              </Typography>
            </div>
          )}
          <Grid container spacing={1}>
            {appliedFilters.map((val, index) => {
              return (
                val.isApplied && (
                  <Grid item>
                    <FilterChip
                      key={index}
                      title={val.title}
                      type={val.type}
                      removeChip={removeChip}
                      priceFilter={priceFilter}
                    />
                  </Grid>
                )
              )
            })}
          </Grid>
        </>
      )}
    </div>
  )
}
