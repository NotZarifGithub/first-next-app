"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    title: "Working Hours",
    url: "/",
  },
  {
    id: 4,
    title: "Contact",
    url: "/",
  },
]

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const user = false;

  return (
    <section>
        <div>

          {/* HAMBURGER */}

          {!isOpen 
          ? 
            <Image 
              src="/hamburger-open.svg"
              alt="hamburger open icon"
              width={24}
              height={24}
              onClick={()=>setIsOpen(true)}
              className="cursor-pointer"
            />
          : 
            <Image 
              src="/hamburger-close.svg"
              alt="hamburger close icon"
              width={24}
              height={24}
              onClick={()=>setIsOpen(false)}
              className="cursor-pointer"
            />
          }

          {/* HAMBURGER DROPDOWN */}

          {isOpen 
          && 
            <div className="bg-red-500 text-white absolute left-0 top-24 w-full flex items-center flex-col justify-center h-[calc(100vh-6rem)] text-2xl gap-4 z-10">
              {navLinks.map(item=>(
                <Link 
                  key={item.id}
                  href={item.url}
                  onClick={()=>setIsOpen(false)}
                >
                  {item.title}
                </Link>
                ))}
                {!user 
                ? 
                  <Link 
                    href={"/login"}
                    onClick={()=>setIsOpen(false)}
                  >
                    Login
                  </Link>
                :
                  <Link 
                    href={"/orders"}
                    onClick={()=>setIsOpen(false)}
                  >
                    Order
                  </Link>
                }
                <CartIcon 
                  onClick={()=>setIsOpen(false)}
                />
            </div>
          }
        </div>
    </section>
  )
}

export default Menu