import { useContext } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { ShoppingCartContext } from '../../Context'

export const Card = ({ id, title, price, description, image, category }) => {
  const {
    count,
    setCount
  } = useContext(ShoppingCartContext)
  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
    >
      <figure
        className='relative mb-2 w-full h-4/5'
      >
        <span
          className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 m-2'
        >
          {category}
        </span>
        <img
          className='w-full h-full object-contain rounded-lg'
          src={image} alt={description}
        />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
          onClick={() => setCount(count + 1)}
        >
          <IoMdAdd />
        </div>
      </figure>
      <p
        className='flex justify-between gap-1'
      >
        <span
          className='text-sm font-light h-4 truncate'
        >
          {title}
        </span>
        <span
          className='text-lg font-medium'
        >
          {`$${price}`}
        </span>
      </p>
    </div>
  )
}
