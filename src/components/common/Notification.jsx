import React from 'react'

const Notification = () => {

  const notificationDesctiption = "Free delivery for all orders over $50. Order your food now"
  return (
    <section>
      <div className='h-12 bg-red-500 text-white flex justify-center items-center text-center px-5 text-sm md:text-base cursor-pointer'>
        {notificationDesctiption}
      </div>
    </section>
  )
}

export default Notification