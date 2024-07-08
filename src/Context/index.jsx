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
  // User log in state
  const [isSignIn, setIsSignIn] = useState(false)
  const [user, setUser] = useState({})
  const testUser = {
    name: 'John Doe',
    email: 'Johndoe77@hotmail.com',
    password: '123456',
    address: 'Saturno 3-14, Dosquebradas'
  }
  localStorage.setItem('Johndoe77@hotmail.com', JSON.stringify(testUser))
  const signIn = (userEmail, userPassword) => {
    const userParse = JSON.parse(localStorage.getItem(userEmail))
    if (localStorage.getItem(userEmail) && userParse.password === userPassword) {
      console.log('great')
      setUser(userParse)
      setIsSignIn(true)
    }
  }
  const [isLoading, setIsLoading] = useState(false)
  const [userExist, setUserExist] = useState(false)
  const signOut = () => {
    location.reload()
  }
  const signUp = (userName, userAddress, userEmail, userPassword) => {
    if (localStorage.getItem(userEmail)) {
      console.log('error')
      setUserExist(true)
    } else {
      setUser(
        {
          name: userName,
          address: userAddress,
          email: userEmail,
          password: userPassword
        }
      )
    }
  }
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
  useEffect(() => {
    const handleFocus = () => {
      if (isProductDetailOpen) {
        const modal = document.querySelector('#product-detail')
        modal?.focus()
      }
      if (!isCartProductsOpen && !isProductDetailOpen) {
        const modal = document.querySelector('#nav')
        modal?.focus()
      }
      if (isCartProductsOpen) {
        const modal = document.querySelector('#cart')
        modal?.focus()
      }
    }
    handleFocus()
  }, [isProductDetailOpen, isCartProductsOpen])
  // Removing Products from Shopping cart
  const removeProductsToCart = (productData, e) => {
    if (e) e.stopPropagation()
    if (cartProducts.length < 1) handleCartProducts()
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
      isSignIn,
      setIsSignIn,
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
      setIsMenuOpen,
      signIn,
      user,
      signOut,
      signUp,
      isLoading,
      setIsLoading,
      userExist,
      setUserExist
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
