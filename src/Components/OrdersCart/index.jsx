import { FaChevronRight, FaRegCalendarAlt } from 'react-icons/fa'
import { HiShoppingBag } from 'react-icons/hi2'
export const OrdersCart = (props) => {
  return (
    <div className='flex justify-between items-center w-3/4 min-w-72 border border-black rounded-md p-4 md:w-96 hover:bg-gray-50 dark:border-gray-400 dark:hover:bg-gray-700'>
      <div className='flex flex-col'>
        <span className='flex items-center gap-1'>
          <FaRegCalendarAlt />
          {props.date}
        </span>
        <span className='flex items-center gap-1'>
          <HiShoppingBag />
          {`${props.totalProducts} articles`}
        </span>
      </div>
      <span
        className='flex items-center gap-2 text-xl font-semibold'
      >
        {`$${props.totalPrice}`}
        <FaChevronRight size='20px' />
      </span>
    </div>
  )
}
