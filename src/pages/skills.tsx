import React from "react";
import TechStackTable from "@/components/TechStack";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-12 mt-24">My Skills</h1>
      <TechStackTable />
    </div>
  );
};

export default Skills;
