import { Link } from 'react-router-dom'
import { useContext, useRef, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import { IoMdArrowForward } from 'react-icons/io'
import ReactLoading from 'react-loading'
export const SignInForm = () => {
  const {
    signIn,
    isSignIn,
    user
  } = useContext(ShoppingCartContext)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [invalidUser, setInvalidUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const manageSignIn = () => {
    signIn(emailRef.current.value, passwordRef.current.value)
    console.log(emailRef.current.value, passwordRef.current.value)
    setIsLoading(true)
  }
  const manageSubmit = (e) => {
    e.preventDefault('submit')
    setTimeout(() => {
      if (!isSignIn) {
        setInvalidUser(true)
        setIsLoading(false)
      } else {
        setIsLoading(false)
        setInvalidUser(false)
      }
    }, '4000')
  }
  return (
    <section className='flex flex-col justify-center w-[90%] max-w-96 py-4 min-h-80'>
      <form
        onSubmit={(e) => manageSubmit(e)}
        className={`${!isSignIn ? 'flex' : 'hidden'} flex-col gap-2 w-full max-w-96`}
      >
        <label htmlFor='email' className='text-sm'>Email</label>
        <input
          ref={emailRef}
          required
          id='email'
          type='email'
          placeholder='Enter your email address'
          className='border border-gray-400 py-2 px-3 rounded-md text-sm invalid:outline-red-300 dark:text-black'
        />
        <label htmlFor='password' className='text-sm'>Password</label>
        <input
          ref={passwordRef}
          required
          id='password'
          type='password'
          placeholder='Your password'
          className='border border-gray-400 py-2 px-3 rounded-md text-sm dark:text-black'
        />
        <div className={`${invalidUser ? 'flex' : 'hidden'} flex-col items-center text-red-700 bg-red-100 border border-red-500 rounded-md`}>
          <p className='text-lg font-semibold'>Login Failed</p>
          <p>Invalid email or password</p>
        </div>
        <button
          type='submit'
          onClick={() => manageSignIn()}
          className='bg-black text-white py-2 px-3 rounded-md mt-5 dark:bg-gray-300 dark:text-black w-full'
        >
          {isLoading &&
            <span className='flex items-center justify-center'>
              <ReactLoading type='spin' color='#fff' height={25} width={25} />
            </span>}
          {!isLoading && 'Sign in'}
        </button>
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
      <section>
        <div className={`${isSignIn ? 'flex' : 'hidden'} flex-col gap-4 items-center p-4 rounded-md bg-green-400/10 border border-green-400 dark:bg-green-400/40`}>
          <p className='text-green-900 text-xl dark:text-white'>
            Welcome to Shopi {user.name}
          </p>
          <Link to='/'>
            <button className='flex items-center gap-2 bg-green-400 p-2 rounded-md text-green-900 text-lg'>
              Go home
              <IoMdArrowForward size='1.5rem' />
            </button>
          </Link>
        </div>
      </section>
    </section>
  )
}
