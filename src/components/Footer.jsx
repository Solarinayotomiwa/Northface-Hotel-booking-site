import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    
    <footer class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-[#E4EEF8]">
    <div class="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500/30 px-6 md:px-16 lg:px-24 xl:px-32 pb-6 max-w-[1440px] w-full mx-auto">
        <div class="md:max-w-96">
            <img class="h-9 invert" src={assets.logo2} alt="dummyLogoDark"/>
            <p class="mt-6 text-sm">
                We blend cutting-edge technology with the rich, vibrant essence of African urban life to offer an engaging home-buying experience. Discover your perfect home in the dynamic core of the city with our trusted partners, team and diverse agents.
            </p>
        </div>
        <div class="flex-1 flex items-start md:justify-end gap-20">
            <div>
                <h2 class="font-semibold mb-5 text-gray-800">Company</h2>
                <ul class="text-sm space-y-2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Hotels</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div>
                <h2 class="font-semibold mb-5 text-gray-800">Get in touch</h2>
                <div class="text-sm space-y-2">
                    <p>+234 90 2981 7556</p>
                    <p>solarinthomz.st@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    <p class="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2024 © Northface. All Right Reserved.
    </p>
</footer>

  )
}

export default Footer