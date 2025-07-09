import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating, style}) => {
  return (
    <>
       {Array(5).fill('').map((_, index)=> (
        <img key={index} src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="star-icons" className={`${style}`} />
       ))} 
    </>
  )
}

export default StarRating