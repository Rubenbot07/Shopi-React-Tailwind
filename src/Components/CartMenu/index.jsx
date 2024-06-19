import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { IoClose } from 'react-icons/io5'

export const CartMenu = (props) => {
  const {
    cartProducts,
    removeProductsToCart
  } = useContext(ShoppingCartContext)
  const deleteFromCart = () => {
    removeProductsToCart(cartProducts.splice(props.index, 1))
  }

  return (
    <div className='w-[90%] flex justify-between pb-2 border-b border-black/10 dark:border-gray-700'>
      <div className='flex items-center w-3/4 gap-2'>
        <picture className='min-w-20 px-1 h-full bg-white rounded-md'>
          <img
            className='w-20 h-20 min-w-20 object-contain rounded-md p-2'
            src={props.image} alt={props.title}
          />
        </picture>
        <div>
          <span className='text-sm w-2/3 line-clamp-1'>{props.title}</span>
          <div className='flex items-center border w-fit m-2 border-black/20 rounded-md font-semibold dark:border-gray-500'>
            <button
              className='flex items-center justify-center h-6 w-6'
              onClick={() => props.removeToCart(props)}
            >
              -
            </button>
            <span className='flex items-center justify-center w-6 h-6 bg-slate-200 dark:bg-gray-500'>{props.quantity}</span>
            <button
              className='flex items-center justify-center h-6 w-6'
              onClick={() => props.addToCart(props)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2 relative'>
        <span className='font-semibold text-lg'>{`$${(props.price * props.quantity).toFixed(1)}`}</span>
        <span
          className='cursor-pointer p-1 absolute top-7 -right-8 bg-gray-400/30 rounded-full'
          onClick={deleteFromCart}
        >
          <IoClose size='15px' />
        </span>
      </div>
    </div>
  )
}
