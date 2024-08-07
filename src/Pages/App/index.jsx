import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import { Navbar } from '../../Components/Navbar'
import { Footer } from '../../Components/Footer'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import EditAcount from '../EditAccount/index.jsx'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:category', element: <Home /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-in/sign-up', element: <SignUp /> },
    { path: '/*', element: <NotFound /> },
    { path: '/my-account/edit-account', element: <EditAcount /> }

  ])
  return routes
}

function App () {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
        <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
