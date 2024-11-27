import ProjectCard from "@/components/ProjectCard";
import React from "react";


const projects = [
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    link: "https://pouryazeydi.info",
    description:
      "A fully responsive portfolio showcasing skills, projects, and contact information using Next.js and Tailwind CSS.",
  },
  {
    title: "E-Commerce App",
    image: "/ecommerce.png",
    link: "https://ecommerce-example.com",
    description:
      "A modern e-commerce platform with product filtering, shopping cart, and Stripe integration.",
  },
  {
    title: "Social Media Dashboard",
    image: "/dashboard.png",
    link: "https://dashboard-example.com",
    description:
      "A social media dashboard providing real-time analytics, graphs, and user interaction features.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold text-center mb-12">My Projects</h1>
      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
