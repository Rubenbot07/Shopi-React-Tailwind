import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
export const SignInForm = () => {
  const {
    signIn
  } = useContext(ShoppingCartContext)

  const manageSignIn = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    signIn(email, password)
  }
  return (
    <form
      className='flex flex-col gap-2 w-[90%] max-w-96'
    >
      <label htmlFor='email' className='text-sm'>Email</label>
      <input
        required
        id='email'
        type='email'
        placeholder='Enter your email address'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm'
      />
      <label htmlFor='password' className='text-sm'>Password</label>
      <input
        required
        id='password'
        type='password'
        placeholder='Your password'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm '
      />
      <Link>
        <button
          type='button'
          onClick={() => manageSignIn()}
          className='bg-black text-white py-2 px-3 rounded-md mt-5 dark:bg-gray-300 dark:text-black w-full'
        >
          Sign in
        </button>
      </Link>
      <a className='self-center'>Forgot your password?</a>
      <Link
        to='sign-up'
      >
        <button
          type='button'
          className='bg-green-400 py-2 px-3 rounded-md dark:text-black w-full'
        >
          Sign up
        </button>
      </Link>
    </form>
  )
}
