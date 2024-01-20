import * as Actions from "../actions/cartAction"

const initialState = {
  cartProduct: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TO_CART_PRODUCT:
      let tempCartProduct = [...state.cartProduct]
      tempCartProduct.push(action.payload)

      return {
        ...state,
        cartProduct: tempCartProduct,
      }

    default:
      return state
  }
}

export default cartReducer
