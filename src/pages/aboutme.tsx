import Section from "@/components/Section";
import React from "react";

const AboutMe = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-primary mb-6">About Me</h1>

      <Section
        text={`Hi! I'm Pourya Zeydi, and my professional journey started in 2014 in the world of coffee. 
        I worked as a barista and later as a head barista at well-known cafes like V Cafe, Viuna, Balloon Cafe, and Cafe Market.
        In 2018, I proudly achieved second place in the Aeropress Championship in Iran, one of the highlights of my career!`}
      />

      <Section
        text={`After that, my passion for IT led me to join the IT team of V Cafe, where we worked on developing a web application 
        for online ordering, similar to Starbucks. The app included features like bonus points for loyal customers.`}
      />

      <Section
        text={`As my journey in tech progressed, I started working on several frontend projects, including a notable project 
        for Farzanegan High School. Alongside my work as a developer, I also explored the world of trading as a Forex dealer 
        and trader. My trading career began in 2020 on KuCoin and later expanded to platforms like Alpari, AMarkets, FXTM, and HotForex.`}
      />

      <Section
        text={`Today, I’m fully dedicated to frontend development, leveraging my diverse background to create impactful web 
        applications with tools like React, TypeScript, and Tailwind CSS.`}
      />
    </div>
  );
};

export default AboutMe;
