import React from 'react';
import { assets } from "../assets/assets";
import { cities } from "../assets/assets";
import heroImage from "../../src/assets/heroImage.png"
const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-screen bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${heroImage})`}}> 
    
     <div className='z-10 max-w-[1440px] w-full mx-auto'>
    
     <p className='bg-[#000000]/20 px-3.5 py-1 rounded-full mt-20 border border-[#ffffff]/50 flex w-fit'>Noah's Ark is Africa's First choice</p>
     
     <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md-leading-[56px] font-bold md-font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination</h1>
     <p className='max-w-130 mt-2 text-sm md:text-base'>Enjoy the finest homes with a wide range of filters for your diverse needs, whether you're here for business, comfort or luxury.</p>   

     <form className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto mt-6 w-fit items-end'>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="calendericon" className='h-4' />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list="destinations" id="destinationInput" type="select" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Choose a city" required />
                
                <datalist id="destinations">
                    {cities.map((city, index) => (
                        <option value={city} key={index}/>
                    ))}
                </datalist>

            </div>

            <div> 
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="calendericon" className='h-4' />
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="calendericon" className='h-4' />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center '>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <div >
            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 pl-4 pr-6 text-white my-auto ml-4 cursor-pointer max-md:w-full max-md:py-1' >
                <img src={assets.searchIcon} alt="searchicon" className='h-8' />
                <span>Search</span>
            </button>
            </div>            
        </form>
    </div>  
    </div>
  )
}

export default Hero