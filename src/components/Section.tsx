import React from "react";

type SectionProps = {
  text: string;
};

const Section: React.FC<SectionProps> = ({ text }) => (
  <p className="text-lg leading-relaxed text-gray-700 mt-6">{text}</p>
);

export default Section;
