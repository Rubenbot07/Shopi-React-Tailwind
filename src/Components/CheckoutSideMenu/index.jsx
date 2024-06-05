import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { CartMenu } from '../CartMenu'
import { IoClose } from 'react-icons/io5'
import './style.css'

export const CheckoutSideMenu = () => {
  const {
    count,
    setCount,
    isCartProductsOpen,
    handleCartProducts,
    cartProducts,
    setCartProducts,
    addProductsToCart,
    removeProductsToCart
  } = useContext(ShoppingCartContext)
  const manageCount = () => {
    setCartProducts([])
    setCount(0)
  }

  return (
    <section className={`${isCartProductsOpen ? 'flex fixed' : 'hidden'} cart flex-col gap-3 bg-white rounded-md w-[95%] max-w-96 right-0 left-0 mx-auto border border-black/40 z-10 h-auto max-h-[80%] overflow-y-auto min-h-48 shadow-lg top-16 px-4 py-6 md:w-[320px] md:right-1 md:max-h-[cal(100vh - 68px)] md:left-auto`}>
      <span
        className='absolute right-4'
        onClick={handleCartProducts}
      >
        <IoClose size='30px' />
      </span>
      <h2 className='text-lg text-center font-semibold'>My Order</h2>
      {
        cartProducts?.map((item, index) => {
          return (
            <CartMenu
              key={item.id}
              {...item}
              index={index}
              quantity={item.quantity}
              addToCart={addProductsToCart}
              removeToCart={removeProductsToCart}
            />
          )
        })
      }
      <div className='flex justify-between items-center'>
        {
            count > 0 && (
              <>
                <button
                  className='font-semibold border border-red-400/85 text-red-400/85 px-3 rounded-md'
                  onClick={manageCount}
                >
                  Clean Cart
                </button>
                <span className='font-semibold px-4'>$99</span>
              </>
            )
        }
      </div>
    </section>
  )
}
