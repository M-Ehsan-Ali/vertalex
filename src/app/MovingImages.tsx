"use client";
import { useEffect, useState } from "react";

interface MovingImagesProps {
  images: string[]; // Array of image URLs
  interval?: number; // Time interval in milliseconds (default: 3000)
}

const MovingImages: React.FC<MovingImagesProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Clean up on component unmount
  }, [images.length, interval]);

  return (
    <div className="relative w-[100%] h-[100%] ">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index}`}
          className={`absolute top-[0px] left-[0px] w-[100%] h-[100%] rounded-[50%] ${
            index === currentIndex ? "visible" : "hidden"
          }`}
          style={{
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default MovingImages;
