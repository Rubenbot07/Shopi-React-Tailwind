import { Link } from 'react-router-dom'
export const SignInForm = () => {
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
        type='password'
        placeholder='Your password'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm'
      />
      <button
        type='submit'
        className='bg-black text-white py-2 px-3 rounded-md mt-5 dark:bg-gray-300 dark:text-black'
      >
        Sign in
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
  )
}
