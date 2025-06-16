import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import FeaturedTitle from './FeaturedTitle'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {

    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-[#F4F6FF] py-20 gap-14'>

        <FeaturedTitle title='Discover Your Perfect Match' subTitle='Explore your dream home effortlessly with our innovative real estate solutions. We connect you to the ideal property in vibrant African cities'  />

        <div className='flex flex-wrap items-center justify-center gap-6'>
            {roomsDummyData.slice(0,4).map((room, index)=>(
                <HotelCard key={room.id} room={room} index={index}/>
            ))}
        </div>

        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='items-center flex py-2 px-8 border border-gray-300 rounded-sm bg-white hover:bg-gray-950 transition-all hover:text-white shadow-md '>View All Hotels</button>
    </div>
  )
}

export default FeaturedDestination