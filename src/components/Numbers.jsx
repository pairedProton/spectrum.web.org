import React from 'react'

const Numbers = ({num,text}) => {
  return (
    <div className='w-[40%] gap-5 text-white flex flex-col' >
        <hr className='w-full h-px bg-white' />
        <h2 className='text-6xl font-[curvyText] text-white' >{num}</h2>
        <h2 className=' ' >{text}</h2>
    </div>
  )
}

export default Numbers