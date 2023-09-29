import React from 'react'
import Menu from '../feature/Menu'
import Link from 'next/link'
import CartIcon from '../feature/CartIcon'

const Navbar = () => {

  const user = false

  return (
    <section>
      <div className='flex flex-row justify-between border-b-2 border-red-500 h-12 items-center p-6 md:h-20 lg:px-20 xl:px-40'>

        {/* NAVLINKS - LEFT */}

        <div className='hidden md:flex gap-4'>
          <Link 
            href="/"
            className="text-md font-normal text-red-500 uppercase"
          >
            Home
          </Link>
          <Link 
            href="/menu"
            className="text-md font-normal text-red-500 uppercase"
          >
            Menu
          </Link>
          <Link 
            href="/"
            className="text-md font-normal text-red-500 uppercase"
          >
            Contact
          </Link>
        </div>

        {/* LOGO */}

        <div className="text-xl font-normal text-red-500 uppercase md:font-bold">
          <Link 
            href="/"
          >
            Massimo
          </Link>
        </div>

        {/* USER LINKS */}

        <div className='hidden md:flex items-center gap-2 text-md font-normal text-red-500 uppercase'>
          {!user 
          ? 
            <Link 
              href="/login"
            >
              Login
            </Link>
          :
            <Link 
              href="/orders"
            >
              Orders
            </Link>
          }
          <CartIcon />
        </div>

        {/* NAVLINKS - RIGHT */}
        
        <div className='md:hidden'>
          <Menu />
        </div>
      </div>
    </section>
  )
}

export default Navbar