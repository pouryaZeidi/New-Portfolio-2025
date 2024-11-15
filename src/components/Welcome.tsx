import React from 'react';

const Welcome: React.FC = () => {

  return (
    <div className='absolute top-0 left-0 w-full flex justify-center items-center h-screen z-10'>
      <div className='animate-leftWindow delay-[5000ms] w-full h-screen flex justify-center items-center origin-left bg-black text-white'>
      </div>
      <div className=' animate-leftWindow delay-[5000ms] w-full h-screen flex justify-center items-center origin-right bg-black text-white'>
      </div>
    </div>
  );
};

export default Welcome;
