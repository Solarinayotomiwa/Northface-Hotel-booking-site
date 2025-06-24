import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'
import { useNavigate } from 'react-router-dom'

const AllRooms = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] w-full mx-auto'>

        {/* Left side - content */}
        <div className=''>
            {/* Top text */}
            <div className='flex flex-col items-start text-left'>
                <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
                <p className='text-gray-400 text-sm md:text-base mt-2 max-w-174'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
            </div>
            {/* Rooms */}
            <div>
              {roomsDummyData.map((room)=>(
                <div key={room._id} className='flex flex-col md:flex-row items-start gap-6 py-10 border-b border-gray-300 last:pb-30 last:border-0'>
                  <img src={room.images[1]} alt="room-Image" className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' onClick={()=>{navigate(`/rooms/${room._id}`); scrollTo(0,0)}} />
                  <div className='flex flex-col gap-3 items-start'>
                    <p className='text-sm text-gray-400 font-medium'>{room.hotel.city}</p>
                    <p onClick={()=>{navigate(`/rooms/${room._id}`); scrollTo(0,0)}} className='text-3xl text-gray-900 font-playfair cursor-pointer '>{room.hotel.name}</p>
                    <div>
                    <div className='flex flex-row gap-0.5 mb-1 items-center text-sm'>
                      <StarRating rating={4}/> 
                      <p className='ml-2'>200+ reviews</p> 
                    </div>
                    </div>

                    <div className='flex flex-row items-center gap-2 mt-2'>
                      <img src={assets.locationIcon} alt="Location-Icon" />
                      <p className='text-sm text-gray-400'>{room.hotel.address}</p>
                    </div>

                    {/* Room Amenities */}
                    <div className='flex flex-row md:flex-row items-center mt-2 gap-2'>
                      {room.amenities.map((item, index)=>(
                        <div key={index} className='flex items-center gap-2 pl-3 pr-4 bg-[#F0F0F7] rounded-lg py-2'>
                          <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                          <p className='text-xs font-medium whitespace-nowrap max-w-[120px] overflow-hidden'>{item}</p>
                        </div>
                      ))}
                    </div>

                    <p><span className='text-2xl text-gray-800'>${room.pricePerNight}</span>/night</p>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Right side - filters */}
        <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>
          <div>
            <p>FILTERS</p>
            <div>
              <span>CLEAR</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AllRooms