"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close menu when any menu item is clicked
  };

  return (
    <div>
      <div className="relative">
        {/* Fixed Header */}
        <div className="bg-[#ffffff] pl-4 lg:pl-[62px] pr-5 lg:pr-[62px] flex items-center justify-between 2xl:static fixed top-0 left-0 w-full z-40 h-[100px] border-b border-[#D9DEDD]">
          {/* Logo Section */}
          <Link href={"/"}>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/logo-light.svg"
                height={50}
                width={270}
                alt="vertalex"
                className="mt-[8px]"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-x-5 justify-center">
            <div>
              <Link
                href={"#why-us"}
                className="font-rubik text-[16px] font-medium leading-6 tracking-tight text-center decoration-skip-ink"
              >
                Why us
              </Link>
            </div>
            <div>
              <Link
                href={"#our-projects"}
                className="font-rubik text-[16px] font-medium leading-6 tracking-tight text-center decoration-skip-ink"
              >
                Our Projects
              </Link>
            </div>
            <div>
              <Link
                href={"#in-news"}
                className="font-rubik text-[16px] font-medium leading-6 tracking-tight text-center decoration-skip-ink"
              >
                News
              </Link>
            </div>
          </div>
          {/* <button className="hidden">Get in touch</button> */}

          {/* Mobile Menu (Three Dots or Close Button) */}
          <div
            className="lg:hidden flex items-center text-[#000000]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <span className="text-2xl">{isMenuOpen ? "X" : "•••"}</span>
            </div>
          </div>
          <button className="hidden lg:flex items-center gap-[8px] border border-[#64ce5b] px-5 py-3 rounded-full font-rubik font-medium text-[16px] leading-6 tracking-tight text-[#1d1f1e] decoration-skip-ink">
            {"Get in touch "}
            <img src={`/tailIcon.svg`} alt="Tail" />
          </button>
        </div>

        {/* Fixed Drawer Menu with Transition */}
        {isMenuOpen && (
          <div
            className="fixed top-[100px] left-0 bg-white text-black w-64 h-full flex flex-col px-8 pb-8 pt-2 z-30 overflow-y-auto transition-transform duration-300 ease-in-out"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            {/* Menu Links */}
            <div className="font-semibold py-3">
              <Link href={"/"} onClick={handleMenuClick}>
                Why us
              </Link>
            </div>
            <div className="w-[150px] h-[1px] bg-black" />
            <div className="font-semibold py-3">
              <Link href={"/projects"} onClick={handleMenuClick}>
                Our Projects
              </Link>
            </div>
            <div className="w-[150px] h-[1px] bg-black" />
            <div className="font-semibold py-3">
              <Link href={"/news"} onClick={handleMenuClick}>
                News
              </Link>
            </div>
            <div className="w-[150px] h-[1px] bg-black" />
            <div className="font-semibold py-3">
              <button>Get in touch</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
