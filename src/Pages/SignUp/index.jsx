import { Layout } from '../../Components/Layout'
import { SignUpForm } from '../../Components/SignUpForm'
function SignUp () {
  return (
    <Layout>
      <h1 className='font-semibold text-xl'>Create your account</h1>
      <SignUpForm />
    </Layout>
  )
}

export default SignUp
