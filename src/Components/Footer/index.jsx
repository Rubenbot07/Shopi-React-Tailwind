import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <section className='flex flex-col gap-4 w-screen absolute bg-gray-100 py-4 px-2 md:items-center lg:flex-row lg:flex-wrap lg:justify-center'>
      <div>
        <span className='block text-xl font-semibold text-gray-800 md:text-3xl lg:w-screen lg:text-center'>Shopi</span>
      </div>
      <div className='flex flex-col gap-3 text-sm text-gray-800 w-1/2 md:flex-row md:w-screen md:justify-center lg:w-auto'>
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Feedback</span>
      </div>
      <div className='flex gap-4 md:w-screen md:justify-center lg:w-auto'>
        <FaGithub fill='black' className='size-5 md:size-8' />
        <FaInstagram fill='black' className='size-5 md:size-8' />
        <FaLinkedin fill='black' className='size-5 md:size-8' />
      </div>
      <hr className='w-screen bg-gray-400 h-0.5' />
      <span className='text-gray-800 text-sm lg:w-screen lg:text-center'>© 2024, Dosquebradas - Colombia Todos los derechos reservados</span>
    </section>
  )
}
