import * as Actions from "../actions/productAction"

const initialState = {
  fetchingDataStatus: "not started",
  productList: [],
  displayProductList: [],
  selectedProduct: {},
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    //NOTE - allItems data fetching
    case Actions.FETCH_PRODUCT_LIST_BEGIN:
      return {
        ...state,
        fetchingDataStatus: "loading",
      }

    case Actions.FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        fetchingDataStatus: "success",
        productList: action.payload,
        displayProductList: action.payload
      }

    case Actions.FETCH_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        fetchingDataStatus: "failed",
        productList: [],
      }

    case Actions.SETTING_UP_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      } 
    //NOTE - allItems data accordingly filtering
    
    default:
      return state
  }
}
