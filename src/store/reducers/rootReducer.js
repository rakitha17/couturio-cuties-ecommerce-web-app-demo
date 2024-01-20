//LINK - packages
import { combineReducers } from "redux"
//LINK - utilities
import { productReducer } from "./productReducer"
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
  productStore: productReducer,
  cartStore: cartReducer
})

export default rootReducer
