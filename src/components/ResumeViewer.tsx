import { useState, useEffect } from "react";

const ResumeViewer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animation = requestAnimationFrame(() => {
      setSmoothPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.2,
        y: prev.y + (mousePosition.y - prev.y) * 0.2,
      }));
    });
    return () => cancelAnimationFrame(animation);
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovered) {
      const boundingRect = e.currentTarget.getBoundingClientRect();
      const relativeX = e.clientX - boundingRect.left;
      const relativeY = e.clientY - boundingRect.top;
      setMousePosition({ x: relativeX, y: relativeY });
    }
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHovered(true);
    const boundingRect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: boundingRect.width / 2,
      y: boundingRect.height / 2,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setIsHovered(false);
    const boundingRect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: boundingRect.width / 2,
      y: boundingRect.height / 2,
    });
  };

  return (
    <div
      className="relative mx-auto h-[70%] w-[65%] "
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="/CV.png"
        alt="My CV"
        className="flex sm:hidden absolute md:w-[300px] md:h-[500px]  w-[180px] h-[300px] lg:w-[23vw] lg:h-[80vh] rounded-lg shadow-lg transition-transform duration-600"
        style={{
          top: smoothPosition.y + 270,
          left: smoothPosition.x +10,
        }}
      />
      <img
        src="/CV.png"
        alt="My CV"
        className="hidden sm:flex absolute md:w-[300px] md:h-[500px]  w-[180px] h-[300px] lg:w-[23vw] lg:h-[80vh] rounded-lg shadow-lg transition-transform duration-600"
        style={{
          top: smoothPosition.y + 0,
          left: smoothPosition.x + 0,
        }}
      />
    </div>
  );
};

export default ResumeViewer;
