import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section>
      <div className='flex items-center justify-between h-20 text-red-500 uppercase lg:px-20 xl:px-40'>
        <Link 
          href={"/"}
          className='text-xl font-bold'
        >
          Massimo
        </Link>
        <p>
          &copy; all right reserved.
        </p> 
      </div>
    </section>
  )
}

export default Footer