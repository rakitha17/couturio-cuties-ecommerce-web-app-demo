import axios from "axios"

//SECTION - variables
//NOTE - fetching product list
export const FETCH_PRODUCT_LIST_BEGIN = "fetch_product_list_begin"
export const FETCH_PRODUCT_LIST_SUCCESS = "fetch_product_list_success"
export const FETCH_PRODUCT_LIST_FAILURE = "fetch_product_list_failure"
//NOTE - filters
export const SORT_FILTER = 'sort_filter'
export const SIZE_FILTER = 'size_filter'
export const PRICE_FILTER = 'price_filter'
export const DRESS_TYPE_FILTER = 'dress_type_filter'
export const DISPLAY_PRODUCT_LIST = 'display_product_list'
export const CLEAR_SIZE_FILTER = 'clear_size_filter'
export const CLEAR_DRESS_TYPE_FILTER = 'clear_dress_type_filter'
export const CLEAR_PRICE_FILTER = 'clear_price_filter'
//NOTE - selected product
export const SETTING_UP_PRODUCT = "setting_up_product"

export const ladingProductList = () => {
  return {
    type: FETCH_PRODUCT_LIST_BEGIN,
  }
}

//SECTION - creators
//NOTE - fetching product list
export const getProductList = () => {
  return (dispatch) => {
    axios
      .get("https://cdn.radikadilanka.com:9000/getProducts")
      .then((response) => {
        dispatch({
          type: FETCH_PRODUCT_LIST_SUCCESS,
          payload: response.data,
        })
      })
      .catch(() => {
        dispatch({
          type: FETCH_PRODUCT_LIST_FAILURE,
        })
      })
  }
}
//NOTE - filters
export const sortFilterCreator = (filterType) => {
  return {
    type: SORT_FILTER,
    payload: filterType
  }
}
export const dressTypeFilterCreator = (filterType) => {
  return {
    type: DRESS_TYPE_FILTER,
    payload: filterType
  }
}
export const sizeFilterCreator = (filterType) => {
  return {
    type: SIZE_FILTER,
    payload: filterType
  }
}
export const priceFilterCreator = (value) => {
  return {
    type: PRICE_FILTER,
    payload: value
  }
}
export const displayFilteredProductList = (filteredList) => {
  return {
    type: DISPLAY_PRODUCT_LIST,
    payload: filteredList
  }
}
export const clearDressTypeFilterCreator = () => {
  return {
    type: CLEAR_DRESS_TYPE_FILTER
  }
}
export const clearSizeFilterCreator = () => {
  return {
    type: CLEAR_SIZE_FILTER
  }
}
export const clearPriceFilterCreator = () => {
  return {
    type: CLEAR_PRICE_FILTER
  }
}

//NOTE - selected product
export const settingupProductDetails = (product) => {
  return {
    type: SETTING_UP_PRODUCT,
    payload: product,
  }
}
