export const priceValueFormat = (value) => {
  /* const format = (value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'LKR',
  }) */

  const format =
    value && !isNaN(value) && (typeof(value) === 'number')
      ? "LKR " + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
      : 'Price is not mentioned'

  return format
}
