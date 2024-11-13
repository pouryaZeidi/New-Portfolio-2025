import React, { useEffect, useState } from 'react';

const WelcomeText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={` top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 absolute  ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 20,  }}     >
      <div className="text-center ">
        <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300">Welcome to my world!</h1>
        <p className="mt-2 text-lg text-white">
          I'm Pourya Zeydi, a frontend developer passionate about crafting fast and beautiful user interfaces. Let's take a tour through my projects and experiences. Ready? Let’s dive in!
        </p>
      </div>
    </div>
  );
};

export default WelcomeText;
