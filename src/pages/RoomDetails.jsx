import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomCommonData, roomsDummyData, testimonials } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {

    const {id} = useParams();
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    const host = testimonials.find((owner) => owner.id === 1);

    useEffect(()=>{
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [])

  return room && (
    <div className='flex flex-col lg:flex-col items-start justify-between py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] w-full mx-auto'>
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
        <div className='flex flex-col lg:flex-row mt-2 gap-6'>
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
          <div className='flex flex-col md:flex-row items-start md:items-center gap-6 justify-between mt-4 w-full border-b pb-8 border-gray-200'>
            {/* Name & cards */}
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
            {/* Price */}
              <p className='text-2xl md:text-3xl'>${room.pricePerNight}/day</p>
          </div>

          {/* Check in section */}
          <div className='flex flex-col mt-10 md:flex-row items-start md:items-center justify-between gap-6 w-full shadow-xl py-4 px-6 rounded-xl' style={{boxShadow: '0 10px 40px rgba(0, 0, 0, .15)'}}>

            <div className='flex flex-row items-center gap-6'>

              <div className='flex flex-col items-start gap-1.5 border-r border-gray-200 pr-8 '>
                <label htmlFor='checkInDate' className='font-medium'>Check-in</label>
                <input type="date" id='checkInDate' className='w-full rounded border border-gray-300 px-3 py-1.5 outline-none text-sm text-gray-500' />
              </div>

              <div className='flex flex-col items-start gap-1.5 border-r border-gray-200 pr-8 max-md:w-full'>
                <label htmlFor='check0utDate' className='font-medium'>Check-Out</label>
                <input type="date" id="check0utDate" className='w-full rounded border border-gray-300 px-3 py-1.5 outline-none text-sm text-gray-500'/>
              </div>

              <div className='flex flex-col items-start gap-1.5 pr-8'>
                <p>Guest</p>
                <input type="number" placeholder="0" id="guest" className='max-w-20 rounded border border-gray-300 px-3 py-1.5 outline-none text-sm text-gray-500' />
              </div>

            </div>
            <button type='submit' className='w-full md:w-[400px] px-3 py-3 md:py-4 cursor-pointer bg-[#3A43EE] hover:bg-[#4850F2] hover:scale-103 active:scale-90 transition-all text-white text-base rounded-sm'>Check Availability</button> 

          </div>

          {/* Room details */}
          <div className='flex flex-col w-full gap-4 mt-10 pb-8'>
           
          {roomCommonData.map((data, index)=>(
            <div key={index} className='flex flex-row gap-2 items-start'>
              <img src={data.icon} alt="data icon" className='w-6 h-6 mt-1' />
              <div className='flex flex-col gap-0.5 items-start'>
                <p className='font-medium text-gray-800 text-base'>{data.title}</p>
                <p className='font-regular text-gray-600 text-sm'>{data.description}</p>
              </div>
            </div>
          ))}

          </div>

          {/* Room text */}
          <p className='text-sm text-gray-600 mt-10 py-8 border-y border-gray-200'>
            Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
          </p>

          {/* Map section */}
          <div className='flex flex-col mt-10 w-full border-b pb-8 border-gray-200 '>

            <p className='font-playfair text-medium text-2xl'>Location on map</p>
            <div className='w-full h-[240px] md:h-[440px] mt-4 rounded-xl shadow-sm justify-center bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${assets.makeShiftMap})` }}>

              {/* Zoom icons */}
              <div className='bg-white w-fit p-2 rounded-sm shadow-2xl absolute top-4 right-4 md:top-6 md:right-6 '>
                <img src={assets.addIcon2} alt="add-Icon" className='size-4 md:size-6  mb-2' />
                <div className='border-b border-gray-200'></div>
                <img src={assets.minusIcon} alt="minus-Icon" className='size-4 md:size-6 mt-2' />
              </div>

              {/* Map icon interaction */}
              <div class="flex absolute inset-0 justify-center items-center gap-2 ">
                <div className="group relative inline-flex flex-col items-center hover:scale-110 transition-all">
                  <img src={assets.homeFill} alt="home-fill-icon" className='bg-[#2563EB] size-8 md:size-10 p-1 rounded-full' />
              
                  {/* Tooltip */}
                  <div className="bg-[#2563EB] py-2 px-3 rounded-md group-hover:flex hidden absolute -top-4 -translate-y-full mt-1 left-1/2 -translate-x-1/2 z-10 ">
                    <span className="text-white whitespace-nowrap text-sm md:text-base">Exact location provided after booking</span>

                    {/* Tooltip pointer triangle */}
                    <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
 
            </div>

            <div className='flex flex-col items-start gap-1 mt-4'>
              <p className='text-base text-gray-800 font-medium'>Los Angeles, California, USA</p>
              <p className='text-sm text-gray-600'>It's like a home away from home.</p>
            </div>

          </div>


          {/* Host details */}
          {host && (
            <div className='flex flex-col md:flex-row w-full items-center mt-10 mb-48 py-7 px-6 gap-6 border border-gray-200 rounded-xl'>
              <div className='w-full'>

                <div className='flex flex-row gap-3 items-center'>
                  <img src={host.image} alt={host.name} className='size-16 rounded-full' />
                  <div className='flex flex-col gap-1'>
                    <p className='text-[18px] md:text-xl text-gray-800'>Hosted by {host.name}</p>
                    <div className='flex flex-row gap-0.5 mb-1 items-center text-sm'>
                      <StarRating rating={4}/> 
                      <span className='ml-2'>200+ reviews</span> 
                    </div>
                  </div>
                </div>

                <div className='flex flex-row gap-4 mt-4'>
                  <p className='text-base text-gray-600'>Response rate: 100%</p>
                  <p className='text-base text-gray-600'>Reponse time: 30 min</p>
                </div>

              </div>
              
                <button type='submit' className='w-full md:w-[400px] px-3 py-3 md:py-4 cursor-pointer bg-[#3A43EE] hover:bg-[#4850F2] hover:scale-103 active:scale-90 transition-all text-white text-base rounded-sm'>Contact Now</button>

            </div>
          )}
        


    </div> 
  )
}

export default RoomDetails