import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { OrdersCart } from '../../Components/OrdersCart'
import { Link } from 'react-router-dom'

function MyOrders () {
  const {
    order
  } = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className='flex flex-col items-center gap-5'>
        <h2>My Orders</h2>
        {
            order?.map((item, index) => {
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
        }
      </div>
    </Layout>
  )
}

export default MyOrders
