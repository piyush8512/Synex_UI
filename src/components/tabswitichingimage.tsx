// components/BusinessSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["Strategic", "Efficiency", "Collaborative", "Security"] as const;

type TabType = (typeof tabs)[number];

const contentMap: Record<
  TabType,
  { title: string; description: string; image: string }
> = {
  Strategic: {
    title: "Drive your growth with smart decisions.",
    description:
      "We equip your team with data-backed strategies to navigate dynamic business environments.",
    image: "/images/strategic.png",
  },
  Efficiency: {
    title: "Optimized for performance and speed.",
    description:
      "Boost productivity through streamlined workflows and scalable tools.",
    image: "/images/efficiency.png",
  },
  Collaborative: {
    title: "Empower teams with unified solutions.",
    description:
      "Break down silos and enhance collaboration across all departments.",
    image: "/images/collaborative.png",
  },
  Security: {
    title:
      "We’ve strengthened our platform with security and insights to help you thrive and lead your industry.",
    description:
      "We're committed to protecting your interests and success, enhancing security for strong defense against threats.",
    image: "/images/security.png",
  },
};

export default function BusinessSection() {
  const [activeTab, setActiveTab] = useState<TabType>("Security");

  const { title, description, image } = contentMap[activeTab];

  return (
    <section className="w-full bg-black text-white ">
      {/* Left: Image */}
      <h2 className="text-4xl font-bold mb-4 flex justify-center py-9">
        Designed to help your business
      </h2>
      <div className="py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={image}
            alt={activeTab}
            width={300}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Tabs & Content */}
        <div className="w-full md:w-1/2 h-72">
          {/* Tabs */}
          <div className="flex space-x-4 mb-6 text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 border-b-2 ${
                  activeTab === tab
                    ? "border-white font-semibold"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <p className="mb-6 text-sm text-gray-300">
            Our mission at Tecify is to empower businesses like yours to thrive
            in today’s dynamic and data-driven landscape.
          </p>

          {/* Dynamic Content */}
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
