import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center bg-[#F4F6FF] pt-20 pb-30 gap-14'>
        <div>
            <Title title='What Our Guests Say' subTitle='Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.' />

            {/* Testimonial cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-16 lg:px-24 xl:px-32 gap-4 mt-12 max-w-[1440px] w-full mx-auto'>
                {testimonials.map((items)=>(
                    <div key={items.id} className='flex flex-col relative items-start justify-start bg-white px-6 py-7 rounded-2xl shadow-md gap-4'>
                        {/* profile */}
                        <div className='flex flex-row items-center justify-center '>
                            <img className='size-12 rounded-full ' src={items.image} alt="client-picture" />
                            <div className='flex flex-col font-playfair mx-3'>
                            <p className='text-base'>{items.name}</p>
                            <p className='text-xs text-gray-400'>{items.address}</p>
                            </div>
                        </div>
                        {/* star review */}
                        <div className='flex flex-row gap-0.5 mb-1'><StarRating rating={items.rating}/></div>
                        
                        {/* review */}
                        <p className='text-sm text-gray-500 text'>"{items.review}"</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials