import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section>
      <div className='flex justify-between items-center h-20 lg:px-20 xl:px-40 text-red-500 uppercase'>
        <Link 
          href={"/"}
          className='font-bold text-xl'
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