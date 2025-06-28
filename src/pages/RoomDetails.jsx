import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {

    const {id} = useParams();
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(()=>{
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [])

  return room && (
    <div className='flex flex-row lg:flex-col items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] w-full mx-auto'>
        {/* Top section */}
        <div className='flex flex-col gap-2 mb-6'>

         <div className='flex flex-row gap-4 items-center'>
            <h1 className=' text-2xl md:text-3xl text-gray-800 font-playfair font-medium'>{room.hotel.name} <span className='text-sm text-gray-600'>{room.roomType}</span> </h1>
            <div className='py-1 px-2.5 bg-[#F8701B] rounded-full text-white'>20% OFF</div>
         </div>

         <div className='flex flex-row gap-0.5 mb-1 items-center text-sm'>
                <StarRating rating={4}/> 
                <p className='ml-2'>200+ reviews</p> 
         </div>

         <div className='flex flex-row items-center gap-1'>
            <img src={assets.locationIcon} alt="Location-Icon" />
            <p className='text-sm text-gray-500'>{room.hotel.address}</p>
         </div>

        </div>

        {/* Image section */}
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt='Main-Image' className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index)=>(
            <img onClick={()=> setMainImage(image)} key={index} src={image} alt="Other room images" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-[#F8701B]'}`} />
          ))}
        </div>
        </div>

        {/* Subtitle section */}
          <div className='flex flex-row items-start mt-4'>
            <div className='flex flex-col items-start'>
            <h2 className='font-playfair font-medium text-gray-800 text-[20px] md:text-[28px]'>Experience Luxury Like Never Before</h2>
            <div className='flex flex-wrap md:flex-row items-center mt-4 gap-2'>
              {room.amenities.map((item, index)=>(
              <div key={index} className='flex items-center gap-2 pl-3 pr-4 bg-[#F0F0F7] rounded-lg py-2'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs font-medium whitespace-nowrap max-w-[120px] overflow-hidden'>{item}</p>
                </div>
                ))}
              </div>
            </div>
            <div>
              <span>Price</span>
              <p>{roomsDummyData.pr}</p>
            </div>
          </div>
    </div>
  )
}

export default RoomDetails