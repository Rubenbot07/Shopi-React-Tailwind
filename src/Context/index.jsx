import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDatailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})
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
      setProductToShow
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
