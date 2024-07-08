import { NavLink } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { ShoppingCartContext } from '../../Context'
import { FaCartPlus } from 'react-icons/fa'
import { TiThMenu } from 'react-icons/ti'

const categories = [
  { to: '/', categoryName: null, text: 'All' },
  { to: '/category/men\'s-clothing', categoryName: 'men\'s clothing', text: 'Men\'s Clothes' },
  { to: '/category/women\'s-clothing', categoryName: 'women\'s clothing', text: 'Women\'s Clothes' },
  { to: '/category/electronics', categoryName: 'electronics', text: 'Electronics' },
  { to: '/category/jewelery', categoryName: 'jewelery', text: 'Jewelery' }
]

const userMenu = [
  { to: '/my-orders', text: 'My orders' },
  { to: '/my-account', text: 'My account' }
]

export const Navbar = () => {
  const textDecoration = 'bg-gray-200 rounded px-1 dark:bg-gray-600'
  const [darkMode, setDarkMode] = useState(false)
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  const {
    cartProducts,
    handleCartProducts,
    setSearchByCategory,
    setSearchByTitle,
    isMenuOpen,
    setIsMenuOpen,
    setIsCartProductsOpen,
    setIsProductDatailOpen,
    isSignIn,
    user,
    signOut
  } = useContext(ShoppingCartContext)
  const handleCategories = (category) => {
    setSearchByCategory(category)
    setSearchByTitle(null)
    setIsMenuOpen(false)
  }
  const handleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsCartProductsOpen(false)
    setIsProductDatailOpen(false)
  }
  return (
    <nav
      className='bg-white flex items-center  fixed top-0 z-10 w-full py-3 px-4 lg:px-8 text-sm border-b border-black/20 shadow-sm dark:bg-slate-900 dark:border-gray-700'
    >
      <section className='flex items-center w-screen justify-center lg:w-auto lg:justify-start'>
        <div role='button' className='lg:hidden absolute left-2 cursor-pointer'>
          <TiThMenu
            size='1.5rem'
            onClick={handleSideMenu}
            className='dark:fill-gray-50'
          />
        </div>
        <div
          className='font-semibold text-2xl mx-0 dark:text-gray-50'
        >
          <NavLink
            to='/'
            id='nav'
            onClick={() => handleCategories(null)}
            tabIndex='1'
          >
            Shopi
          </NavLink>
        </div>
      </section>
      <section className={`${isMenuOpen ? 'fixed top-[55px] left-0 w-1/2 border-r border-b border-black/20 rounded-br-md' : 'fixed top-[70px] -left-96'} bg-white transition-all w-2/3 max-w-80 text-sm flex flex-col items-start px-5 py-4 gap-4 overflow-y-auto h-[80%] max-h-[400px] lg:flex-row lg:static lg:items-center lg:justify-between lg:w-full lg:max-w-none lg:top-0 lg:border-none lg:bg-transparent dark:bg-slate-900 dark:text-gray-50 dark:border-gray-700`}>
        <ul
          className='flex flex-col gap-1.5 lg:gap-2 lg:flex-row px-1'
        >
          <li className='font-semibold text-lg lg:hidden'>Categories</li>
          {
              categories.map((link, index) => {
                return (
                  <li
                    key={index}
                    className='rounded-md hover:bg-gray-100 px-1 dark:hover:bg-gray-600'
                  >
                    <NavLink
                      tabIndex='1'
                      to={link.to}
                      onClick={() => handleCategories(link.categoryName)}
                      className={({ isActive }) => isActive ? textDecoration : undefined}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                )
              })
          }
        </ul>
        <ul
          className='flex flex-col gap-1.5 lg:gap-4 lg:flex-row px-1'
        >
          <li className='font-semibold text-lg lg:hidden'>Account</li>
          <li className='text-slate-400 rounded-md'>
            {isSignIn ? user.email : ''}
          </li>
          {
              userMenu.map((link, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleCategories()}
                    className='rounded-md hover:bg-gray-100 px-1 dark:hover:bg-gray-600'
                  >
                    <NavLink
                      to={(isSignIn) ? link.to : '/sign-in'}
                      className={({ isActive }) => isActive ? textDecoration : undefined}
                      tabIndex='1'
                    >
                      {link.text}
                    </NavLink>
                  </li>
                )
              })
          }
          <li onClick={() => handleCategories()} className='rounded-md hover:bg-gray-100 px-1 dark:hover:bg-gray-600'>{(isSignIn)
            ? <NavLink onClick={signOut}>Sign Out</NavLink>
            : <NavLink to='/sign-in'>Sign In</NavLink>}
          </li>
        </ul>
        <div className='flex items-center gap-4 px-1 pt-5 lg:absolute top-20 right-8'>
          <span className='font-semibold'>Dark Mode</span>
          <label
            htmlFor='darkmode'
            className='w-12 h-6 rounded-full relative flex items-center px-1'
            tabIndex='1'
            onKeyDown={(e) => { if (e.key === 'Enter') handleDarkMode() }}
          >
            <input
              onClick={handleDarkMode}
              tabIndex='1'
              type='checkbox' id='darkmode'
              className='sr-only peer'
            />
            <div className='w-full h-full rounded-full cursor-pointer bg-gray-300 peer-checked:bg-blue-800 transition-all absolute top-0 left-0' />
            <div className='bg-white w-4 h-4 rounded-full translate-x-0 peer-checked:translate-x-6 transition-all' />
          </label>
        </div>
      </section>
      <div
        className='flex items-center cursor-pointer fixed right-2 dark:text-gray-50'
        onClick={handleCartProducts}
        tabIndex='1'
        onKeyDown={(e) => { if (e.key === 'Enter') handleCartProducts() }}
      >
        <FaCartPlus
          size='1.5rem'
          className='dark:fill-gray-50'
        />
        <sup className={`${cartProducts.length > 0 ? 'bg-green-400/80 text-white rounded-full flex items-center justify-center' : ''} w-5 h-5 p-0.5 text-sm`}>
          {cartProducts ? cartProducts.length : 0}
        </sup>
      </div>
    </nav>
  )
}
