import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({room, index}) => {
  return (
    <Link to={'/rooms/' + room._id} onClick={()=> scrollTo(0,0)} key={room._id} className='bg-white rounded-xl shadow-md overflow-hidden max-w-70 w-full relative text-gray-500/90'>
        
        <img src={room.images[0]} alt="" />
        {index % 2 === 0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p>}
        
        {/*group text*/}
        <div className='p-4 mt-5'>
            {/*top text*/}
            <div className='flex items-center justify-between'>
                <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p>
                <div className='flex flex-row items-center gap-1'>
                    <img src={assets.starIconFilled} alt="star-icon"/>
                    <p>4.5</p>
                </div>
            </div>

            {/*middle text*/}
            <div className='flex items-center mt-2 gap-1 text-sm '>
                <img src={assets.locationIcon} alt="location-icon"/>
                <span>{room.hotel.address}</span>
            </div>
             
             {/*last text*/}
            <div className='flex justify-between items-center mt-4'>
                <p><span className='text-2xl text-gray-800'>${room.pricePerNight}</span>/night</p>
                <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded-sm hover:bg-[#3A43EE] hover:text-white transition-all cursor-pointer'>Book Now</button>
            </div>
        </div>
    </Link>
  )
}

export default HotelCard