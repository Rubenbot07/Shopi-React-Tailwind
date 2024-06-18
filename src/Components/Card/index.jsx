import { useContext } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { FaCheck } from 'react-icons/fa'
import { ShoppingCartContext } from '../../Context'

export const Card = (props) => {
  const {
    handleProductDetail,
    setProductToShow,
    addProductsToCart,
    removeProductsToCart,
    cartProducts,
    setIsMenuOpen
  } = useContext(ShoppingCartContext)

  const showProduct = () => {
    handleProductDetail()
    setProductToShow(props)
    setIsMenuOpen(false)
  }
  const checkProductInCart = (id) => {
    const productAdded = cartProducts.some(item => item.id === id)
    return (productAdded
      ? (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-gray-200 w-6 h-6 rounded-full m-2 hover:bg-gray-300'
          onClick={(e) => removeProductsToCart(props, e)}
        >
          <FaCheck />
        </div>
        )
      : (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-gray-200 w-6 h-6 rounded-full m-2 hover:bg-gray-300'
          onClick={(e) => addProductsToCart(props, e)}
        >
          <IoMdAdd />
        </div>
        )
    )
  }

  return (
    <div
      className='shadow-md cursor-pointer w-56 h-60 rounded-lg p-2 hover:scale-105 dark:shadow-slate-800'
      onClick={showProduct}
    >
      <figure
        className='relative mb-2 w-full h-4/5 dark:bg-white'
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
        {checkProductInCart(props.id)}
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
