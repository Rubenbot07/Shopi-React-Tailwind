import { Link } from 'react-router-dom'
export const SignUpForm = () => {
  return (
    <form
      className='flex flex-col gap-2 w-[90%] max-w-96'
    >
      <label htmlFor='name' className='text-sm'>Name</label>
      <input
        required
        id='name'
        type='text'
        placeholder='Full name'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm'
      />
      <label htmlFor='name' className='text-sm'>Address</label>
      <input
        required
        id='name'
        type='text'
        placeholder='Your address'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm'
      />
      <label htmlFor='email' className='text-sm'>Email</label>
      <input
        required
        id='email'
        type='email'
        placeholder='Enter your email address'
        className='border border-gray-400 py-2 px-3 rounded-md text-sm invalid:outline-red-300'
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
