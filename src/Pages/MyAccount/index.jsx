import { Layout } from '../../Components/Layout'
import { Account } from '../../Components/Account'
function MyAccount () {
  return (
    <Layout>
      <h1 className='font-semibold text-xl'>My Account</h1>
      <Account />
    </Layout>
  )
}

export default MyAccount
