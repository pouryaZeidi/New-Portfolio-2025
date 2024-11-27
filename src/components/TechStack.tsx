import React from "react";

const techStack = [
  { name: "React", image: "path-to-image", description: "A JavaScript library for building user interfaces." },
  { name: "Next.js", image: "path-to-image", description: "The React framework for production." },
  { name: "Tailwind CSS", image: "path-to-image", description: "Utility-first CSS framework for custom designs." },
  { name: "SCSS", image: "path-to-image", description: "CSS with superpowers for easier styling." },
  { name: "TypeScript", image: "path-to-image", description: "JavaScript with syntax for types." },
  { name: "JavaScript", image: "path-to-image", description: "The programming language of the web." },
  { name: "Docker", image: "path-to-image", description: "Platform for building, sharing, and running apps." },
  { name: "Node.js", image: "path-to-image", description: "JavaScript runtime for server-side applications." },
  { name: "Chakra UI", image: "path-to-image", description: "Modern UI library for React apps." },
  { name: "Material UI", image: "path-to-image", description: "React UI framework based on Google's Material Design." },
  { name: "VS Code", image: "path-to-image", description: "Code editor for modern web development." },
  { name: "React Native", image: "path-to-image", description: "React for building native mobile apps." },
  { name: "Vue.js", image: "path-to-image", description: "The Progressive JavaScript Framework." },
  { name: "Git", image: "path-to-image", description: "Version control system for collaboration." },
  { name: "GitHub", image: "path-to-image", description: "Platform for hosting and sharing code." },
  { name: "PrimeVue", image: "path-to-image", description: "Rich UI components for Vue.js applications." },
  { name: "Vuetify", image: "path-to-image", description: "Vue.js Material Design component framework." },
  { name: "HTML", image: "path-to-image", description: "The standard markup language for web pages." },
  { name: "CSS", image: "path-to-image", description: "Style sheet language for describing presentation." },
  { name: "GraphQL", image: "path-to-image", description: "Query language for APIs." },
  { name: "Apollo", image: "path-to-image", description: "GraphQL client for managing data." },
  { name: "Firebase", image: "path-to-image", description: "Platform for app development." },
  { name: "Figma", image: "path-to-image", description: "Web-based design and prototyping tool." },
  { name: "Authentication", image: "path-to-image", description: "Secure access control for applications." },
];

const TechStackTable = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="group flex flex-col items-center bg-secondary p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <img
            src={tech.image}
            alt={tech.name}
            className="w-20 h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-primary font-semibold text-lg">{tech.name}</h3>
          <p className="text-tertiary text-sm text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tech.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TechStackTable;
