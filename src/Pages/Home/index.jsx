import { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import { LuSearchX } from 'react-icons/lu'

function Home () {
  const {
    items,
    searchByTitle,
    setSearchByTitle,
    filteredItems,
    searchByCategory
  } = useContext(ShoppingCartContext)
  const renderView = () => {
    if (searchByCategory?.length > 0 || searchByTitle?.length > 0) {
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
          <div className='flex flex-col items-center text-center absolute top-1/3 text-lg font-semibold'>
            <LuSearchX
              size='50px'
              color='#9A9B9E'
            />
            <span>No results</span>
          </div>
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
      <h1 className='font-semibold text-xl'>Home</h1>
      <input
        type='search'
        placeholder='Search Product'
        className='border border-black sm:w-80 rounded-md p-2 text-center focus:outline-none dark:bg-slate-900 dark:border-gray-500'
        onChange={(event) => setSearchByTitle(event.target.value.toLocaleLowerCase())}
      />
      <section
        className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-screen max-w-screen-xl px-5 pb-12 pt-5'
      >
        {renderView()}
      </section>
      <ProductDetail />
    </Layout>
  )
}

export default Home
