import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDatailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  useEffect(() => { console.log(cartProducts) }, [cartProducts])
  const handleProductDetail = () => {
    setIsProductDatailOpen(!isProductDetailOpen)
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
      setCartProducts
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
