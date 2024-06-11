import { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { ShoppingCartContext } from '../../Context'
import './style.css'
export const ProductDetail = () => {
  const {
    isProductDetailOpen,
    handleProductDetail,
    productToShow,
    addProductsToCart
  } = useContext(ShoppingCartContext)
  return (
    <section
      className={`${isProductDetailOpen ? 'flex fixed' : 'hidden'} cart flex-col gap-3 bg-white rounded-md w-[95%] max-w-96 right-0 left-0 mx-auto border border-black/40 z-10 h-auto max-h-[85%] overflow-y-auto min-h-48 shadow-lg top-20 md:w-[320px] md:right-1 md:max-h-[cal(100vh - 68px)] md:left-auto`}
    >
      <div className='pt-4'>
        <h3 className='text-center text-lg font-semibold'>Product Detail</h3>
        <figure
          className='relative p-4 h-60 min-h-60 bg-white'
        >
          <img
            className='w-full h-full object-contain'
            src={productToShow.image} alt={productToShow.title}
          />
          <span
            className='bg-green-400/80 px-4 py-0.5 rounded-md absolute bottom-2 left-3'
          >
            {productToShow.category}
          </span>
        </figure>
        <div
          className='flex flex-col gap-4 bg-gray-400/5 w-[95%] mx-auto px-5 pt-4 pb-8 rounded-lg'
        >
          <div
            className='absolute top-2 right-2 bg-gray-400/30 rounded-full p-1 cursor-pointer'
          >
            <IoClose
              size='1.5rem'
              onClick={handleProductDetail}
            />
          </div>
          <div
            className='flex justify-between'
          >
            <span
              className='text-lg font-semibold w-2/3'
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
            className='text-md font-thin'
          >
            {productToShow.description}
          </p>
          <button
            className='w-2/3 mx-auto bg-green-400 rounded-md flex items-center justify-center gap-4 py-1'
            onClick={() => addProductsToCart(productToShow)}
          >
            <FaCartPlus />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  )
}
