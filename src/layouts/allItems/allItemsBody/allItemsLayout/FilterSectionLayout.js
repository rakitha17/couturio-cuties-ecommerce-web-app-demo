import React from "react"
//LINK - packages
import { Grid, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
//LINK - utilities
import {
  displayFilteredProductList,
  dressTypeFilterCreator,
  priceFilterCreator,
  sizeFilterCreator,
  sortFilterCreator,
} from "../../../../store/actions/productAction"
//LINK - project components
import SizeFilteringComponents from "../../../../components/allItems/filterSectionLayout/SizeFilteringComponent"
import SortFilteringComponent from "../../../../components/allItems/filterSectionLayout/SortFilteringComponent"
import DressTypeFilteringComponent from "../../../../components/allItems/filterSectionLayout/DressTypeFilteringComponent"
import PriceFilteringComponent from "../../../../components/allItems/filterSectionLayout/PriceFilteringComponent"
import FilteredList from "./filterSectionLayout/FilteredList"

const sortCatArr = [
  { name: "Product Ascending", value: "product-ascending" },
  { name: "Product Descending", value: "product-descending" },
]

export default function FilterSectionLayout() {
  const productStore = useSelector((store) => store.productStore)
  let dispatch = useDispatch()
  const { productList, sizeFilter, dressTypeFilter, sortFilter, priceFilter } =
    productStore

  const handlePriceFiltering = (priceFilter, productsArr) => {
    let tempProductArr = []

    productsArr.forEach((product) => {
      if (product.price >= priceFilter[0] && product.price <= priceFilter[1]) {
        tempProductArr.push(product)
      }
    })

    return tempProductArr
  }

  const handleSortFiltering = (value, productsArr) => {
    var sorted = []
    switch (value) {
      case "product-ascending":
        sorted = productsArr.sort((p1, p2) => p1.price - p2.price)
        return sorted
      case "product-descending":
        sorted = productsArr.sort((p1, p2) => p2.price - p1.price)
        return sorted
      default:
        return productsArr.sort((p1, p2) => {
          let getInt1 = parseInt(p1.sku.slice(4))
          let getInt2 = parseInt(p2.sku.slice(4))

          return getInt1 - getInt2
        })
    }
  }

  const filteringDressTypeFunc = (temp, productsArr) => {
    if (temp.length > 0) {
      let tempProductsArr = []
      productsArr.forEach((product) => {
        if (temp.includes(product.productType)) {
          tempProductsArr.push(product)
        }
      })
      return tempProductsArr
    } else {
      return productsArr
    }
  }

  const handleDressTypeFiltering = (dressTypeFilter, productsArr) => {
    let temp = []
    dressTypeFilter.forEach((val) => {
      if (val.value) {
        temp.push(val.name)
      }
    })
    return filteringDressTypeFunc(temp, productsArr)
  }

  const updateDressTypeFilter = (dressTypeFilter, value) => {
    return dressTypeFilter.map((val) => {
      if (value.name === val.name) {
        return { ...val, value: value.checked }
      } else {
        return val
      }
    })
  }

  let filteringSizeFunc = (temp, productsArr) => {
    if (temp.length > 0) {
      let tempProductsArr = []
      productsArr.forEach((product) => {
        if (product.size.some((s) => temp.includes(s))) {
          tempProductsArr.push(product)
        }
      })
      return tempProductsArr
    } else {
      return productsArr
    }
  }

  const handleSizeFiltering = (sizeFilter, productsArr) => {
    let temp = []
    sizeFilter.forEach((val) => {
      if (val.value) {
        temp.push(val.name)
      }
    })
    return filteringSizeFunc(temp, productsArr)
  }

  const updateSizeFilter = (sizeFilter, value) => {
    return sizeFilter.map((val) => {
      if (value.name === val.name) {
        return { ...val, value: value.checked }
      } else {
        return val
      }
    })
  }

  const filteredListFunc = (type, value) => {
    switch (type) {
      case "sort":
        dispatch(sortFilterCreator(value))
        break
      case "dressType":
        let newDressTypeFilter = updateDressTypeFilter(dressTypeFilter, value)
        dispatch(dressTypeFilterCreator(newDressTypeFilter))
        break
      case "size":
        let newSizeFilter = updateSizeFilter(sizeFilter, value)
        dispatch(sizeFilterCreator(newSizeFilter))
        break
      case "price":
        dispatch(priceFilterCreator(value))
        break
      default:
        break
    }
  }

  const applyFilters = () => {
    let filteredSize = handleSizeFiltering(sizeFilter, productList)
    let filteredDressType = handleDressTypeFiltering(
      dressTypeFilter,
      filteredSize
    )
    let filteredPrice = handlePriceFiltering(priceFilter, filteredDressType)
    let filteredSort = handleSortFiltering(sortFilter, filteredPrice)

    dispatch(displayFilteredProductList(filteredSort))
  }

  React.useEffect(() => {
    applyFilters()
  }, [sizeFilter, dressTypeFilter, sortFilter, priceFilter])

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Typography
          style={{
            padding: "10px 2px",
            color: "#DDD0C8",
            fontFamily: "DM Sans",
            fontSize: "1rem",
            fontWeight: "500",
            letterSpacing: ".5px",
            textAlign: "center",
            backgroundColor: "#323232",
            borderRadius: "4px",
          }}
        >
          Search with Filters
        </Typography>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <FilteredList />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <div style={{ width: "100%" }}>
                <SortFilteringComponent
                  sortCatArr={sortCatArr}
                  filteredListFunc={filteredListFunc}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <div style={{ width: "100%" }}>
                <PriceFilteringComponent
                  priceFilter={priceFilter}
                  filteredListFunc={filteredListFunc}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6} md={12}>
              <div style={{ width: "100%" }}>
                <DressTypeFilteringComponent
                  dressTypeFilter={dressTypeFilter}
                  filteredListFunc={filteredListFunc}
                />
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={12}>
              <div style={{ width: "100%" }}>
                <SizeFilteringComponents
                  sizeFilter={sizeFilter}
                  filteredListFunc={filteredListFunc}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

//reducer
/* sortFilter: 'price-ascending',
  sizeFilter: [
    {name: 'xs', value: false},
    {name: 's', value: false},
    {name: 'm', value: false},
    {name: 'l', value: false},
    {name: 'xl', value: false},
  ],
  dressTypeFilter: [
    {type: 'T-Shirt', value: false},
    {type: 'Skinny', value: false},
    {type: 'Seasonal', value: false},
    {type: 'Top', value: false},
    {type: 'Frock', value: false},
  ]

  case Actions.SORT_FILTER:
      return {
        ...state,
        sortFilter: action.payload
      }

    case Actions.SIZE_FILTER:
      return {
        ...state,
        sizeFilter: action.payload
      }
    case Actions.DISPLAY_PRODUCT_LIST:
      return{
        ...state,
        displayProductList: action.payload
      }
//actions
export const SIZE_FILTER = 'size_filter'
export const SORT_FILTER = 'sort_filter'
export const DISPLAY_PRODUCT_LIST = 'display_product_list'

export const sortFilterCreator = (sortFilterArr) => {
  return {
    type: SORT_FILTER,
    payload: sortFilterArr
  }
}

export const sizeFilterCreator = (sizeFilterArr) => {
  return {
    type: SIZE_FILTER,
    payload: sizeFilterArr
  }
}

export const setFilteredDataCreator = (data) => {
  return {
    type: DISPLAY_PRODUCT_LIST,
    payload: data,
  }
}

 export const setFilteredDataCreator = (data) => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    payload: data,
  }
}

//code
import { useDispatch, useSelector } from "react-redux"
//LINK - utilities
import {
  setFilteredDataCreator,
  sizeFilterCreator,
  sortFilterCreator,
} from "../../../../store/actions/productAction"

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

let productStore = useSelector((store) => store.productStore)
let dispatch = useDispatch()
const { productList } = productStore

      const filterProductList = (filterType, value) => {
        switch (filterType) {
          case "sort":
            dispatch(sortFilterCreator(value))
          case "size":
            const { name, checked } = value
            const updatedSizeFilterList = upDateInitialArrFunc(
              sizeFilter,
              name,
              checked
            )
            dispatch(sizeFilterCreator(updatedSizeFilterList))
        }
      }
    
      const handleSortFilterFunc = (option, productList) => {
        switch (option) {
          case "price-ascending":
            var sortedArr = productList.sort((a, b) => a.price - b.price)
            return sortedArr
          case "price-descending":
            sortedArr = productList.sort((a, b) => b.price - a.price)
            dispatch(setFilteredDataCreator(sortedArr))
            return sortedArr
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
          return filterArr
        } else {
          return productList
        }
      }
    
      const filtercheckedFunc = (checkStatusArr) => {
        let checkedArr = []
        checkStatusArr.forEach((val) => {
          if (val.value) {
            checkedArr.push(val)
          }
        })
        return getFilteredProductList(checkedArr)
      }
    
      const applyFilters = () => {
        const filteredArr = filtercheckedFunc(sizeFilter)
        const sortedFilteredList = handleSortFilterFunc(sortFilter, filteredArr)
    
        console.log(sortedFilteredList)
        dispatch(setFilteredDataCreator(sortedFilteredList))
      }
    
      React.useEffect(() => {
        applyFilters()
      }, [sizeFilter])


      handleDropdownFunc={filterProductList}
      handleSizeFilterFunc={filterProductList} */
