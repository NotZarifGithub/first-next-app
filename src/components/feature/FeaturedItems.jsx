import Image from 'next/image'
import Button from '../common/Button'

const FeaturedItems = () => {
  return (
    <section>
      <div className='w-screen overflow-x-scroll text-red-500'>

        {/* WRAPPER */}

        <div className='flex w-max'>

          {/* SINGLE ITEM */}

          <div className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'>

            {/* IMAGE CONTAINER */}

            <div className='relative flex-1 w-full'>
              <Image 
                src="/p1.png"
                alt=""
                className='object-contain'
                fill
              />
            </div>

            {/* TEXT CONTAINER */}

            <div className='flex flex-col items-center justify-center gap-2 py-4 text-center'>
              <h1 className='text-xl font-bold uppercase'>
                test 
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cumque voluptatibus impedit rem aliquid quisquam dolores inventore, cum soluta? Officiis.
              </p>
              <h1 className='font-bold'>
                $0.00
              </h1>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedItems