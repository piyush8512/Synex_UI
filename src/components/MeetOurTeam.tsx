// TeamSection.tsx
import React from "react";
import Image from "next/image";

const TeamSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden h-120">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Meet our team</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your SaaS.
        </p>
      </div>

      <div className="mt">
        <div className="flex justify-center items-center">
          {/* First team member */}
          <div
            className="relative group"
            style={{
              zIndex: 1,
              marginTop: "10rem",
              width: "16rem",
              height: "16rem",
            }}
          >
            <div className="rounded-full border-6 border-white  overflow-hidden flex items-center justify-center bg-blue-100 w-full h-full">
              <Image
                src="/api/placeholder/300/300"
                alt="Team Member 1"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute hidden group-hover:block  -top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg py-2 px-4 whitespace-nowrap group-hover:animate-bounce transition-all duration-300">
              <p className="font-bold text-gray-900">Jenny Wilson</p>
              <p className="text-gray-500 text-sm">Co-Founder, CEO</p>
            </div>
          </div>

          {/* Second team member */}
          <div
            className="relative group"
            style={{
              marginLeft: "-2rem",
              marginTop: "3rem",
              zIndex: 2,
              width: "18rem",
              height: "18rem",
            }}
          >
            <div className="rounded-full border-6 border-white overflow-hidden flex items-center justify-center bg-blue-100 w-full h-full">
              <Image
                src="/api/placeholder/300/300"
                alt="Team Member 2"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute hidden group-hover:block -top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg py-2 px-4 whitespace-nowrap transition-all duration-300 group-hover:animate-bounce">
              <p className="font-bold text-gray-900">Jenny Wilson</p>
              <p className="text-gray-500 text-sm">Co-Founder, CEO</p>
            </div>
          </div>

          {/* Third team member (highlighted) */}
          <div
            className="relative group"
            style={{
              marginLeft: "-2rem",
              zIndex: 10,
              width: "20rem",
              height: "20rem",
            }}
          >
            <div className="rounded-full border-6 border-white  overflow-hidden flex items-center justify-center bg-orange-300 w-full h-full">
              <Image
                src="/api/placeholder/300/300"
                alt="Jenny Wilson"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute hidden group-hover:block -top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg py-2 px-4 whitespace-nowrap transition-all duration-300 group-hover:animate-bounce">
              <p className="font-bold text-gray-900">Jenny Wilson</p>
              <p className="text-gray-500 text-sm">Co-Founder, CEO</p>
            </div>

            {/* Third team member (highlighted) */}
            <div
              className="relative group"
              style={{
                marginLeft: "-2 rem",
                zIndex: 10,
                width: "20rem",
                height: "20rem",
              }}
            >
              <div className="rounded-full border-6 border-white overflow-hidden flex items-center justify-center bg-orange-300 w-full h-full">
                <Image
                  src="/api/placeholder/300/300"
                  alt="Jenny Wilson"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name tag with wobble on group hover */}
              <div className="absolute hidden group-hover:block hover:animate-bounce transition-all duration-300 -top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg py-2 px-4 whitespace-nowrap group-hover:animate-bounce ">
                <p className="font-bold text-gray-900">Jenny Wilson</p>
                <p className="text-gray-500 text-sm">Co-Founder, CEO</p>
              </div>
            </div>
          </div>

          {/* Fourth team member */}
          <div
            className="relative group"
            style={{
              marginLeft: "-2rem",
              zIndex: 2,
              marginTop: "3rem",
              width: "18rem",
              height: "18rem",
            }}
          >
            <div className="rounded-full border-6 border-white overflow-hidden flex items-center justify-center bg-blue-100 w-full h-full">
              <Image
                src="/api/placeholder/300/300"
                alt="Team Member 4"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute hidden group-hover:block  -top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg py-2 px-4 whitespace-nowrap transition-all duration-300 group-hover:animate-bounce">
              <p className="font-bold text-gray-900">Jenny Wilson</p>
              <p className="text-gray-500 text-sm">Co-Founder, CEO</p>
            </div>
          </div>

          {/* Fifth team member */}
          <div
            className="relative group"
            style={{
              marginLeft: "-2rem",
              zIndex: 1,
              marginTop: "10rem",
              width: "16rem",
              height: "16rem",
            }}
          >
            <div className="rounded-full border-6 border-white  overflow-hidden flex items-center justify-center bg-blue-100 w-full h-full">
              <Image
                src="/api/placeholder/300/300"
                alt="Team Member 5"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute hidden group-hover:block -top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg py-2 px-4 whitespace-nowrap  group-hover:animate-bounce transition-all duration-300">
              <p className="font-bold text-gray-900">Jenny Wilson</p>
              <p className="text-gray-500 text-sm">Co-Founder, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
