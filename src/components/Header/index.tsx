"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.innerWidth <= 500 ? setWidth(120) : setWidth(270);
    window.innerWidth <= 500 ? setHeight(20) : setHeight(50);
  }, [width, height]);
  return (
    <div>
      <div className="relative">
        {/* Fixed Header */}
        <div className="bg-[#ffffff] pl-4 lg:pl-[62px] pr-5 lg:pr-[62px] flex items-center justify-between 2xl:static fixed top-0 left-0 w-[100vw] sm:w-full z-40 h-[100px] border-b border-[#D9DEDD]">
          {/* Logo Section */}
          <Link href={"/"}>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/logo-light.svg"
                width={width}
                height={height}
                alt="vertalex"
                className="mt-[8px]"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="flex gap-[12px] sm:gap-x-5 justify-center">
            <div>
              <Link
                href={"#why-us"}
                className="font-rubik text-[10px] sm:text-[16px] font-medium leading-6 tracking-tight text-center decoration-skip-ink"
              >
                Why us
              </Link>
            </div>
            <div>
              <Link
                href={"#our-projects"}
                className="font-rubik text-[10px] sm:text-[16px] font-medium leading-6 tracking-tight text-center decoration-skip-ink"
              >
                Our Projects
              </Link>
            </div>
            <div>
              <Link
                href={"#in-news"}
                className="font-rubik text-[10px] sm:text-[16px] font-medium leading-6 tracking-tight text-center decoration-skip-ink"
              >
                News
              </Link>
            </div>
          </div>
          {/* <button className="hidden">Get in touch</button> */}

          <button className="flex items-center gap-[0.8px] sm:gap-[8px] border border-[#64ce5b] px-[0.8px] py-[0.8px] sm:px-5 sm:py-3 rounded-full font-rubik font-medium text-[10px] sm:text-[16px] leading-6 tracking-tight text-[#1d1f1e] decoration-skip-ink">
            {"Get in touch "}
            <img
              src={`/tailIcon.svg`}
              alt="Tail"
              className="h-[15px] sm:h-[20px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
