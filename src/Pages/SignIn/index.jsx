import { Layout } from '../../Components/Layout'
import { SignInForm } from '../../Components/SignInForm'
function SignIn () {
  return (
    <Layout>
      <h1 className='font-semibold text-xl'>Log in into your Shopi account</h1>
      <SignInForm />
    </Layout>
  )
}

export default SignIn
