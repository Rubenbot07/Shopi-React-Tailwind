import { useContext, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { FaChevronLeft } from 'react-icons/fa'

export const EditAccountForm = () => {
  const {
    user
  } = useContext(ShoppingCartContext)
  const nameRef = useRef(user.name)
  const addressRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()

  const manageSubmit = (e) => {
    e.preventDefault()
  }
  const changeAccountInfo = (userName, userAddress, userPassword) => {
    if (user.name !== userName && userName.length > 0) {
      user.name = userName
      console.log(user)
    }
    if (user.address !== userAddress && userAddress.length > 0) {
      user.address = userAddress
    }
    if (user.password !== userPassword && userPassword.length > 0) {
      user.password = userPassword
    }
    localStorage.removeItem(user.email)
    localStorage.setItem(user.email, JSON.stringify(user))
    setTimeout(() => {
      navigate('/my-account')
    }, '500')
  }
  return (
    <section className='flex flex-col gap-6 w-[90%] max-w-96 relative'>
      <Link to='/my-account'>
        <FaChevronLeft size='20px' className='absolute -top-10' />
      </Link>
      <form className='flex flex-col gap-7' onSubmit={(e) => manageSubmit(e)}>
        <ul className='flex flex-col gap-3'>
          <li className='flex gap-2 justify-between'>
            <label htmlFor='name'>Name</label>
            <input
              ref={nameRef}
              id='name'
              className='border border-gray-400 rounded-md text-sm px-2 w-full'
              placeholder={user.name}
            />
          </li>
          <li className='flex gap-2 justify-between'>
            <label htmlFor='address'>Address</label>
            <input
              ref={addressRef}
              id='address'
              className='border border-gray-400 w-full rounded-md text-sm px-2'
              placeholder={user.address}
            />
          </li>
          <li className='flex gap-2 justify-between'>
            <label htmlFor='password'>Password</label>
            <input
              ref={passwordRef}
              id='password'
              className='border border-gray-400 w-full rounded-md text-sm px-2'
              placeholder='*******'
            />
          </li>
        </ul>
        <button
          className='border border-black bg-black text-white w-full rounded-md py-2 dark:border-gray-500 dark:bg-gray-500'
          onClick={() => changeAccountInfo(nameRef.current.value, addressRef.current.value, passwordRef.current.value)}
        >
          Confirm
        </button>
      </form>
    </section>
  )
}
