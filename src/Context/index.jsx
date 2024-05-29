import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDatailOpen] = useState(false)
  const handleProductDetail = () => {
    setIsProductDatailOpen(!isProductDetailOpen)
  }

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      handleProductDetail
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
