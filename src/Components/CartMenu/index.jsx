import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { IoClose } from 'react-icons/io5'
import './style.css'

export const CartMenu = () => {
  const {
    isCartProductsOpen,
    handleCartProducts
  } = useContext(ShoppingCartContext)
  return (
    <section className={`${isCartProductsOpen ? 'flex fixed' : 'hidden'} cart flex-col gap-3 bg-white rounded-md w-[95%] max-w-96 right-0 left-0 mx-auto border border-black/40 z-10 h-auto max-h-[80%] overflow-y-auto min-h-48 shadow-lg top-16 px-4 py-6 md:w-[320px] md:right-1 md:max-h-[cal(100vh - 68px)] md:left-auto`}>
      <span className='absolute right-4'>
        <IoClose size='30px' />
      </span>
      <h2 className='text-lg text-center font-semibold'>My Order</h2>
      <div className='flex justify-between pb-2 border-b border-black/10'>
        <picture className='flex items-center w-3/4 gap-1'>
          <img
            className='w-2/4 rounded-md object-contain h-2/3 border border-black/10 p-2'
            src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt=''
          />
          <span className='text-md truncate h-auto w-/1/2'>Product Title</span>
        </picture>
        <div className='flex items-center gap-2'>
          <span className='font-semibold text-lg'>$99</span>
          <span>
            <IoClose size='25px' />
          </span>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <button className='font-semibold border border-red-400/85 text-red-400/85 px-3 rounded-md'>Clean Cart</button>
        <span className='font-semibold px-4'>$99</span>
      </div>
    </section>
  )
}
