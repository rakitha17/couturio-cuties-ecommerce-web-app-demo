import React from "react"
//LINK - packages
import { Grid } from "@mui/material"
//LINK - project components
import SizeFilteringComponents from "../../../../components/allItems/filterSectionLayout/SizeFilteringComponent"
import SortFilteringComponent from "../../../../components/allItems/filterSectionLayout/SortFilteringComponent"
import DressTypeFilteringComponent from "../../../../components/allItems/filterSectionLayout/DressTypeFilteringComponent"

export default function FilterSectionLayout() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sm={3} md={12}>
        <div style={{ width: "100%", backgroundColor: "lightblue" }}>
          <SortFilteringComponent />
        </div>
      </Grid>
      <Grid item xs={6} sm={3} md={12}>
        <div style={{ width: "100%", backgroundColor: "lightpink" }}>
          item 4
        </div>
      </Grid>
      <Grid item xs={6} sm={3} md={12}>
        <div style={{ width: "100%", backgroundColor: "lightcoral" }}>
          <DressTypeFilteringComponent />
        </div>
      </Grid>
      <Grid item xs={6} sm={3} md={12}>
        <div style={{ width: "100%", backgroundColor: "lightgreen" }}>
          <SizeFilteringComponents />
        </div>
      </Grid>
    </Grid>
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
