import React from "react";

const AboutCard: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center px-4">
      <div className="max-w-xl w-full p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md shadow-lg text-center text-white border border-white/10">
        <h2 className="text-3xl font-bold mb-2">About us</h2>
        <p className="text-gray-400 mb-6">See who we are</p>

        {/* Image with mask reveal on hover */}
        <div className="group relative overflow-hidden rounded-xl w-3/4 aspect-video mx-auto hover:scale-110 hover:-rotate-3">
          <img
            src="/synex_logo.svg"
            alt="Team"
            className="w-full h-full object-constain filter grayscale transition-all duration-700 group-hover:grayscale-0 hover:scale-120"
          />
          {/* optional: mask effect using gradient or overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
