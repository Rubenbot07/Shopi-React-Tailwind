import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDatailOpen] = useState(false)
  const [productQuantity, setProductQuantity] = useState(0)
  const [productToShow, setProductToShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [isCartProductsOpen, setIsCartProductsOpen] = useState(false)
  useEffect(() => { console.log(cartProducts) }, [cartProducts])
  const handleProductDetail = () => {
    setIsProductDatailOpen(!isProductDetailOpen)
    setIsCartProductsOpen(false)
  }
  const handleCartProducts = () => {
    setIsCartProductsOpen(!isCartProductsOpen)
    setIsProductDatailOpen(false)
    console.log(isCartProductsOpen)
  }
  const addProductsToCart = (productData, e) => {
    if (e) e.stopPropagation()
    setCount(count + 1)
    setCartProducts([...cartProducts, productData])
  }
  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      handleProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      addProductsToCart,
      handleCartProducts,
      isCartProductsOpen,
      productQuantity,
      setProductQuantity
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
