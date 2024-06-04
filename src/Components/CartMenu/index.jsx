import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { IoClose } from 'react-icons/io5'

export const CartMenu = (props) => {
  const {
    productQuantity,
    setProductQuantity
  } = useContext(ShoppingCartContext)
  return (
    <div className='flex justify-between pb-2 border-b border-black/10'>
      <div className='flex items-center w-3/4 gap-1'>
        <img
          className='w-2/4 rounded-md object-contain h-2/3 border border-black/10 p-2'
          src={props.image} alt=''
        />
        <div>
          <span className='text-md line-clamp-1'>{props.title}</span>
          <div className='flex items-center border w-fit m-2 border-black/20 rounded-md font-semibold'>
            <button
              className='flex items-center justify-center h-6 w-6'
              onClick={() => setProductQuantity(productQuantity - 1)}
            >
              -
            </button>
            <span className='flex items-center justify-center w-6 h-6 bg-slate-200'>{productQuantity}</span>
            <button
              className='flex items-center justify-center h-6 w-6'
              onClick={() => setProductQuantity(productQuantity + 1)}
            >
              +
            </button>

          </div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <span className='font-semibold text-lg'>{props.price}</span>
        <span>
          <IoClose size='25px' />
        </span>
      </div>
    </div>
  )
}
