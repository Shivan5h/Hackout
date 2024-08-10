import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div className="text-center text-white text-5xl font-semibold mb-12">
        <h1>Our Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1: Yield Prediction */}
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <Image
            src="/yield.jpeg" 
            alt="Yield Prediction"
            width={400}  // Use actual width of the image
            height={300} // Use actual height of the image
            layout="responsive" // Ensures the image scales responsively
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">Yield Prediction</h2>
          <p>
            Utilize advanced algorithms to predict the yield of various crops based on historical data, weather conditions, and other critical factors. Plan better and maximize your farm&apos;s potential.
          </p>
          <a href="/Services/yield" className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">
            Use Service
          </a>
        </div>

        {/* Card 2: Soil Health Prediction */}
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <Image
            src="/Untitled.jpeg" 
            alt="Soil Health Prediction"
            width={400}
            height={300}
            layout="responsive"
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">Soil Health Prediction</h2>
          <p>
            Get insights into the health of your soil with our soil health prediction service. Monitor nutrient levels, pH balance, and soil composition to ensure your crops have the best environment to thrive.
          </p>
          <a href="/Services/health" className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">
            Use Service
          </a>
        </div>

        {/* Card 3: Crop Rotation Recommendation */}
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <Image
            src="/rotation.jpeg" 
            alt="Crop Rotation Recommendation"
            width={400}
            height={300}
            layout="responsive"
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">Crop Rotation Recommendation</h2>
          <p>
            Receive tailored recommendations for crop rotation to improve soil health, prevent pests, and boost yield. Optimize your crop management with our expert advice.
          </p>
          <a href="/Services/rotation" className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">
            Use Service
          </a>
        </div>
      </div>
    </div>
  )
}

export default Page
