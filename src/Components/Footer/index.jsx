import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <section className='flex flex-col gap-4 w-full absolute bg-gray-100 py-4 px-2 md:items-center lg:flex-row lg:flex-wrap lg:justify-center dark:bg-slate-900'>
      <div>
        <span className='block text-xl font-semibold text-gray-800 md:text-3xl lg:w-screen lg:text-center dark:text-gray-50'>Shopi</span>
      </div>
      <div className='flex flex-col gap-3 text-sm text-gray-800 w-1/2 md:flex-row md:w-screen md:justify-center lg:w-auto dark:text-gray-50 '>
        <span className='cursor-pointer'>About Us</span>
        <span className='cursor-pointer'>Contact Us</span>
        <span className='cursor-pointer'>Feedback</span>
      </div>
      <div className='flex gap-4 md:w-screen md:justify-center lg:w-auto'>
        <FaGithub className='size-5 md:size-8 fill-gray-800 dark:fill-gray-50 cursor-pointer' />
        <FaInstagram className='size-5 md:size-8 fill-gray-800 dark:fill-gray-50 cursor-pointer' />
        <FaLinkedin className='size-5 md:size-8 fill-gray-800 dark:fill-gray-50 cursor-pointer' />
      </div>
      <hr className='w-full bg-gray-400 h-0.5' />
      <span className='text-gray-800 text-sm lg:w-screen lg:text-center dark:text-gray-50'>© 2024, Dosquebradas - Colombia Todos los derechos reservados</span>
    </section>
  )
}
