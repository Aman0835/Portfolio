import React from 'react'
import Footercard from './smallComponents/Footercard'
const Contact = () => {
  return (
    <div className='w-full min-h-screen p-8 '>
      <div className='bg-gradient-to-t from-[#34312E] to-[#080807] min-h-screen rounded-3xl flex flex-col items-center justify-center gap-16 p-8'>
        <div className='text-8xl text-[#D1D1C7] '>Let's Connect </div>
        <div className='w-1/2 '>
          <Footercard/>
        </div>
      </div>
    </div>
  )
}

export default Contact