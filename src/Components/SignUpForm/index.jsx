import { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
export const SignUpForm = () => {
  const {
    signUp
  } = useContext(ShoppingCartContext)
  const nameRef = useRef(null)
  const addressRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()
  const manageSubmit = (e) => {
    e.preventDefault()
  }
  const manageSignUp = (name, address, email, password) => {
    console.log(name, address, email, password)
    signUp(name, address, email, password)
    setTimeout(() => {
      navigate('/sign-in')
    }, '2000')
  }
  return (
    <form
      onSubmit={(e) => manageSubmit(e)}
      className='flex flex-col gap-2 w-[90%] max-w-96'
    >
      <label htmlFor='name' className='text-sm'>Name</label>
      <input
        ref={nameRef}
        required
        id='name'
        type='text'
        placeholder='Full name'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm'
      />
      <label htmlFor='address' className='text-sm'>Address</label>
      <input
        ref={addressRef}
        required
        id='address'
        type='text'
        placeholder='Your address'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm'
      />
      <label htmlFor='email' className='text-sm'>Email</label>
      <input
        ref={emailRef}
        required
        id='email'
        type='email'
        placeholder='Enter your email address'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm invalid:outline-red-300'
      />
      <label htmlFor='password' className='text-sm'>Password</label>
      <input
        ref={passwordRef}
        required
        id='password'
        type='password'
        placeholder='Your password'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm'
      />
      <button
        onClick={() => manageSignUp(nameRef.current.value, addressRef.current.value, emailRef.current.value, passwordRef.current.value)}
        type='submit'
        className='bg-black text-white py-2 px-3 rounded-md mt-5 dark:bg-green-400 dark:text-black'
      >
        Sign up
      </button>
      <div className='flex gap-3 justify-center mt-4'>
        <span className='text-gray-400'>Already have an account? </span>
        <Link to='/sign-in'>
          <span className='font-semibold text-gray-800 dark:text-green-400'>Sign In</span>
        </Link>
      </div>
    </form>
  )
}
