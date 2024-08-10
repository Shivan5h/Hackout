import About from '@/components/About'
import Footer from '@/components/Footer'
import Procedure from '@/components/Procedure'
import TypewriterEffect from '@/components/Typewriter'
import Team from '@/components/team'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-transparent min-h-screen m-0 p-12 z-10'>
   <div className='animate-fadeIn'>
     <h1 className='font-bold text-white text-center mt-60 text-5xl'>Welcome to AgroMitra</h1>
     <TypewriterEffect />
   </div>
   <div className='flex justify-center mt-96 animate-slideInUp'>
     <About />
   </div>
   <div className='flex justify-center mt-30 animate-slideInUp delay-1'>
     <Procedure />
   </div>
   <div className='flex justify-center mt-40 animate-slideInUp delay-2'>
     <Team/>
   </div>
   <div className='flex justify-center mt-40 animate-fadeIn delay-3'>
     <Footer/>
   </div>
 </div>

  )
}

export default Page
