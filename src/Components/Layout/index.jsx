export const Layout = ({ children }) => {
  return (
    <div
      className='flex flex-col items-center gap-4 pt-28 min-h-screen dark:bg-gray-800 dark:text-gray-50'
    >
      {children}
    </div>
  )
}
