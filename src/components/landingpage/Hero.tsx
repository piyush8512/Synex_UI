import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center justify-center text-center">
      <div className="w-3/4">
      <h1 className="text-4xl font-bold md:text-6xl ">
      From Boilerplate to Brilliant - AI Does the Grunt Work
      </h1>
      <h2 className="text-lg mt-5 md:text-2xl w-4/5 mx-auto">
      SynexTech&apos;s AI-powered components let developers build smarter and businesses launch sooner - no headaches, just results.
      </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10">
      <Button>
        Get Components
      </Button>
      <Button>
        Check Docs
      </Button>
      </div>
    </div>
  );
};

export default Hero;
