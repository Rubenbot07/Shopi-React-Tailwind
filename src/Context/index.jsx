import { createContext, useEffect, useState } from 'react'
import { apiURL } from '../API'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [productToShow, setProductToShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [order, setOrder] = useState([])
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
  // Handle Product Detail
  const [isProductDetailOpen, setIsProductDatailOpen] = useState(false)
  const handleProductDetail = () => {
    setIsProductDatailOpen(!isProductDetailOpen)
    setIsCartProductsOpen(false)
  }
  // Handle Shopping cart
  const [productQuantity, setProductQuantity] = useState(0)
  const [isCartProductsOpen, setIsCartProductsOpen] = useState(false)
  const handleCartProducts = () => {
    setIsCartProductsOpen(!isCartProductsOpen)
    setIsProductDatailOpen(false)
    setIsMenuOpen(false)
  }
  // Adding products to Shopping cart
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
  }
  // Removing Products from Shopping cart
  const removeProductsToCart = (productData, e) => {
    if (e) e.stopPropagation()
    if (productData.quantity > 1) {
      const productInCartIndex = cartProducts.findIndex(item => item.id === productData.id)
      const newCart = structuredClone(cartProducts)
      newCart[productInCartIndex].quantity -= 1
      return setCartProducts(newCart)
    }
    setCartProducts(prevState => prevState.filter(item => item.id !== productData.id))
  }
  // Show item by search
  const [searchByTitle, setSearchByTitle] = useState(null)
  const [filteredItems, setFilteredItems] = useState(items)
  const filteredItemsByTitle = (filteredItems, searchByTitle) => {
    return filteredItems?.filter(item => item.title.toLowerCase().includes(searchByTitle))
  }
  // Show item by category
  const [searchByCategory, setSearchByCategory] = useState(null)
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase() === searchByCategory)
  }
  useEffect(() => {
    if (searchByTitle && !searchByCategory) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    if (searchByCategory && !searchByTitle) setFilteredItems(filteredItemsByCategory(items, searchByCategory))
    if (searchByTitle && searchByCategory) setFilteredItems(filteredItemsByTitle(filteredItems, searchByTitle))
  }, [items, searchByTitle, searchByCategory])

  // Manage burger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ShoppingCartContext.Provider value={{
      isProductDetailOpen,
      handleProductDetail,
      setIsProductDatailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      setIsCartProductsOpen,
      addProductsToCart,
      removeProductsToCart,
      handleCartProducts,
      isCartProductsOpen,
      productQuantity,
      setProductQuantity,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory,
      isMenuOpen,
      setIsMenuOpen
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
