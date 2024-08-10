import React from 'react'
import Image from 'next/image'

const Procedure = () => {
  return (
    <div className='bg-transparent w-full flex flex-col items-center py-12'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6 text-white'>How We Work</h1>
      <div className='w-full max-w-3xl'>
        <Image 
          src="/WhatsApp Image 2024-08-09 at 10.57.03 PM.jpeg" 
          width={800} 
          height={400} 
          alt="Procedure Image" 
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Procedure
