import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const categories = [
  { to: '/', text: 'Shopi', className: 'font-semibold text-lg' },
  { to: '/', text: 'All', className: '' },
  { to: '/clothes', text: 'Clothes', className: '' },
  { to: '/electronics', text: 'Electronics', className: '' },
  { to: '/furnitures', text: 'Furnitures', className: '' },
  { to: '/toys', text: 'Toys', className: '' },
  { to: '/others', text: 'Others', className: '' }
]

const userMenu = [
  { to: '/my-orders', text: 'My orders', className: '' },
  { to: '/my-account', text: 'My account', className: '' },
  { to: '/sign-in', text: 'Sign in', className: '' }
]

export const Navbar = () => {
  const textDecoration = 'underline underline-offset-4'
  const {
    count
  } = useContext(ShoppingCartContext)
  return (
    <nav className='bg-white flex items-center justify-between fixed top-0 z-10 w-full py-5 px-8 text-sm'>
      <ul className='flex gap-3 items-center'>
        {
            categories.map((link, index) => {
              return (
                <li
                  key={index}
                  className={link.className}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => isActive && index !== 0 ? textDecoration : undefined}
                  >
                    {link.text}
                  </NavLink>
                </li>
              )
            })
        }
      </ul>
      <ul className='flex gap-3 items-center'>
        <li className='text-black/60'>
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
        <li>🛒 {count}</li>
      </ul>
    </nav>
  )
}
