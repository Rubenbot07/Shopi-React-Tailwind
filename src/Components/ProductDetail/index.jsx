import { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { ShoppingCartContext } from '../../Context'
export const ProductDetail = () => {
  const {
    isProductDetailOpen,
    handleProductDetail,
    productToShow
  } = useContext(ShoppingCartContext)
  return (
    <section
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} items-center justify-center fixed top-0 z-10 h-screen w-screen bg-gray-600/60`}
    >
      <div
        className='flex flex-col bg-white w-5/6 top-1/3 max-w-96 min-w-64 h-80 max-h-80 z-10 rounded-lg md:h-96 md:max-h-96 md:w-3/4 md:max-w-[600px] lg:w-3/4 lg:max-w-[850px] lg:h-96 md:flex-row'
      >
        <div
          className='relative h-1/2 w-full md:w-1/2 md:h-full md:px-4'
        >
          <img
            className='h-full w-full object-contain md:w-full'
            src={productToShow.image} alt={productToShow.title}
          />
          <span
            className='absolute bottom-0 left-0 bg-green-400/80 rounded-t-lg text-black text-base px-2 py-0.5 ml-4 md:text-xl md:ml-1'
          >
            {productToShow.category}
          </span>
        </div>
        <div
          className='flex flex-col justify-between gap-3 relative bg-gray-800 pb-3 md:pt-4 md:w-3/5 h-full rounded-t-2xl rounded-b-lg text-white md:rounded-r-lg md:rounded-l-none'
        >
          <div
            className='flex items-center justify-center cursor-pointer absolute -top-36 bg-gray-800/80 text-white md:top-2 right-2 md:bg-white md:text-black rounded-full w-8 h-8 text-center text-xl'
          >
            <IoClose
              onClick={handleProductDetail}
            />
          </div>
          <div
            className='flex justify-between w-full px-4 py-1 md:flex-col gap-4 md:gap-2'
          >
            <span
              className='font-semibold text-lg md:text-lg md:w-5/6 lg:text-2xl'
            >
              {productToShow.title}
            </span>
            <span
              className='text-2xl font-semibold'
            >
              {`$${productToShow.price}`}
            </span>
          </div>
          <p
            className='max-h-32 overflow-y-auto text-sm pb-8 px-4 md:max-h-72 md:text-base lg:text-xl'
          >
            {productToShow.description}
          </p>
          <button
            className='flex items-center justify-center cursor-pointer gap-2 text-xl py-2 text-center bg-white text-gray-800 rounded-md px-3 w-3/4 self-center font-semibold min-w-36'
          >
            <FaCartPlus />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  )
}
