import { createContext, useEffect, useState } from 'react'
import { apiURL } from '../API'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDatailOpen] = useState(false)
  const [productQuantity, setProductQuantity] = useState(0)
  const [productToShow, setProductToShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [isCartProductsOpen, setIsCartProductsOpen] = useState(false)
  const [order, setOrder] = useState([])
  useEffect(() => { console.log(cartProducts) }, [cartProducts])
  // Feching data
  const [items, setItems] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiURL}/products?limit=`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.log(`Oh no we have an error: ${error}`)
      }
    }
    fetchData()
  }, [])
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
    const productInCartIndex = cartProducts.findIndex(item => item.id === productData.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cartProducts)
      newCart[productInCartIndex].quantity += 1
      return setCartProducts(newCart)
    }
    setCartProducts(prevState => ([
      ...prevState,
      {
        ...productData,
        quantity: 1
      }
    ]))
    setCount(count + 1)
  }
  const removeProductsToCart = (productData, e) => {
    if (e) e.stopPropagation()
    if (productData.quantity > 1) {
      const productInCartIndex = cartProducts.findIndex(item => item.id === productData.id)
      const newCart = structuredClone(cartProducts)
      newCart[productInCartIndex].quantity -= 1
      return setCartProducts(newCart)
    }
    setCartProducts(prevState => prevState.filter(item => item.id !== productData.id))
    setCount(count - 1)
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
      setCartProducts,
      addProductsToCart,
      removeProductsToCart,
      handleCartProducts,
      isCartProductsOpen,
      productQuantity,
      setProductQuantity,
      order,
      setOrder,
      items,
      setItems
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
