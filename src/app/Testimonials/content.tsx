"use client";

import clsx from "clsx"; // For dynamic className merging
import { useState } from "react";

interface Testimonial {
  title: string;
  designation: string;
  review: string;
  logo: {
    mediaItemUrl: string;
  };
}

interface ContentProps {
  testimonials: Testimonial[];
}

export default function Content({ testimonials }: ContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Handlers for carousel navigation
  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setTransitioning(false);
    }, 300); // Match transition duration
  };

  const handlePrevious = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 300); // Match transition duration
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div className="px-[16px] xl:px-[112px] w-full relative flex items-center justify-between md:min-h-[450px] gap-[16px] xl:gap-[72px]">
        {/* Left Arrow */}
        <div className="cursor-pointer" onClick={handlePrevious}>
          <img
            src="/testimonials/left_arrow.svg"
            className="w-[12px] md:w-[60px]"
            alt="Previous"
          />
        </div>
        {/* Dynamic Review */}
        <div className="bg-[#d6f1cf] w-[80%] rounded-[16px] p-[6px_64px] xl:p-[48px_64px]">
          <div className="flex justify-center">
            <img src="/testimonials/star.svg" alt="rating" />
            <img src="/testimonials/star.svg" alt="rating" />
            <img src="/testimonials/star.svg" alt="rating" />
            <img src="/testimonials/star.svg" alt="rating" />
            <img src="/testimonials/star.svg" alt="rating" />
          </div>
          <div
            className={clsx(
              "font-figtree text-[10px] xl:text-[32px] font-medium xl:leading-[40px] tracking-[-0.01em] text-center no-underline text-[#1d1f1e] mt-[24px]",
              transitioning ? "opacity-0" : "opacity-100"
            )}
          >
            {currentTestimonial.review}
          </div>
          {/* Dynamic Title and Designation */}
          <div className="col-span-3">
            <div className="font-figtree text-[12px] xl:text-[20px] font-medium leading-[24px] tracking-[-0.01em] text-center no-underline text-[#1d1f1e] mt-[40px]">
              {currentTestimonial.title}
            </div>
            <div className="font-figtree text-[12px] xl:text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-center no-underline text-[#646a69] mt-[8px]">
              {`${currentTestimonial.designation}`}
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <div className="cursor-pointer" onClick={handleNext}>
          <img
            src="/testimonials/right_arrow.svg"
            className="w-[12px] md:w-[60px]"
            alt="Next"
          />
        </div>
      </div>
    </>
  );
}
