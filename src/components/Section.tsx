import React from "react";

interface SectionProps {
  title: string;
  image: string;
  text: string;
  technologies?: string; // Optional: To display technologies used
  layout?: "default" | "reverse"; // For image and text layout
}

const Section: React.FC<SectionProps> = ({
  title,
  image,
  text,
  technologies,
  layout = "default",
}) => {
  return (
    <div
      className={`flex ${layout === "reverse" ? "flex-row-reverse" : "flex-row"} 
                  items-center justify-between my-12`}
    >
      <div className="flex-1 px-6">
        <h2 className="text-3xl font-semibold text-secondary mb-4">{title}</h2>
        <p className="text-lg leading-relaxed text-gray-400 mb-6">{text}</p>
        {technologies && (
          <p className="text-sm text-gray-500">
            <strong>Technologies:</strong> {technologies}
          </p>
        )}
      </div>
      {/* Image displayed only on screens larger than sm */}
      <div className="hidden sm:flex-1 sm:block px-6">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* When the screen size is small, we will hide the image and the text will fill the space */}
    
    </div>
  );
};

export default Section;
