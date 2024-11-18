import React from "react";
import Section from "@/components/Section";

const AboutMe = () => {
  return (
    <div
      className="px-6 py-12 bg-cover bg-center text-center"
      style={{ backgroundImage: `url('/Bg1.png')` }}
    >
      <h1 className="text-5xl font-extrabold text-primary mb-12">About Me</h1>

      {/* Coffee Journey (Barista Experience) */}
      <Section
        title="Barista & Head Barista"
        image="/path/to/barista-image.png"
        text={`My professional journey began in 2014 as a barista, and later as a head barista, at renowned cafes like V Cafe, Viuna, Balloon Cafe, and Cafe Market.
        In 2018, I proudly achieved second place in the Aeropress Championship in Iran, one of the highlights of my career!`}
        layout="reverse" 
      />

      {/* Frontend Developer Experience - Aspinas Graphic */}
      <Section
        title="Frontend Developer - Aspinas Graphic"
        image="/path/to/aspinas-graphic-image.png"
        text={`In my first frontend development role at Aspinas Graphic, I worked as a freelancer using React and TypeScript to build responsive websites.
        I focused on creating engaging user interfaces that adapted seamlessly across different devices.`}
        technologies="React, TypeScript, Tailwind CSS"
      />

      {/* Frontend Developer Experience - V Cafe */}
      <Section
        title="Frontend Developer - V Cafe"
        image="/path/to/v-cafe-image.png"
        text={`At V Cafe, I transitioned into the IT team to develop a web application for online ordering, similar to Starbucks. 
        The app featured bonus points for loyal customers, and I contributed to its design and development using React and TypeScript.`}
        technologies="React, TypeScript, Firebase"
        layout="reverse"
      />

      {/* Frontend Developer Experience - Yadeam Team */}
      <Section
        title="Frontend Developer - Yadeam Team"
        image="/path/to/yadeam-image.png"
        text={`At Yadeam Team, I worked on several projects, building responsive web applications with modern frontend technologies. I utilized my skills in React, TypeScript, and Tailwind CSS to enhance user experience and optimize performance.`}
        technologies="React, TypeScript, Tailwind CSS"
      />

      {/* Frontend Developer Experience - Sazmand Co. */}
      <Section
        title="Frontend Developer - Sazmand Co."
        image="/path/to/sazmand-image.png"
        text={`At Sazmand Co., an architectural firm, I was responsible for building scalable web applications with Redux and Tailwind CSS. 
        My role involved crafting responsive user interfaces and ensuring smooth performance for various web applications.`}
        technologies="React, Redux, Tailwind CSS"
      />

      {/* Frontend Developer Experience - Iran Saghfe Novin */}
      <Section
        title="Frontend Developer - Iran Saghfe Novin"
        image="/path/to/iran-saghfe-image.png"
        text={`During my time at Iran Saghfe Novin, I worked with React and Next.js to develop high-performance, responsive websites for interior design purposes.
        The focus was on creating adaptive and visually appealing designs for clients in the interior design industry.`}
        technologies="React, Next.js, Tailwind CSS"
        layout="reverse"
      />

      {/* Frontend Developer Experience - Farzanegan High School */}
      <Section
        title="Frontend Developer - Farzanegan High School"
        image="/path/to/farzanegan-image.png"
        text={`I had the opportunity to work as a frontend developer at Farzanegan High School, where I built responsive, user-friendly web applications.
        The projects I worked on focused on providing educational tools for students and enhancing the school's online presence.`}
        technologies="React, Tailwind CSS"
      />

      {/* Trading Experience */}
      <Section
        title="Forex Trader"
        image="/path/to/trading-image.png"
        text={`Alongside my development career, I pursued a career as a Forex trader. I began trading on KuCoin in 2020 and later expanded my trading activities to platforms like Alpari, AMarkets, FXTM, and HotForex.
        My trading experience has taught me valuable skills in analysis and decision-making under pressure.`}
        layout="reverse"
      />

      {/* Final Thoughts */}
      <Section
        title="Frontend Development Today"
        image="/path/to/frontend-image.png"
        text={`Today, I’m fully dedicated to frontend development, leveraging my diverse background in both technology and trading to create impactful web applications with tools like React, TypeScript, and Tailwind CSS.`}
        technologies="React, TypeScript, Tailwind CSS"
      />
    </div>
  );
};

export default AboutMe;
