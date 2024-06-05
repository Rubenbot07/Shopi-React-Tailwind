export const totalPrice = (products) => {
  let totalSum = 0
  products.forEach(product => {
    totalSum += (product.price * product.quantity)
  })
  return totalSum.toFixed(1)
}
