import { FaCartPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
export const ProductDetail = () => {
  return (
    <section className='flex items-center justify-center fixed top-0 z-10 h-screen w-screen bg-gray-600/60'>
      <div className='flex flex-col bg-white w-3/4 top-1/3 max-w-96 min-w-64 h-96 z-10 rounded-lg md:h-80 md:w-2/3 md:max-w-[500px] lg:w-3/4 lg:max-w-[700px] lg:h-96 md:flex-row'>
        <div className='relative h-1/2 w-full md:w-1/2 md:h-full md:px-4'>
          <img className='h-full w-full object-contain md:w-full' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='test-image' />
          <span className='absolute bottom-0 left-0 bg-green-400/80 rounded-t-lg text-black text-base px-2 py-0.5 ml-4 md:text-xl md:ml-1'>category</span>
        </div>
        <div className='flex flex-col justify-evenly relative bg-gray-800 pb-3 md:pt-8 md:w-3/5 h-full rounded-t-2xl rounded-b-lg text-white md:rounded-r-lg md:rounded-l-none'>
          <div className='flex items-center justify-center absolute -top-44 bg-gray-800/60 text-white md:top-2 right-2 md:bg-white md:text-black rounded-full w-8 h-8 text-center text-xl'>
            <IoClose />
          </div>
          <div className='flex justify-between w-full px-4 py-2 md:flex-col gap-4'>
            <span className='font-semibold text-xl h-8 w-2/4 md:w-3/4 truncate md:text-3xl'>Title fjalkdj fjakljdldaf kdajlkfjearraoifjoa</span>
            <span className='text-2xl font-semibold'>$99.00</span>
          </div>
          <p className='text-sm p-4 md:text-base'>
            Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.
          </p>
          <button className='flex items-center gap-2 text-lg text-center bg-white text-gray-800 rounded-md px-3 w-2/4 self-center font-semibold min-w-36'>
            <FaCartPlus />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  )
}
