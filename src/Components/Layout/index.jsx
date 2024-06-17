export const Layout = ({ children }) => {
  return (
    <div
      className='flex flex-col items-center gap-4 pt-24 min-h-screen'
    >
      {children}
    </div>
  )
}
