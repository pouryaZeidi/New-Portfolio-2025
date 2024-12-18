import React from 'react';

const HeroItems = () => {
  return (
    <div className="flex flex-col mt-8 sm:mt-1 sm:flex sm:flex-row items-center justify-center py-16 px-8 lg:px-16">
      <div className="w-full sm:w-2/3 lg:w-1/3 flex justify-center mb-8 sm:mb-4 lg:mb-0">
        <img 
          src="/PouryaImage.jpg" 
          alt="Pourya Zeydi"
          className="rounded-full w-56 h-56 object-cover border-4 border-tertiary shadow-xl"
        />
      </div>
      <div className="w-full sm:w-2/3 lg:w-2/3 lg:pl-16 text-center lg:text-left">
        <h2 className="max-text-base sm:text-3xl font-bold text-secondary mb-4">Hi, I'm Pourya Zeydi</h2>
        <p className="max-text-base sm:text-lg text-textColor mb-4">
          With over 9 years of experience in café and restaurant management, I'm dedicated to enhancing customer experiences while blending the worlds of hospitality and technology.
        </p>
        <p className="max-text-base sm:text-lg text-textColor mb-4">
          As a passionate entrepreneur and frontend developer, I leverage my expertise in React, TypeScript, and Tailwind CSS to create digital solutions that streamline café and restaurant operations, improve service delivery, and optimize user experience.
        </p>
        <p className="max-text-base text-base sm:text-lg text-secondary">
          Let's collaborate to create innovative, impactful experiences for the café and restaurant industry!
        </p>
      </div>
    </div>
  );
};

export default HeroItems;
