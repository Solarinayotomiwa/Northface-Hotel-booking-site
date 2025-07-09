import React from 'react'

const Title = ({title, subTitle, align, font, subTitleColor}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
        <div>
            <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>{title}</h1>
            <p className={`text-sm md:text-base text-gray-500/90 max-w-174 mt-1.5 font-light ${subTitleColor === 'gray' ? 'text-gray-500/90' : 'text-white/80' }`}>{subTitle}</p>
        </div>
    </div>
  )
}

export default Title