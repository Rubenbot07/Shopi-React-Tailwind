import { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home () {
  const {
    items
  } = useContext(ShoppingCartContext)
  return (
    <Layout>
      Home
      <section
        className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl p-5'
      >
        {
          items?.map(item => {
            return (
              <Card
                key={item.id}
                {...item}
              />
            )
          })
        }
      </section>
      <ProductDetail />
    </Layout>
  )
}

export default Home
