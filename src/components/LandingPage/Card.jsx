import React from 'react'

const Card = ({text, img, alt, titulo}) => {
  return (
    <>
    <div className='w-64 md:w-1/5 flex flex-col items-center gap-5 shadow-md h-fit pb-20'>
        <div className='h-2/5 w-full'>
            <img className='w-full h-full' src={img} alt={alt} />
        </div>
        <div className='h-3/5 w-full px-1 text-center biryaniRegular'>
              <h2 className='biryani'>{titulo}</h2>
            <p className='text-xs textParrafColor w-full'>{text}</p>
        </div>
    </div>
    </>
  )
}

export default Card