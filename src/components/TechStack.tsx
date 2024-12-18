import React from "react";

const techStack = [
  { name: "React", image: "react.png", description: "A JavaScript library for building user interfaces." },
  { name: "Next.js", image: "nextjs.png", description: "The React framework for production." },
  { name: "HTML", image: "html.png", description: "The standard markup language for web pages." },
  { name: "CSS", image: "css.png", description: "Style sheet language for describing presentation." },
  { name: "SCSS", image: "sass.png", description: "CSS with superpowers for easier styling." },
  { name: "Tailwind CSS", image: "tailwind.png", description: "Utility-first CSS framework for custom designs." },
  { name: "TypeScript", image: "type.png", description: "JavaScript with syntax for types." },
  { name: "JavaScript", image: "js.png", description: "The programming language of the web." },
  { name: "Docker", image: "docker.png", description: "Platform for building, sharing, and running apps." },
  { name: "Node.js", image: "Node.png", description: "JavaScript runtime for server-side applications." },
  { name: "Firebase", image: "firebase.png", description: "Platform for app development." },
  { name: "Vue.js", image: "vue.png", description: "The Progressive JavaScript Framework." },
];

const additionalSkills = [
  { name: "Latte Art", image: "latte_art.png", description: "The art of creating designs in steamed milk coffee." },
  { name: "Brewing", image: "brewing.png", description: "Expertise in brewing different types of coffee." },
  { name: "Teamwork", image: "teamwork.png", description: "Skilled in working effectively within a team environment." },
  { name: "Operate Tools", image: "tools.png", description: "Proficient in using café tools and machinery." },
  { name: "Team Lead", image: "team_lead.png", description: "Experience leading teams in high-pressure environments." },
  { name: "Cost Control", image: "cost_control.png", description: "Managing and optimizing costs in a café environment." },
  { name: "Marketing", image: "marketing.png", description: "Skills in marketing strategies for cafés and restaurants." },
  { name: "Coffee Quality Control", image: "quality_control.png", description: "Ensuring the highest standards in coffee quality." },
  { name: "Accountant", image: "accountant.png", description: "Expertise in managing financial records and transactions." },
  { name: "Warehouse Management", image: "warehouse_management.png", description: "Efficiently managing inventory and warehouse operations." },
  { name: "Inventory Control", image: "inventory_control.png", description: "Proficient in stock management and inventory tracking." },
  { name: "Staff Training", image: "staff_training.png", description: "Training staff in various skills and café operations." },
  { name: "Computer Science", image: "computer_science.png", description: "Strong foundation in computer science principles." },
  { name: "Accounting and Bank Control", image: "bank_control.png", description: "Managing accounts and ensuring financial compliance." },
];

const SkillTable = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">

      {techStack.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-secondary p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300"
        >
          <img
            src={tech.image}
            alt={tech.name}
            className="w-20 h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-primary font-semibold text-lg">{tech.name}</h3>
          <p className="text-tertiary text-sm text-center mt-2 opacity-100">
            {tech.description}
          </p>
        </div>
      ))}

    
      {additionalSkills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-secondary p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300"
        >
          <img
            src={skill.image}
            alt={skill.name}
            className="w-20 h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-primary font-semibold text-lg">{skill.name}</h3>
          <p className="text-tertiary text-sm text-center mt-2 opacity-100">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillTable;
