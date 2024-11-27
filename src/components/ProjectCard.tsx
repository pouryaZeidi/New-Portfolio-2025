import React from "react";

interface ProjectProps {
  title: string;
  image: string;
  link: string;
  description: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, image, link, description }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-secondary/80 rounded-xl shadow-lg overflow-hidden p-4 lg:p-8 mb-8">
      {/* تصویر پروژه */}
      <div className="flex-shrink-0 border-4 border-tertiary rounded-lg overflow-hidden mb-4 lg:mb-0 lg:mr-6">
        <img src={image} alt={title} className="w-full h-64 lg:h-auto object-cover" />
      </div>
      {/* جزئیات پروژه */}
      <div className="flex flex-col justify-between">
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-tertiary mb-6">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-primary hover:bg-primary/90 py-2 px-4 rounded-lg text-center transition duration-300"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
