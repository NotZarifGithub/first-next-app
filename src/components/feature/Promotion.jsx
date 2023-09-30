import Image from 'next/image'
import Button from '../common/Button'
import CountDown from './CountDown'

const Promotion = () => {

  const promoTitle = "delicious burger & french fry"
  const promoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus, eius magni doloribus pariatur sequi est dolorum fugit quasi itaque?"
  
  return (
    <section>
      <div className='flex flex-col h-screen text-white bg-black gap-7 md:flex-row md:justify-center md:bg-[url("/offerBg.png")]  md:h-[70vh]'>

        {/* TEXT CONTAINER */}

        <div className='flex flex-col items-center justify-center flex-1 gap-8 p-6 text-center'>
          <h1 className='text-4xl font-bold uppercase xl:text-5xl'>
            {promoTitle}
          </h1>
          <p className='xl:text-xl'>
            {promoDesc}
          </p>
          <p className='text-5xl'>
            07:10:38:59
          </p>
          <Button />
        </div>

        {/* IMAGE CONTAINER */}

        <div className='relative flex-1 w-full md:h-full'>
          <Image 
            src="/offerProduct.png"
            alt=""
            className='object-contain'
            fill
          />
        </div>
      </div>
    </section>
  )
}

export default Promotion