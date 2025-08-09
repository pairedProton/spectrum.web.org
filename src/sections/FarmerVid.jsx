import React from 'react'
import farmer from '../assets/videos/farmers.mp4'


const FarmerVid = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative'>
        <video  className='w-full h-screen object-cover  object-top' src={farmer} autoPlay loop muted></video>
        <div className="absolute top-1/4 lg:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center items-center text-[#50653e]">
            <h3 className='italic font-[curvyTextLight] text-3xl' >We’ve partnered with and empowered</h3>
            <h2 className='text-8xl font-[curvyText]' >10,000</h2>
            <h2 className='text-3xl font-semibold' >Farmers</h2>
        </div>
    </div>
  )
}

export default FarmerVid