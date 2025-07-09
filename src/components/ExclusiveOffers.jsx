import React from 'react'
import { assets, exclusiveOffers } from '../assets/assets'
import Title from './Title'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 max-w-[1440px] w-full mx-auto'>
        <div className='flex flex-col md:flex-row w-full justify-between items-start'>
        {/* Text group */}
            <Title align='left' title='Exclusive Offers' subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' subTitleColor='gray'/>

        {/* button group */}
        <button className=' group items-center font-medium cursor-pointer text-sm text-gray-900 flex flex-row gap-2 max-md:mt-12 mt-4.5 '>
            View All Offers
            <img src={assets.arrowIcon} alt="arrowIcon" className='group-hover:translate-x-1 transition-all' />
        </button>
        </div>

         {/* design cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {exclusiveOffers.map((items)=>(
                <div key={items._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center ' style={{backgroundImage: `url(${items.image})`}}>
                    <p className='bg-white rounded-full px-3 py-1 text-xs text-gray-900 font-medium absolute top-4 left-4'>{items.priceOff}% OFF</p>
                    <p className='text-2xl font-medium font-playfair'>{items.title}</p>
                    <p className=''>{items.description}</p>
                    <p className='text-xs text-white/70 mt-3'> Expires {items.expiryDate}</p>

                    <button className=' group items-center font-medium cursor-pointer text-sm text-white flex flex-row gap-2 mt-4 mb-5 '>
                        View Offers
                        <img src={assets.arrowIcon} alt="arrowIcon" className='group-hover:translate-x-1 transition-all invert' />
                    </button>
                    
                </div>
            ))}
        </div>

    </div>
  )
}

export default ExclusiveOffers