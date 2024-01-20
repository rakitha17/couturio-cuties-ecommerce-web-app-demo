import * as Actions from "../actions/productAction"

const initialState = {
  fetchingDataStatus: "not started",
  productList: [],
  displayProductList: [],
  selectedProduct: {},
  sizeFilteringProductList: [
    {name: 'xs', value: false},
    {name: 's', value: false},
    {name: 'm', value: false},
    {name: 'l', value: false},
    {name: 'xl', value: false},
  ]
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
        displayProductList: []
      }

    case Actions.SETTING_UP_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      } 
    //NOTE - allItems data accordingly filtering
    case Actions.SIZE_FILTER:
      return {
        ...state,
        sizeFilteringProductList: action.payload
      }
    case Actions.DISPLAY_PRODUCT_LIST:
      return{
        ...state,
        displayProductList: action.payload
      }
    
    default:
      return state
  }
}
