import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { OrderCart } from '../../Components/OrderCart'
import { Layout } from '../../Components/Layout'
import { totalPrice } from '../../Utils'

function MyOrder () {
  const {
    order
  } = useContext(ShoppingCartContext)
  console.log(order?.slice(-1)[0].products)
  return (
    <Layout>
      <div className='w-full flex flex-col items-center gap-4 pb-12'>
        <h2>My Order</h2>
        {
          order?.slice(-1)[0].products.map((item, index) => {
            return (
              <OrderCart
                key={item.id}
                {...item}
              />
            )
          })
        }
        <span className='sticky bottom-2 bg-green-400 border text-green-800 rounded-md px-3 font-semibold text-lg'>{`Total: $${totalPrice(order.slice(-1)[0].products)}`}</span>
      </div>

    </Layout>
  )
}

export default MyOrder
