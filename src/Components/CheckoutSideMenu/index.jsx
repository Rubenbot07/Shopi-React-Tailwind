import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../Utils'
import { CartMenu } from '../CartMenu'
import { IoClose } from 'react-icons/io5'
import { LiaCartPlusSolid } from 'react-icons/lia'
import './style.css'

export const CheckoutSideMenu = () => {
  const {
    isCartProductsOpen,
    handleCartProducts,
    cartProducts,
    setCartProducts,
    addProductsToCart,
    removeProductsToCart,
    order,
    setOrder
  } = useContext(ShoppingCartContext)
  const manageCount = () => {
    setCartProducts([])
  }
  const handleCheckout = () => {
    const date = new Date()
    const orderToAdd = {
      date: `
        ${date.toLocaleDateString()}  
        ${date.toLocaleTimeString('en-GB', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit'
        })}`,
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    handleCartProducts(false)
  }
  return (
    <section className={`${isCartProductsOpen ? 'flex fixed' : 'hidden'} cart flex-col gap-3 bg-white rounded-md w-[95%] max-w-96 right-0 left-0 mx-auto border border-black/40 z-10 h-auto max-h-[80%] overflow-y-auto min-h-48 shadow-lg top-20 md:top-24 px-4 pt-6 pb-3 md:w-[320px] md:right-1 md:max-h-[cal(100vh - 68px)] md:left-auto dark:bg-slate-900 dark:text-gray-50 dark:border-gray-700`}>
      <span
        className='absolute right-4 cursor-pointer'
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
      <div className='flex flex-col justify-between gap-4'>
        {
            cartProducts?.length > 0
              ? (
                <>
                  <div className='flex justify-between'>
                    <button
                      className='font-semibold text-red-500 px-1 rounded-md w-24'
                      onClick={manageCount}
                    >
                      Clean Cart
                    </button>
                    <span
                      className='font-semibold px-4'
                    >
                      Total: ${totalPrice(cartProducts)}
                    </span>
                  </div>
                  <Link
                    to='my-orders/last'
                  >
                    <button
                      className='self-center font-semibold bg-black/80 text-white h-8 rounded-md w-full dark:bg-slate-50 dark:text-slate-900'
                      onClick={handleCheckout}
                    >
                      Checkout
                    </button>
                  </Link>
                </>
                )
              : (
                <div className='mx-auto p-5 font-semibold'>
                  <LiaCartPlusSolid
                    size='50px'
                    fill='#9A9B9E'
                  />
                  <span>
                    Empty
                  </span>
                </div>)
        }
      </div>
    </section>
  )
}
