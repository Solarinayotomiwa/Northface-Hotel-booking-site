import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

  const [bookings, setBookings] = useState(userBookingsDummyData);


  return (
    <div className='flex flex-col lg:flex-col items-start justify-between py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] w-full mx-auto'>

        <Title title='My Bookings' subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks' align='left' subTitleColor='gray'/>

        {/* Table information */}
        <div className='mt-8 w-full text-gray-800'>

        {/* Table - Titles */}
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
            <div className='w-1/3'>Hotels</div>
            <div className='w-1/3 mx-2'>Date & Timings</div>
            <div className='w-1/3'>Payment</div>
        </div>

        {/* Table - Content */}
        {bookings.map((bookings)=>(
            <div key={bookings._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                {/* ---Hotel details--- */}
                <div className='flex flex-col md:flex-row gap-5 items-start md:items-center'>
                    <img src={bookings.room.images[0]} alt="room-image" className='w-full md:w-44 h-56 md:h-auto rounded-xl shadow-sm object-cover' />
                    <div className='flex flex-col gap-2'>
                        <p className='text-2xl md:text-2xl font-playfair leading-none'>{bookings.hotel.name} <span className='text-sm text-gray-600'>Single Bed</span></p>
                        <div className='items-center flex flex-row gap-1'>
                            <img src={assets.locationIcon} alt="location-icon" className='size-4' />
                            <p className='text-sm text-gray-600'>{bookings.hotel.address}</p>
                        </div>
                        <div className='items-center flex flex-row gap-1'>
                            <img src={assets.guestsIcon} alt="location-icon" className='size-4' />
                            <p className='text-sm text-gray-600'>Guest: {bookings.guests}</p>
                        </div>
                        <p className='md:text-lg'>Total: ${bookings.totalPrice}</p>
                    </div>
                </div>

                {/* ---Check in/out details--- */}
                <div className='flex flex-row md:items-center md:gap-12 max-md:mt-4 gap-8 md:ml-2'>
                    <div>
                        <p className='text-base'>Check-In:</p>
                        <p className='text-sm text-gray-600'>{new Date(bookings.checkInDate).toDateString()}</p>
                    </div>
                    <div>
                        <p className='text-base'>Check-Out:</p>
                        <p className='text-sm text-gray-600'>{new Date(bookings.checkOutDate).toDateString()}</p>
                    </div>
                </div>

                {/* ---Payment status--- */}

                <div className='flex flex-row md:flex-col md:justify-center items-center md:items-start max-md:mt-4 md:ml-2 max-md:gap-4'>
                    <div className='flex flex-row gap-1.5 items-center'>
                        <div className={`size-3 rounded-full ${bookings.isPaid ? 'bg-green-600' : 'bg-red-600'}`}></div>
                        <p className={`text-sm ${bookings.isPaid ? 'text-green-600' : 'text-red-600'}`}>{bookings.isPaid ? 'Paid' : 'Unpaid'}</p>
                    </div>

                    {!bookings.isPaid && 
                    <button className='flex mt-2 px-6 md:px-6 lg:px-8 py-2 justify-center border rounded-full border-gray-600 text-sm cursor-pointer hover:bg-gray-800 hover:text-white whitespace-nowrap'>
                        Pay now
                    </button>
                    }

                    
                </div>
            </div>
        ))}

        </div>
    </div>
  )
}

export default MyBookings