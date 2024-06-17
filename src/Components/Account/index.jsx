export const Account = () => {
  return (
    <section className='flex flex-col gap-6 pt-6'>
      <div className=''>
        <ul className='flex flex-col gap-3'>
          <li>
            Name: <span className='font-semibold'>Ruben Botero</span>
          </li>
          <li>
            Email: <span className='font-semibold'>RubenBot77@hotmail.com</span>
          </li>
          <li>
            Address: <span className='font-semibold'>Saturno 3-14, Dosquebradas</span>
          </li>
          <li>Password: <span className='font-semibold'>*********</span></li>
        </ul>
      </div>
      <button className='border border-black w-full rounded-md font-semibold py-2'>Edit</button>
    </section>
  )
}
