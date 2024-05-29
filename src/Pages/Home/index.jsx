import { useState, useEffect } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { apiURL } from '../../API'
import { ProductDetail } from '../../Components/ProductDetail'

function Home () {
  const [items, setItems] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiURL}/products?limit=`)
        const data = await response.json()
        setItems(data)
        console.log(data)
      } catch (error) {
        console.log(`Oh no we have an error: ${error}`)
      }
    }
    fetchData()
  }, [])
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
