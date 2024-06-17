export const Layout = ({ children }) => {
  return (
    <div
      className='flex flex-col items-center mt-20 gap-4 pt-4 h-full min-h-screen'
    >
      {children}
    </div>
  )
}
