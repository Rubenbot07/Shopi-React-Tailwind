import { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home () {
  const {
    items,
    searchByTitle,
    setSearchByTitle,
    filteredItems,
    searchByCategory
  } = useContext(ShoppingCartContext)
  const renderView = () => {
    if (searchByTitle?.length > 0 || searchByCategory?.length > 0) {
      if (filteredItems?.length > 0) {
        return (
          filteredItems?.map(item => {
            return (
              <Card
                key={item.id}
                {...item}
              />
            )
          })
        )
      } else {
        return (
          <div className='text-center absolute text-lg font-semibold'>No results</div>
        )
      }
    } else {
      return (
        items?.map(item => {
          return (
            <Card
              key={item.id}
              {...item}
            />
          )
        })
      )
    }
  }

  return (
    <Layout>
      <h1>Home</h1>
      <input
        type='search'
        placeholder='Search Product'
        className='border border-black w-80 rounded-md p-2 text-center focus:outline-none'
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <section
        className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl p-5'
      >
        {renderView()}
      </section>
      <ProductDetail />
    </Layout>
  )
}

export default Home
