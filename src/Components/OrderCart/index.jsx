export const OrderCart = (props) => {
  return (
    <section className='flex flex-col w-2/3 max-w-[700px] min-w-80 h-auto'>
      <div className='flex items-center justify-between gap-2 px-6 py-4 border border-black rounded-md'>
        <div className='flex items-center gap-3'>
          <span className='font-semibold'>{`(${props.quantity})`}</span>
          <picture className='w-2/3 min-w-20 px-1 h-full bg-white rounded-md'>
            <img
              src={props.image} alt={props.title}
              className='w-20 h-20 object-contain rounded-md'
            />
          </picture>
        </div>
        <span className='w-2/3 truncate text-lg'>{props.title}</span>
        <span className='font-semibold text-lg mx-w-40'>{`$${props.price * props.quantity}`}</span>
      </div>
    </section>
  )
}
