"use client"

import Button from "../common/Button"
import Image from "next/image"
import { useEffect, useState } from "react"

// Hero Data

const heroData = [
  {
    id: 1,
    title: "Perpetually crisp, endlessly hot, and forever fresh.",
    image: "/heroImage1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are.",
    image: "/heroImage2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/heroImage3.png",
  },
]

const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  // AUTO SLIDE FUNCTION USING USEEFFECT
  
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === heroData.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className='flex lg:flex-row flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-128px)] bg-fuchsia-50'>

        {/* TEXT CONTAINER */}

        <div className='flex flex-col items-center justify-center flex-1 w-full gap-8 font-bold text-red-500'>
          <h1 className="p-4 text-4xl leading-normal text-center capitalize md:text-5xl lg:text-6xl">
            {heroData[currentSlide].title}
          </h1>
          <Button />
        </div>

        {/* IMAGE CONTAINER */}

        <div className='relative flex-1 w-full'>
          <Image 
            src={heroData[currentSlide].image}
            alt="hero Image"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  )
}

export default Hero