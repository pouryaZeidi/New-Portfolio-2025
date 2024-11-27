import React from "react";

const techStack = [
    { name: "React", image: "react.png", description: "A JavaScript library for building user interfaces.", link: "https://reactjs.org/" },
    { name: "Next.js", image: "nextjs.png", description: "The React framework for production.", link: "https://nextjs.org/" },
    { name: "HTML", image: "html.png", description: "The standard markup language for web pages.", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", image: "css.png", description: "Style sheet language for describing presentation.", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "SCSS", image: "sass.png", description: "CSS with superpowers for easier styling.", link: "https://sass-lang.com/" },
    { name: "Tailwind CSS", image: "tailwind.png", description: "Utility-first CSS framework for custom designs.", link: "https://tailwindcss.com/" },
    { name: "TypeScript", image: "type.png", description: "JavaScript with syntax for types.", link: "https://www.typescriptlang.org/" },
    { name: "JavaScript", image: "js.png", description: "The programming language of the web.", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Docker", image: "docker.png", description: "Platform for building, sharing, and running apps.", link: "https://www.docker.com/" },
    { name: "Node.js", image: "Node.png", description: "JavaScript runtime for server-side applications.", link: "https://nodejs.org/" },
    { name: "Chakra UI", image: "chakra.png", description: "Modern UI library for React apps.", link: "https://chakra-ui.com/" },
    { name: "Material UI", image: "material.png", description: "React UI framework based on Google's Material Design.", link: "https://mui.com/" },
    { name: "VS Code", image: "vscode.png", description: "Code editor for modern web development.", link: "https://code.visualstudio.com/" },
    { name: "React Native", image: "reactnative.png", description: "React for building native mobile apps.", link: "https://reactnative.dev/" },
    { name: "Vue.js", image: "vue.png", description: "The Progressive JavaScript Framework.", link: "https://vuejs.org/" },
    { name: "Git", image: "git.png", description: "Version control system for collaboration.", link: "https://git-scm.com/" },
    { name: "GitHub", image: "github.png", description: "Platform for hosting and sharing code.", link: "https://github.com/" },
    { name: "GraphQL and Apollo", image: "graphql.png", description: "Query language for APIs.", link: "https://graphql.org/" },
    { name: "Firebase", image: "firebase.png", description: "Platform for app development.", link: "https://firebase.google.com/" },
    { name: "Figma", image: "figma.png", description: "Web-based design and prototyping tool.", link: "https://figma.com/" },
  ];

  const TechStackTable = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {techStack.map((tech, index) => (
          <div
            key={index}
            onClick={() => window.open(tech.link, "_blank")} // باز کردن لینک در یک تب جدید
            className="group flex flex-col items-center bg-secondary p-6 rounded-2xl cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
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
  