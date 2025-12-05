import React from 'react';
import HeroImage from '../assets/Hero.jpg';

const Hero = () => {
  return (
    <section className="bg-gray-50 pt-12 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Content Wrapper: Stacks vertically on mobile (flex-col),
            splits into two columns on medium screens and up (md:flex-row) */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* 1. Left Side: Text and CTA Buttons */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              BESTSELLER<span className="text-orange-600"> LATEST ARRIVAL</span> 
            </h1>
            
            {/* Sub-text / Description */}
            <p className="mt-4 font-bold text-xl text-gray-600">
            20% OFF ALL ARRIVAL
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-black transition duration-150 ease-in-out"
              >
                Shop Now
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center px-6 py-3 border border-indigo-200 text-base font-medium rounded-md text-orange-700 bg-white hover:bg-white hover:text-black transition duration-150 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* 2. Right Side: Image/Visual */}
          <div className="md:w-1/2">
            <img 
              className="w-full h-auto object-cover rounded-lg shadow-xl" 
              src={HeroImage} 
              alt="A dashboard showcasing data analytics" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;