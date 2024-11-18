import React from 'react';
import HeroItems from './HeroItems';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
    <img src="Bg1.png" alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg">
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white">
        <HeroItems />
      </div>
    </div>
  );
};

export default HeroSection;
