import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { IoClose } from 'react-icons/io5'

export const CartMenu = (props) => {
  const {
    count,
    setCount,
    cartProducts
  } = useContext(ShoppingCartContext)
  const deleteFromCart = () => {
    console.log(props.index)
    cartProducts.splice(props.index, 1)
    setCount(count - 1)
  }

  return (
    <div className='flex justify-between pb-2 border-b border-black/10'>
      <div className='flex items-center w-3/4 gap-2'>
        <picture className='min-w-20 px-1 h-full bg-white rounded-md'>
          <img
            className='w-20 h-20 min-w-20 object-contain rounded-md p-2'
            src={props.image} alt={props.title}
          />
        </picture>
        <div>
          <span className='text-md line-clamp-1'>{props.title}</span>
          <div className='flex items-center border w-fit m-2 border-black/20 rounded-md font-semibold'>
            <button
              className='flex items-center justify-center h-6 w-6'
              onClick={() => props.removeToCart(props)}
            >
              -
            </button>
            <span className='flex items-center justify-center w-6 h-6 bg-slate-200'>{props.quantity}</span>
            <button
              className='flex items-center justify-center h-6 w-6'
              onClick={() => props.addToCart(props)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <span className='font-semibold text-lg'>{`$${(props.price * props.quantity).toFixed(1)}`}</span>
        <span
          className='cursor-pointer'
          onClick={deleteFromCart}
        >
          <IoClose size='25px' />
        </span>
      </div>
    </div>
  )
}
