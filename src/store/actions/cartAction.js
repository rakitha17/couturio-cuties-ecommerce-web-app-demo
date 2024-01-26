export const ADD_TO_CART_PRODUCT = "add_to_cart_product"
export const REMOVE_PRODUCT_FROM_CART = "remove_product_from_cart"

export const addToCartCreator = (product, size, qty) => {
  return {
    type: ADD_TO_CART_PRODUCT,
    payload: {
      productItem: product,
      orderDetails: {
        size: size,
        qty: qty,
      },
    },
  }
}

export const removeFromCartCreator = (product) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product,
  }
}
