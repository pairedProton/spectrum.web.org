import React from 'react'
import odisha from '../assets/images/odisha.webp'


const OurNetwork = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-6 bg-[#50653e] text-[#D4DBB1] p-10 items-center' >
        <hr  className='w-full h-px bg-[#D4DBB1]' />
        <div className='w-full flex justify-between' >
            <h3 className='font-[curvyText] text-6xl w-[50%] ' >Our Network</h3>
            <p className='w-[50%] text-start' >We partner with local farmers and growers to give our customers only the best and freshest ingredients.</p>
        </div>
        
            <img  className='w-120  h-auto object-center object-cover' src={odisha} alt="" />
        

    </div>
  )
}

export default OurNetwork