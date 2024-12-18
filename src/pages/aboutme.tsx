import React from "react";
import Section from "@/components/Section";

const AboutMe = () => {
  return (
    <div
      className="px-6 py-12 bg-cover bg-center text-center"
      style={{ backgroundImage: `url('/Bg1.png')` }}
    >
      <h1 className="text-5xl font-extrabold text-secondary mb-12">About Me</h1>

      {/* Café & Restaurant Management */}
      <Section
        title="Café & Restaurant Management"
        image="/CafeManagement.png"
        text="With over 9 years of experience in café and restaurant management, I have led teams, managed daily operations, and ensured exceptional customer service. My focus has been on streamlining service workflows, optimizing the customer experience, and training staff to deliver high-quality service."
      />

      {/* Brand Development & Startup Consulting */}
      <Section
        title="Brand Development & Startup Consulting"
        image="/BrandDevelopment.png"
        text="I have assisted in developing strong brands and launching new cafés, focusing on concept design, market research, and customer experience optimization. As a startup consultant, I’ve helped cafés refine their strategies, develop their menus, and train staff to set up successful operations."
        layout="reverse"
      />

      {/* Internal Manager & Staff Trainer */}
      <Section
        title="Internal Manager & Staff Trainer - Café Market"
        image="/CafeMarket.png"
        text="At Café Market, I was responsible for managing daily operations, coordinating staff, and streamlining workflows. I focused on creating an environment that promoted customer satisfaction and effective team performance."
      />

      {/* Startup Consultant & Operations Manager */}
      <Section
        title="Startup Consultant & Operations Manager - Balloon Café"
        image="/BalloonCafe.png"
        text="In my role at Balloon Café, I helped launch a new branch by focusing on menu development, staff recruitment, and training. I supervised setup processes to ensure smooth operations and timely service delivery."
        layout="reverse"
      />

      {/* Barista & Shift Supervisor */}
      <Section
        title="Barista & Shift Supervisor - V Café"
        image="/VCafe.png"
        text="My journey in the café industry started at V Café, where I worked as a barista and later as a shift supervisor. I contributed to launching new branches and managing team performance to ensure excellent customer service."
      />

      {/* Barista */}
      <Section
        title="Barista - Café Viuna"
        image="/Viuna.png"
        text="I began my career in the coffee industry as a barista at Café Viuna, where I developed my skills and passion for coffee. Over time, I advanced and gained hands-on experience in crafting quality beverages and managing customer interactions."
        layout="reverse"
      />

      {/* Programming Experience */}
      <Section
        title="Frontend Developer - Yadeam Al Finance"
        image="/Yadeam.jpg"
        text="As a frontend developer at Yadeam Al Finance in London, I worked remotely to develop responsive and efficient user interfaces using Next.js 14. I collaborated with the team to create secure and scalable financial solutions."
      />

      {/* Farzanegan School Project */}
      <Section
        title="Frontend Developer - Farzanegan School Project"
        image="/Farzanegan.png"
        text="I assisted in developing a school management system for Farzanegan School, focusing on UI/UX improvements to make the system more user-friendly for both students and teachers."
        layout="reverse"
      />

      {/* Final Thoughts - Frontend Development Today */}
      <Section
        title="Frontend Development Today"
        image="/FrontendDevelopment.png"
        text="Currently, I’m fully focused on developing the ‘Poonez’ brand as a chain of cafés, aiming to create a unique experience for customers. I am working on building an innovative app specifically designed for cafés and restaurants, which not only provides an exceptional user experience but also offers digital solutions to enhance internal processes and customer interactions. By combining my technical expertise in programming with my business management experience in the café industry, I strive to bring technology and innovation into the world of café and restaurant businesses, making a positive impact in this field."
      />
    </div>
  );
};

export default AboutMe;
