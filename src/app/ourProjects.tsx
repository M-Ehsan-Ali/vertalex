"use client";
import React, { useState } from "react";

interface ProjectItem {
  image: {
    sourceUrl: string;
    id: string;
  };
  title: string;
  description: string;
  color?: string;
}

interface ProjectSliderProps {
  projectData: ProjectItem[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ projectData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Handlers for carousel navigation
  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
      );
      setTransitioning(false);
    }, 300); // Match transition duration
  };

  const handlePrevious = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 300); // Match transition duration
  };

  const currentProject = projectData[currentIndex];

  return (
    <div className="mt-[42px] xl:mt-[165px]">
      {/* Desktop Layout */}
      <div className="hidden xl:flex gap-[56px]">
        {projectData.map((item, index) => (
          <div key={index} className="bg-[#d6f1cf] w-[380px] rounded-[20px]">
            <div className="relative">
              <img
                src={item.image.sourceUrl}
                alt={item.image.id}
                loading="lazy"
                className="w-[380px] h-[375px] rounded-t-[20px]"
              />
              <div
                className="w-[48px] h-[100px] rounded-[20px] absolute top-[32px] left-[24px]"
                style={{
                  background: item.color ? `#${item.color}` : "#FFFFFF",
                }}
              ></div>
            </div>

            <div className="p-[32px]">
              <p className="font-raleway text-[22px] font-bold leading-[30px] text-left no-underline w-[249px]">
                {item.title}
              </p>
              <p className="mt-[12px] font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[30px] text-left no-underline text-[#727272]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      {/* Left Arrow */}
      <div className="flex xl:hidden overflow-hidden items-center gap-[16px]">
        <img
          onClick={handlePrevious}
          src="/ourProjects/backward.svg"
          loading="lazy"
          className="transform -translate-y-1/2"
        />
        <div className="bg-[#d6f1cf] w-[288px] rounded-[20px]">
          <div className="relative">
            <img
              src={currentProject.image.sourceUrl}
              alt={currentProject.image.id}
              loading="lazy"
              className="w-[288px] h-[288px] rounded-t-[20px]"
            />
            <div
              className="w-[48px] h-[100px] rounded-[20px] absolute top-[32px] left-[24px]"
              style={{
                background: currentProject.color
                  ? `#${currentProject.color}`
                  : "#FFFFFF",
              }}
            ></div>
          </div>

          <div className="p-[12px]">
            <p className="font-raleway text-[18px] font-bold leading-[30px] text-left no-underline w-[249px]">
              {currentProject.title}
            </p>
            <p className="mt-[12px] font-['Plus_Jakarta_Sans'] text-[10px] font-normal leading-[30px] text-left no-underline text-[#727272]">
              {currentProject.description}
            </p>
          </div>
        </div>
        {/* Right Arrow */}
        <img
          onClick={handleNext}
          src="/ourProjects/forward.svg"
          loading="lazy"
          className="transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default ProjectSlider;
