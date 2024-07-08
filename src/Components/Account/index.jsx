import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
export const Account = () => {
  const {
    user
  } = useContext(ShoppingCartContext)
  return (
    <section className='flex flex-col gap-6 pt-6 w-[90%] max-w-96'>
      <div className=''>
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
      <button className='border border-black w-full rounded-md font-semibold py-2 dark:border-gray-400'>Edit</button>
    </section>
  )
}
