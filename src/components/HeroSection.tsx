import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/vid7.mp4" autoPlay muted loop />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg"></div>
       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
      </div>
    </div>
  )
}

export default HeroSection
