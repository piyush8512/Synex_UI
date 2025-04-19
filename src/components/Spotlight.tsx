"use client";

import { useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
  useEffect(() => {
    const spotlightSize = 400;

    const handleMouseMove = (event: MouseEvent) => {
      const titleElement = document.querySelector(".title") as HTMLElement;
      if (!titleElement) return;

      const titleRect = titleElement.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const spotlightX = mouseX - spotlightSize / 2 - titleRect.left;
      const spotlightY = mouseY - spotlightSize / 2 - titleRect.top;

      titleElement.style.backgroundPosition = `${spotlightX}px ${spotlightY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="title-wrapper flex flex-col items-center">
      <div className="title">
        <div className="hero-section">
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="text-2xl text-center">Tap to bring the</div>
            <div className="text-8xl text-center font-extrabold spotlight">
              <Link href="/service">SPOTLIGHT</Link>
            </div>
            <div className="text-2xl text-center">On your Brand</div>
          </div>

        
        </div>
      </div>

    </main>
  );
};

export default HeroSection;
