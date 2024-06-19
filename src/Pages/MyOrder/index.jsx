import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { OrderCart } from '../../Components/OrderCart'
import { Layout } from '../../Components/Layout'
import { totalPrice } from '../../Utils'
import { FaChevronLeft } from 'react-icons/fa'

function MyOrder () {
  const {
    order
  } = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') { index = order.length - 1 }
  return (
    <Layout>
      <div className='w-2/3 max-w-[700px] min-w-80 flex flex-col items-center gap-5 pb-12'>
        <div className='flex items-center justify-center relative w-2/3 max-w-[700px] min-w-80'>
          <Link to='/my-orders'>
            <span className='absolute left-4 top-1'>
              <FaChevronLeft
                size='20px'
              />
            </span>
          </Link>
          <h1 className='font-semibold text-xl'>My Order</h1>
        </div>
        {
          order?.[index]?.products?.map((item) => {
            return (
              <OrderCart
                key={item.id}
                {...item}
              />
            )
          })
        }
        <div className='sticky bottom-2 pl-4 w-2/3 max-w-[700px] min-w-80'>
          <span className='bg-green-400/80  text-green-800 rounded-md px-3 font-semibold text-lg dark:text-slate-900'>{`Total: $${totalPrice(order.slice(-1)[0].products)}`}</span>
        </div>
      </div>

    </Layout>
  )
}

export default MyOrder
