import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
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
  const textDecoration = 'underline underline-offset-4'
  const {
    cartProducts,
    handleCartProducts,
    setSearchByCategory,
    setSearchByTitle
  } = useContext(ShoppingCartContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleCategories = (category) => {
    setSearchByCategory(category)
    setSearchByTitle(null)
  }
  return (
    <nav
      className='bg-white flex items-center  fixed top-0 z-10 w-full py-3 px-4 lg:px-8 text-sm border-b border-black/20 shadow-sm'
    >
      <section className='flex items-center w-screen justify-center lg:w-auto lg:justify-start'>
        <div className='lg:hidden absolute left-2 cursor-pointer'>
          <TiThMenu size='1.5rem' onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        <div
          className='font-semibold text-2xl mx-0'
        >
          <NavLink
            to='/'
            onClick={() => handleCategories(null)}
          >
            Shopi
          </NavLink>
        </div>
      </section>
      <section className={`${isMenuOpen ? 'fixed top-[55px] left-0 w-1/2 border-r border-b border-black/20 rounded-br-md' : 'fixed top-[70px] -left-96'} bg-white transition-all w-2/3 max-w-80  flex flex-col items-start px-5 py-4 gap-4 overflow-y-auto h-[80%] max-h-[400px] lg:flex-row lg:static lg:items-center lg:justify-between lg:w-full lg:max-w-none lg:top-0 lg:border-none lg:bg-transparent lg:text-md xl:text-lg`}>
        <ul
          className='flex flex-col gap-1.5 lg:gap-4 lg:flex-row lg:px-2'
        >
          <li className='font-semibold text-lg lg:hidden'>Categories</li>
          {
              categories.map((link, index) => {
                return (
                  <li
                    key={index}
                  >
                    <NavLink
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
          className='flex flex-col gap-1.5 lg:gap-4 lg:flex-row lg:px-2'
        >
          <li className='font-semibold text-lg lg:hidden'>Account</li>
          <li>
            rubenbot77@hotmail.com
          </li>
          {
              userMenu.map((link, index) => {
                return (
                  <li
                    key={index}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => isActive ? textDecoration : undefined}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                )
              })
          }
          <li>Sign Out</li>
        </ul>
      </section>
      <div
        className='flex items-center cursor-pointer fixed right-2'
        onClick={handleCartProducts}
      >
        <FaCartPlus size='1.5rem' />
        <sup className={`${cartProducts.length > 0 ? 'bg-green-400/80 text-white rounded-full flex items-center justify-center' : ''} w-5 h-5 p-0.5 text-sm`}>
          {cartProducts ? cartProducts.length : 0}
        </sup>
      </div>

    </nav>
  )
}
