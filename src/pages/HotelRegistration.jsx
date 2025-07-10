import React from 'react'
import { assets } from '../assets/assets'

const HotelRegistration = () => {
  return (
    <div className='flex fixed top-0 right-0 left-0 bottom-0 justify-center items-center bg-black/50 z-100 px-16'>

      {/* Content here */}
        <form className='flex flex-col md:flex-row bg-white w-full md:max-w-4xl rounded-2xl overflow-hidden'>

          {/* Image */}
          <img src={assets.regImage} alt="" className='flex w-full h-48 md:h-auto md:w-1/2 object-cover' />

          {/* Input information */}
          <div className='flex flex-col items-center w-full md:w-1/2 py-12 relative'>

            <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 right-4' />

            <h1 className='text-xl md:text-2xl font-bold'>Register Your Hotel</h1>
            
            <div className='flex flex-col gap-3 items-start w-full px-8 py-6'>

              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="hotel_name" className='text-sm  md:text-base text-gray-700'>Hotel Name</label>
              <input id="hotel_name" type="text" placeholder='e.g. NorthFace Hotel' className='flex w-full px-3 py-2 border border-gray-300 rounded-sm outline-[#4850F2]' required/>
              </div>

              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="hotel_name" className='text-sm  md:text-base text-gray-700'>Phone</label>
              <input id="phone_number" type="text" placeholder='+234 12 567 8976' className='flex w-full px-3 py-2 border border-gray-300 rounded-sm outline-[#4850F2]' required/>
              </div>

              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="address" className='text-sm  md:text-base text-gray-700'>Address</label>
              <input id="hotel_name" type="text" placeholder='e.g. NorthFace Hotel' className='flex w-full px-3 py-2 border border-gray-300 rounded-sm outline-[#4850F2]' required/>
              </div>

              <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="hotel_name" className='text-sm  md:text-base text-gray-700'>Hotel Name</label>
              <input id="hotel_name" type="text" placeholder='e.g. NorthFace Hotel' className='flex w-full px-3 py-2 border border-gray-300 rounded-sm outline-[#4850F2]' required/>
              </div>

            <button className='flex mt-2 px-8 py-2 text-base text-white bg-[#4850F2] rounded-sm cursor-pointer hover:bg-[#262EC8] active:scale-95 transition-all'>Register</button>
            </div>


          </div>

        </form>
    </div>
  )
}

export default HotelRegistration