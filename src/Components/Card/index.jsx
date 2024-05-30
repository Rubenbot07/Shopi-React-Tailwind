import { useContext } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { ShoppingCartContext } from '../../Context'

export const Card = (props) => {
  const {
    count,
    setCount,
    handleProductDetail,
    setProductToShow
  } = useContext(ShoppingCartContext)

  const showProduct = () => {
    handleProductDetail()
    setProductToShow(props)
  }
  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={showProduct}
    >
      <figure
        className='relative mb-2 w-full h-4/5'
      >
        <span
          className='absolute bottom-0 left-0 bg-green-400/80 rounded-lg text-black text-xs px-3 py-0.5 m-2'
        >
          {props.category}
        </span>
        <img
          className='w-full h-full object-contain rounded-lg'
          src={props.image} alt={props.description}
        />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-gray-400/30 w-6 h-6 rounded-full m-2'
          onClick={(e) => {
            e.stopPropagation()
            setCount(count + 1)
          }}
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
          {props.title}
        </span>
        <span
          className='text-lg font-medium'
        >
          {`$${props.price}`}
        </span>
      </p>
    </div>
  )
}
