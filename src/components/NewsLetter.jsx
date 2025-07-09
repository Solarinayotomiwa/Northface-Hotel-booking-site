import React from 'react'
import Title from './Title'
import { assets, testimonials } from '../assets/assets'
import StarRating from './StarRating'
const NewsLetter = () => {

  return (
    <div className='relative px-6 md:px-16 lg:px-24 xl:px-32 pt-15 pb-15 max-w-[1440px] w-full mx-auto'>
    <div className='flex flex-col bg-gradient-to-b from-[#4850F2] to-[#3626A7] items-center md:items-start rounded-2xl px-6 md:px-20 py-12 md:py-16 mt-20 mb-30 text-white relative overflow-hidden shadow-md'>

        {/* star review */}
        <div className='flex flex-row gap-2 mb-3'>
          <div className='flex flex-row'>
          {testimonials.map((users)=>( 
          <img key={users.id} src={users.image} alt="users-image" className='w-8 h-8 rounded-full -ml-3 first:ml-0' />  
          ))}
          </div>
        <div className='flex flex-col'>
        <div className='flex flex-row gap-0.5 mb-1'><StarRating rating={5} style='size-3'/></div>
        <p className='text-sm font-light leading-none'>loved by 20k+ users</p>
        </div>
        </div>

        {/* Title */}
        <Title title='Start listing your properties today!' subTitle='Sign up and access our community of buyers and agents.' align='left' subTitleColor='white'/>

        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='items-center flex mt-6 py-2 px-8 border border-gray-300 rounded-sm bg-white text-[#4850F2] font-medium hover:bg-gray-950 transition-all hover:text-white shadow-md '>Get started</button>

        {/* vector */}
        <img src={assets.logoVector} alt="vector" className='max-md:hidden absolute -bottom-50 -right-30 rotate-2 size-90 -z-0' />


       
    </div>
    </div>
  )
}

export default NewsLetter