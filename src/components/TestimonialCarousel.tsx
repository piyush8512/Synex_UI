'use client'

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "This is a great product. We love it.",
    author: "Marie S.",
    position: "CEO at XYZ Corporation",
    avatarSrc: "/api/placeholder/80/80"
  },
  {
    id: 2,
    quote: "It has changed our business.",
    author: "David P.",
    position: "Marketing Manager at ABC Marketing",
    avatarSrc: "/api/placeholder/80/80"
  },
  {
    id: 3,
    quote: "Amazing experience using Tecify.",
    author: "Daniel H.",
    position: "Owner of Local Café",
    avatarSrc: "/api/placeholder/80/80"
  },
  {
    id: 4,
    quote: "Seamless integration and results.",
    author: "Jessica T.",
    position: "Operations Director",
    avatarSrc: "/api/placeholder/80/80"
  },
  {
    id: 5,
    quote: "The best platform we've used.",
    author: "Michael R.",
    position: "CFO at Global Enterprises",
    avatarSrc: "/api/placeholder/80/80"
  },
];

export default function TestimonialCarousel() {
  const [position, setPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate card width on mount and resize
  useEffect(() => {
    const calculateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newCardWidth = containerWidth / 3; // Show 3 cards on desktop
        setCardWidth(newCardWidth);
      }
    };
    
    calculateCardWidth();
    window.addEventListener('resize', calculateCardWidth);
    
    return () => window.removeEventListener('resize', calculateCardWidth);
  }, []);
  
  const scrollLeft = () => {
    if (sliderRef.current && cardWidth) {
      // Move one card width to the left
      const newPosition = Math.min(position + cardWidth, 0);
      setPosition(newPosition);
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current && cardWidth) {
      const maxScroll = -(testimonials.length * cardWidth - (cardWidth * 3)); // 3 cards visible
      // Move one card width to the right
      const newPosition = Math.max(position - cardWidth, maxScroll);
      setPosition(newPosition);
    }
  };
  
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-16">
          Praise from our users
        </h2>
        
        <div className="relative overflow-hidden" ref={containerRef}>
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${position}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-full md:w-1/3 px-3 my-5"
                style={{ minWidth: cardWidth ? `${cardWidth}px` : '33.333%' }}
              >
                <div className="bg-gray-500 p-8 rounded-xl shadow-md h-full w-full">
                  <div className="text-blue-500 text-5xl mb-4">"</div>
                  <p className="text-lg text-black mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.avatarSrc}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-black">
                        {testimonial.author}
                      </h4>
                      <p className="text-black">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}