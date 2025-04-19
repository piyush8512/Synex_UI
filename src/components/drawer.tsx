"use client";
import React, { useState } from "react";
import Link from "next/link";

const ServicesOffer = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="w-[100vw] md:w-[60vw] bg-white mx-auto z-20">
      <div className="flex flex-col md:grid md:grid-rows-3">
        {/* MEDIA Section */}
        <div
          className={`flex flex-col font-bold items-center justify-center text-black cursor-pointer transition-all duration-300 ${
            activeSection === "media"
              ? "bg-black text-white md:h-[23vh] md:px-1"
              : "bg-white hover:bg-black hover:text-white h-[15vh]"
          }`}
          onClick={() => handleClick("media")}
        >
          <h1 className="md:text-xl text-xl">MEDIA</h1>
          <div
            className={`flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${
              activeSection === "media"
                ? "max-h-[500px] opacity-100 mt-0 bg-black w-full"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center space-x-2 pb-3 mb-2">
              <Link href="/tedx">
                <div className="bg-white text-black font-semibold text-[12px] md:text-xs mt-3 py-2 md:py-2 px-2 md:px-3 rounded-full">
                  CONTENT PRODUCTION
                </div>
              </Link>
              <Link href="/JurisDomain">
                <div className="bg-white text-black font-semibold text-[12px] md:text-xs py-2 md:py-2 px-2 mt-3 md:px-6 rounded-full">
                  PODCAST PRODUCTION
                </div>
              </Link>
              <Link href="/FiemFoundation">
                <div className="bg-white text-black font-semibold text-[12px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                  EVENT COVERAGE
                </div>
              </Link>
              <Link href="/JurisDomain">
                <div className="bg-white text-black font-semibold text-[12px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                  CAMPAIGN MANAGEMENT
                </div>
              </Link>
              <a
                href="https://www.behance.net/gallery/207412733/Photoshoot-Videoshoots"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white text-black font-semibold text-[12px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                  PHOTOSHOOTS & VIDEOSHOOTS
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* MANAGEMENT Section */}
        <div
          className={`flex flex-col font-bold items-center justify-center text-black cursor-pointer transition-all duration-300 ${
            activeSection === "management"
              ? "bg-black text-white h-[18vh]"
              : "bg-white hover:bg-black hover:text-white h-[15vh]"
          }`}
          onClick={() => handleClick("management")}
        >
          <h1 className="md:text-xl text-xl">MANAGEMENT</h1>
          <div
            className={`flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${
              activeSection === "management"
                ? "max-h-[500px] opacity-100 mt-0 bg-black w-full"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center space-x-2 p-4">
              <Link href="/Pauls">
                <div className="bg-white text-black font-semibold text-[12px] md:text-xs md:mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                  BRAND
                </div>
              </Link>
              <Link href="/HorzionStudy">
                <div className="bg-white text-black font-semibold text-[12px] md:text-xs md:mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                  SOCIAL PLATFORM
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* DESIGN Section */}
        <Link href="/Design">
          <div
            className={`flex flex-col items-center font-bold justify-center text-black cursor-pointer transition-all duration-300 ${
              activeSection === "design"
                ? "bg-black text-white"
                : "bg-white hover:bg-black hover:text-white h-[15vh]"
            }`}
            onClick={() => handleClick("design")}
          >
            <h1 className="md:text-xl text-xl">DESIGN</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesOffer;
