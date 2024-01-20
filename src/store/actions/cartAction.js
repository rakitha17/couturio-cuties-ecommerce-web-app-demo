export const ADD_TO_CART_PRODUCT = "add_to_cart_product"

export const addToCartCreator = (product) => {
  return {
    type: ADD_TO_CART_PRODUCT,
    payload: {
      productItem: product,
      orderDetails: {
        size: "m",
        qty: 5,
      },
    },
  }
}
