import * as Actions from "../actions/productAction"

const initialDressTypeFilter = [
  { name: "t-shirt", value: false },
  { name: "dress", value: false },
  { name: "seasonal", value: false },
  { name: "skinny", value: false },
  { name: "top", value: false },
]
const initialSizeFilter = [
  { name: "xs", value: false },
  { name: "s", value: false },
  { name: "m", value: false },
  { name: "l", value: false },
  { name: "xl", value: false },
]

const initialState = {
  fetchingDataStatus: "not started",
  productList: [],
  displayProductList: [],
  sortFilter: "select",
  priceFilter: [500, 10000],
  dressTypeFilter: [...initialDressTypeFilter],
  sizeFilter: [...initialSizeFilter],
  selectedProduct: {},
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    //NOTE - set product list
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
        displayProductList: action.payload,
      }

    case Actions.FETCH_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        fetchingDataStatus: "failed",
        productList: [],
      }
    //NOTE - set filtes
    case Actions.SORT_FILTER:
      return {
        ...state,
        sortFilter: action.payload,
      }
    case Actions.DRESS_TYPE_FILTER:
      return {
        ...state,
        dressTypeFilter: action.payload,
      }
    case Actions.SIZE_FILTER:
      return {
        ...state,
        sizeFilter: action.payload,
      }
    case Actions.PRICE_FILTER:
      return {
        ...state,
        priceFilter: action.payload,
      }
    case Actions.DISPLAY_PRODUCT_LIST:
      return {
        ...state,
        displayProductList: action.payload,
      }
    case Actions.CLEAR_DRESS_TYPE_FILTER:
      return {
        ...state,
        dressTypeFilter: [...initialDressTypeFilter],
      }
    case Actions.CLEAR_SIZE_FILTER:
      return {
        ...state,
        sizeFilter: [...initialSizeFilter],
      }
    case Actions.CLEAR_PRICE_FILTER:
      return {
        ...state,
        priceFilter: [500, 10000]
      }
    //NOTE - set selected product
    case Actions.SETTING_UP_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      }

    default:
      return state
  }
}
