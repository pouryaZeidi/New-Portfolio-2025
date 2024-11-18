import React, { useEffect, useState } from "react";

const WelcomeText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`hidden  absolute top-0 left-0 w-full h-full sm:flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 20 }}>
      <div className="relative h-[40%] flex flex-col items-center">
     
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl rounded-full opacity-60 animate-glow"
          style={{ zIndex: -1 }}>
        </div>
        <h1
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary
          animate-text-glow">
          Welcome to my world!
        </h1>
        <p
          className="mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-textColor text-center px-8 
          animate-slide-up" >
          I'm <span className="font-bold text-secondary">Pourya Zeydi</span>, a{" "}
          <span className="text-tertiary font-semibold">frontend developer</span>{" "}
          passionate about crafting{" "}
          <span className="text-white font-semibold">beautiful</span> and{" "}
          <span className="text-white font-semibold">efficient</span> user
          experiences.
        </p>
      </div>
    </div>
  );
};

export default WelcomeText;
