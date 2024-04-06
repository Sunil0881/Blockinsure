import React from 'react'
import lifeins from '../assests/lifeins.jpg';
const Home = () => {
  return (
      
    <div className='justify-between grid grid-cols-2'>
        <div className='px-28 mt-16 text-center'>
          <p className='mb-10 text-3xl text-blue-600 font-bold'>"Protecting Your Tomorrows, Today."</p>
          <p className='font-medium text-gray-600 text-center'>
            "Protect your loved ones and secure your legacy with [BlockInsure]. Our reliable life insurance solutions offer peace of mind and financial security, tailored to your unique needs."
          </p>
          <button className='mt-10 px-10 rounded-full text-gray-600 p-2 bg-red-200 font-medium'>view</button>
        </div>
        <div className='px-28 mt-16'>
          <img width='400' className="" src={lifeins}>
          </img>
        </div>
      </div>

  )
}

export default Home