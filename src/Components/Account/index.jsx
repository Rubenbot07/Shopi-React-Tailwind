import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { FaChevronLeft } from 'react-icons/fa'
export const Account = () => {
  const {
    user
  } = useContext(ShoppingCartContext)
  return (
    <section className='flex flex-col gap-6 pt-6 w-[90%] max-w-96 relative'>
      <div className=''>
        <Link to='/'>
          <FaChevronLeft size='20px' className='absolute -top-10' />
        </Link>
        <ul className='flex flex-col gap-3'>
          <li>
            Name: <span className='font-semibold'>{user.name}</span>
          </li>
          <li>
            Email: <span className='font-semibold'>{user.email}</span>
          </li>
          <li>
            Address: <span className='font-semibold '>{user.address}</span>
          </li>
          <li>Password: <span className='font-semibold'>*********</span></li>
        </ul>
      </div>
      <button
        className='border border-black w-full rounded-md py-2 dark:border-gray-500 dark:bg-gray-500'
      >
        <Link to='/my-account/edit-account'>Edit</Link>
      </button>
    </section>
  )
}
