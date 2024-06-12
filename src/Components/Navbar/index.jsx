import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { ShoppingCartContext } from '../../Context'

const categories = [
  { to: '/', categoryName: null, text: 'Shopi', className: 'font-semibold text-lg' },
  { to: '/', categoryName: null, text: 'All', className: '' },
  { to: '/category/men\'s-clothing', categoryName: 'men\'s clothing', text: 'Men\'s Clothes', className: '' },
  { to: '/category/women\'s-clothing', categoryName: 'women\'s clothing', text: 'Women\'s Clothes', className: '' },
  { to: '/category/electronics', categoryName: 'electronics', text: 'Electronics', className: '' },
  { to: '/category/jewelery', categoryName: 'jewelery', text: 'Jewelery', className: '' }
]

const userMenu = [
  { to: '/my-orders', text: 'My orders', className: '' },
  { to: '/my-account', text: 'My account', className: '' },
  { to: '/sign-in', text: 'Sign in', className: '' }
]

export const Navbar = () => {
  const textDecoration = 'underline underline-offset-4'
  const {
    count,
    handleCartProducts,
    setSearchByCategory
  } = useContext(ShoppingCartContext)

  const handleCategories = (category) => {
    setSearchByCategory(category)
  }
  return (
    <nav
      className='bg-white flex items-center justify-between fixed top-0 z-10 w-full py-5 px-8 text-sm'
    >
      <ul
        className='flex gap-3 items-center'
      >
        {
            categories.map((link, index) => {
              return (
                <li
                  key={index}
                  className={link.className}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => handleCategories(link.categoryName)}
                    className={({ isActive }) => isActive && index !== 0 ? textDecoration : undefined}
                  >
                    {link.text}
                  </NavLink>
                </li>
              )
            })
        }
      </ul>
      <ul
        className='flex gap-3 items-center'
      >
        <li
          className='text-black/60'
        >
          rubenbot77@hotmail.com
        </li>
        {
            userMenu.map((link, index) => {
              return (
                <li
                  key={index}
                  className={link.className}
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
        <li
          className='flex items-center cursor-pointer'
          onClick={handleCartProducts}
        >
          <FaCartPlus size='1.3rem' />
          <sup className={`${count > 0 ? 'bg-green-400/80 text-white rounded-full flex items-center justify-center' : ''} w-5 h-5 p-0.5 text-sm`}>
            {count}
          </sup>
        </li>
      </ul>
    </nav>
  )
}
