import * as Actions from "../actions/cartAction"

const initialState = {
  cartProduct: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TO_CART_PRODUCT:
      let tempCartProduct = [...state.cartProduct]

      let existingProduct = tempCartProduct.find((currentItem) => {
        return currentItem.productItem.sku === action.payload.productItem.sku
      })

      if (existingProduct) {
        let updatedProduct = tempCartProduct.map((val) => {
          if (val.productItem.sku === action.payload.productItem.sku) {
            let newQty = val.orderDetails.qty + action.payload.orderDetails.qty
            let newSize = !val.orderDetails.size.includes(
              ...action.payload.orderDetails.size
            )
              ? [...val.orderDetails.size, ...action.payload.orderDetails.size]
              : [...val.orderDetails.size]

            return {
              ...val,
              orderDetails: {
                ...val.orderDetails,
                qty: newQty,
                size: newSize,
              },
            }
          } else {
            return val
          }
        })
        return {
          ...state,
          cartProduct: updatedProduct,
        }
      } else {
        tempCartProduct.push(action.payload)
      }

      return {
        ...state,
        cartProduct: tempCartProduct,
      }

    case Actions.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartProduct: state.cartProduct.filter(
          (product) =>
            product.productItem.sku !== action.payload.productItem.sku
        ),
      }

    default:
      return state
  }
}

export default cartReducer
