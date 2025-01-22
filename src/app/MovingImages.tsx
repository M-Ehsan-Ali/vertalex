"use client";
import { useEffect, useState } from "react";

interface MovingImagesProps {
  images: string[]; // Array of image URLs
  interval?: number; // Time interval in milliseconds (default: 3000)
}

const MovingImages: React.FC<MovingImagesProps> = ({
  images,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic image cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Clean up on component unmount
  }, [images.length, interval]);

  // Navigate to the next image
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const goToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-[100%] h-[100%] flex items-center justify-center">
      {/* Left Arrow */}
      <img
        onClick={goToPreviousImage}
        src="/left_arrow.svg"
        className="w-[24px] md:w-[32px] absolute right-[40px] bottom-[0px] z-10 text-white bg-black/60 cursor-pointer hover:bg-black/100 transition rounded-full"
        alt="Previous"
      />

      {/* Images */}
      <div className="relative w-[100%] h-[100%] overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            className={`absolute top-0 left-0 w-[100%] h-[100%] rounded-[50%] transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Right Arrow */}
      <img
        onClick={goToNextImage}
        src="/right_arrow.svg"
        className="w-[24px] md:w-[32px] absolute right-[0px] bottom-[0px] z-10 text-white bg-black/60 hover:bg-black/100 cursor-pointer transition rounded-full"
        alt="Next"
      />
    </div>
  );
};

export default MovingImages;
