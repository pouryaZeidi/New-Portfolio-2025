import React, { useEffect, useState } from "react";

const WelcomeText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 20 }}
    >
      <div className="relative">
        {/* افکت نورانی پس‌زمینه */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-400/20 to-blue-500/20 blur-2xl rounded-full opacity-60 animate-glow"
          style={{ zIndex: -1 }}
        ></div>

        {/* متن اصلی */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-cyan-500 
          animate-text-glow"
        >
          Welcome to my world!
        </h1>

        {/* خط متحرک */}
        <div
          className="absolute left-1/2 top-16 sm:top-24 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 
          animate-pulse"
        />

        {/* توضیحات */}
        <p
          className="mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 text-center px-8 
          animate-slide-up"
        >
          I'm <span className="font-bold text-teal-400">Pourya Zeydi</span>, a{" "}
          <span className="text-blue-400 font-semibold">frontend developer</span>{" "}
          passionate about crafting{" "}
          <span className="text-cyan-400 font-semibold">beautiful</span> and{" "}
          <span className="text-teal-500 font-semibold">efficient</span> user
          experiences.
        </p>
      </div>
    </div>
  );
};

export default WelcomeText;
