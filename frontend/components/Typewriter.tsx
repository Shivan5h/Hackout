// TypewriterEffect Component
"use client"
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  const [showSecondTypewriter] = useState(true);

  return (
    <div className="bg-transparent mr-10 mt-10 flex justify-center items-center text-white">
      {showSecondTypewriter && (
        <h3 className="text-2xl font-normal md:ml-14 mt-4 text-white">
          <Typewriter
            words={[' Empowering Farmers with Smart Solutions for a Sustainable Future']}
            cursor
            loop={true}
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
      )}
    </div>
  );
};

export default TypewriterEffect;