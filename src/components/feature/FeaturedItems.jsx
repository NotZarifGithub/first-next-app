import Image from 'next/image'
import Button from '../common/Button'
import { featuredProducts } from '@/src/data'

const FeaturedItems = () => {
  return (
    <section>
      <div className='w-screen overflow-x-scroll text-red-500'>

        {/* WRAPPER */}

        <div className='flex w-max '>

          {/* SINGLE ITEM */}

          {featuredProducts.map(item => (
            <div  
              className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition duration-300 ease-in-out md:w-[50vw] lg:w-[33vw] lg:h-[80vh]'
              key={item.id}
            >

              {/* IMAGE CONTAINER */}

              <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                <Image 
                  src={item.img}
                  alt=""
                  className='object-contain'
                  fill
                />
              </div>

              {/* TEXT CONTAINER */}

              <div className='flex flex-col items-center justify-center gap-4 text-center py-7'>
                <h1 className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>
                  {item.title}
                </h1>
                <p className='py-4 2xl:py-8'>
                  {item.desc}
                </p>
                <h1 className='font-bold'>
                  ${item.price}
                </h1>
                <Button />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedItems