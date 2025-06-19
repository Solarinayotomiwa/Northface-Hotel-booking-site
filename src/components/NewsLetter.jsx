import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
const NewsLetter = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 pt-15 pb-15 max-w-[1440px] w-full mx-auto'>
    <div className='flex flex-col bg-[#1A222F] items-center rounded-2xl px-6 py-12 md:py-16 mt-20 mb-30 text-white'>

        {/* Title */}
        <Title title='Stay Inspired' subTitle='Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.'/>

        {/* Email button */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 w-full mt-8 mb-5'>
          <input type="text" className='items-center border border-white/50 bg-white/20 py-2 rounded-md px-4 max-w-66 w-full' placeholder='Enter your email' />
          <button className='flex flex-row items-center gap-1 py-2 px-4 bg-white rounded-md text-gray-900'>
            Subscribe 
            <img className='w-4 h-4' src={assets.arrowIcon} alt="arrowIcon" />
          </button>
        </div>
        {/* Support text */}
        <p className='text-sm font-light text-gray-300'>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>

       
    </div>
    </div>
  )
}

export default NewsLetter