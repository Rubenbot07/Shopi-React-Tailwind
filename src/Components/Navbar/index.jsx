import { NavLink } from 'react-router-dom'

const menu1 = [
  { to: '/', text: 'Shopi', className: 'font-semibold text-lg' },
  { to: '/', text: 'All', className: '' },
  { to: '/clothes', text: 'Clothes', className: '' },
  { to: '/electronics', text: 'Electronics', className: '' },
  { to: '/furnitures', text: 'Furnitures', className: '' },
  { to: '/toys', text: 'Toys', className: '' },
  { to: '/others', text: 'Others', className: '' }
]

const menu2 = [
  { to: '/email', text: 'juanmer382@gmail.com', className: 'text-black/60' },
  { to: '/myorders', text: 'My orders', className: '' },
  { to: '/myoccount', text: 'My occount', className: '' },
  { to: '/signin', text: 'Sign in', className: '' }
]

export const Navbar = () => {
  const textDecoration = 'underline underline-offset-4'
  return (
    <nav className='flex items-center justify-between w-full py-5 px-8 text-sm'>
      <ul className='flex gap-3 items-center'>
        {
            menu1.map((link, index) => {
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
        {
            menu2.map((link, index) => {
              return (
                <li
                  key={index}
                  className={link.className}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => isActive && index ? textDecoration : undefined}
                  >
                    {link.text}
                  </NavLink>
                </li>
              )
            })
        }
        <li>🛒 0</li>
      </ul>
    </nav>
  )
}
