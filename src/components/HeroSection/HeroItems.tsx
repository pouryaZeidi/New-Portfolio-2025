import React from 'react';

const HeroItems = () => {
  return (
    <div className="flex flex-col  mt-8 sm:mt-1  sm:flex sm:flex-row items-center justify-center py-16 px-8 lg:px-16">
      {/* Left side: Image */}
      <div className="w-full sm:w-2/3 lg:w-1/3 flex justify-center mb-8 sm:mb-4 lg:mb-0">
        <img
          src="/PouryaImage.jpg"  // Replace with your actual image path
          alt="Pourya Zeydi"
          className="rounded-full w-56 h-56 object-cover border-4 border-tertiary shadow-xl"
        />
      </div>

      <div className="w-full sm:w-2/3 lg:w-2/3 lg:pl-16 text-center lg:text-left">
        <h2 className=" max-text-base sm:text-3xl font-bold text-secondary mb-4">Hi, I'm Pourya Zeydi</h2>
        <p className=" max-text-base sm:text-lg text-textColor mb-4">
          I'm a passionate frontend developer focused on creating beautiful and functional websites. I specialize in React, TypeScript, and Tailwind CSS to build responsive, user-friendly experiences.
        </p>
        <p className=" max-text-base sm:text-lg text-textColor mb-4">
          With a strong foundation in web technologies, I enjoy learning and applying new tools to optimize user experience and performance.
        </p>
        <p className=" max-text-base text-base sm:text-lg text-secondary">
          Let's collaborate and bring your vision to life!
        </p>
      </div>
    </div>
  );
};

export default HeroItems;
