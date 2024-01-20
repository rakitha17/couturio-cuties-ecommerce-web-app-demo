import axios from "axios"

export const FETCH_PRODUCT_LIST_BEGIN = "fetch_product_list_begin"
export const FETCH_PRODUCT_LIST_SUCCESS = "fetch_product_list_success"
export const FETCH_PRODUCT_LIST_FAILURE = "fetch_product_list_failure"

export const SIZE_FILTER = 'size_filter'
export const DISPLAY_PRODUCT_LIST = 'display_product_list'

export const SETTING_UP_PRODUCT = "setting_up_product"

export const ladingProductList = () => {
  return {
    type: FETCH_PRODUCT_LIST_BEGIN,
  }
}

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

export const settingupProductDetails = (product) => {
  return {
    type: SETTING_UP_PRODUCT,
    payload: product,
  }
}
//NOTE - filter creators
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

/* export const setFilteredDataCreator = (data) => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    payload: data,
  }
} */

