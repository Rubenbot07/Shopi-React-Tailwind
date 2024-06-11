import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { OrdersCart } from '../../Components/OrdersCart'
import { Link } from 'react-router-dom'
import { LiaCartPlusSolid } from 'react-icons/lia'

function MyOrders () {
  const {
    order
  } = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className='flex flex-col items-center gap-5'>
        <h2>My Orders</h2>
        {
            order?.length > 0
              ? (order.map((item, index) => {
                  return (
                    <Link
                      to={`/my-orders/${index}`}
                      key={index}
                    >
                      <OrdersCart
                        totalPrice={item.totalPrice}
                        totalProducts={item.totalProducts}
                        date={item.date}
                      />
                    </Link>
                  )
                })
                )
              : (
                <div className='flex flex-col items-center mx-auto p-5 font-semibold'>
                  <LiaCartPlusSolid
                    size='15rem'
                    fill='#9A9B9E'
                  />
                  <span className='text-gray-500 text-lg'>
                    There are not orders yet
                  </span>
                </div>
                )
        }
        {
        }
      </div>
    </Layout>
  )
}

export default MyOrders
