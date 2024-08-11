import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-transparent text-white px-4 md:px-12" id="#about">
      <div className="flex flex-col justify-center items-center text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About</h1>
        <p className="text-lg md:text-2xl mb-6">
          AgroMitra is an innovative AI-driven platform designed to revolutionize the way farmers approach agriculture, from planting to harvesting, and even selling their crops. Our mission is to empower farmers with intelligent insights and personalized recommendations that optimize crop selection, maximize yields, and align production with market demand.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <Image src="/Pngtreegreen agricultural rice_5411777.png" width={400} height={400} alt="About us" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  )
}

export default About
