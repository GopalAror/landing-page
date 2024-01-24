import React from 'react'

const MapCard = (props) => {
  return (
    <div data-aos={props.animate} className='sm:w-4/12  min-[450px]:w-6/12 mt-5 w-full md:w-3/12 px-3 flex items-center justify-center flex-col'>
      <img src={props.img} alt="img" />
      <h4 className=' pt-3 pb-1 font-poppins sm:text-[17px] text-[15px] md:text-[20px] font-bold text-center text-black'>{props.heading}</h4>
      <p className='text-black max-w-[252px] text-center font-poppins text-[12px] font-light'>{props.para}</p>
    </div>
  )
}

export default MapCard
