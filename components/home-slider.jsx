"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import Link from "next/link";



const banners = [
  {
    id: 1,
    title: "Watch Kumar Sumitt in action",
    // subtitle: "Watch Kumar Sumitt in action",
    // description:
    //   "Experience the art of storytelling through powerful performances",
    // buttonText: "Watch Showreel",
    type: "image",
    media: "/hero/b0.webp",
    link: "/portfolio/",
    // rating: "4.9",
    // genre: "Drama | Action",
    // year: "2024",
  },
  {
    id: 2,
    title: "Master the Art of Acting",
    // subtitle: "Professional training for aspiring actors",
    // description: "Learn from industry experts and transform your acting career",
    // buttonText: "Join Training",
    type: "image",
    media: "/hero/b1.webp",
    link: "/events/training",
    // rating: "5.0",
    // genre: "Education | Workshop",
    // year: "2024",
  },
  {
    id: 3,
    title: "Celebrating Life Through Art with Kumar Sumitt",
    // subtitle: "Recognized excellence in filmmaking",
    // description:
    //   "Creating cinematic masterpieces that leave a lasting impression",
    // buttonText: "View Awards",
    type: "image",
    media: "/hero/b2.webp",
    link: "/awards",
    // rating: "4.8",
    // genre: "Direction | Cinema",
    // year: "2024",
  },
  {
    id: 4,
    title: "Stage & Cinema performance",
    // subtitle: "Showcasing talent across the globe",
    // description: "Taking Indian cinema to international platforms",
    // buttonText: "Explore Events",
    type: "image",
    media: "/hero/b3.webp",
    link: "/events/festivals",
    // rating: "4.9",
    // genre: "Festival | Global",
    // year: "2024",
  },
];

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [remainingTime, setRemainingTime] = useState(30);
  const [isHovered, setIsHovered] = useState(false);

  const SLIDE_DURATION = 30;

  // Separate useEffect for slide transition
  useEffect(() => {
    if (isHovered) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
      setRemainingTime(SLIDE_DURATION);
    }, SLIDE_DURATION * 1000);

    return () => clearInterval(slideInterval);
  }, [isHovered]);

  // Separate useEffect for timer countdown (continues even when hovering)
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          return SLIDE_DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []); // No dependency on isHovered

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setRemainingTime(SLIDE_DURATION);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setRemainingTime(SLIDE_DURATION);
  };



  return (
    <section
      className="relative w-full overflow-hidden bg-black mt-16 sm:mt-18 md:mt-20"
      style={{ aspectRatio: '1500/672' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Film Reel Border Effect */}
      <div className="absolute inset-x-0 top-0 h-4 md:h-8 bg-[url('/film-border.png')] bg-repeat-x z-50 opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-4 md:h-8 bg-[url('/film-border.png')] bg-repeat-x z-50 opacity-70 transform rotate-180" />

      {/* Film Grain Effect */}
      <div className="absolute inset-0 opacity-20 z-20 mix-blend-overlay pointer-events-none bg-[url('/noise.png')] animate-grain" />

      {/* Slides */}
      <div className="relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out transform
              ${
                index === currentSlide
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-full scale-105"
              }`}
          >
            {/* Media Container */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={banner.media}
                alt={banner.title}
                fill
                className="object-contain transform scale-105 transition-transform duration-10000 
                          hover:scale-110 w-full h-full"
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              />

              {/* Cinematic Overlays */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" /> */}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-end pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20 z-30">
              <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                  {/* <div
                    className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-2 sm:mb-3 md:mb-4 lg:mb-6 
                                animate-fade-in-up text-[8px] sm:text-[10px] md:text-xs lg:text-sm"
                  >
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <span className="text-yellow-500 font-semibold">
                      {banner.rating}
                    </span>
                    <span className="text-gray-400 hidden sm:inline">|</span>
                    <span className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
                      {banner.genre}
                    </span>
                    <span className="text-gray-400 hidden sm:inline">|</span>
                    <span className="text-gray-300">{banner.year}</span>
                  </div> */}
                  
                  <h1
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white 
                               mb-1 sm:mb-2 md:mb-3 leading-tight animate-fade-in-up delay-100"
                  >
                    {banner.title}
                  </h1>
                  <p
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 
                               mb-1 sm:mb-2 md:mb-3 animate-fade-in-up delay-200"
                  >
                    {banner.subtitle}
                  </p>
                  <p
                    className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-400 
                               mb-2 sm:mb-3 md:mb-4 lg:mb-6 max-w-xl animate-fade-in-up delay-300 
                               line-clamp-2 sm:line-clamp-none"
                  >
                    {banner.description}
                  </p>

                 
                  <div
                    className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 
                                animate-fade-in-up delay-400"
                  >
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls - Mobile Friendly */}
      <div
        className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-6 lg:bottom-12 lg:right-8 
                      z-40 flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 lg:space-x-4"
      >
        <button
          onClick={prevSlide}
          className="p-1 sm:p-1.5 md:p-2 rounded-full bg-black/50 hover:bg-green-600/50 backdrop-blur-sm 
                    transition-all duration-300 group"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Progress Indicator */}
        <div className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-2">
          <span className="text-white/80 font-medium text-xs sm:text-sm md:text-base">
            {currentSlide + 1}
          </span>
          <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-[1px] sm:h-[2px] bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-600 transition-all duration-1000"
              style={{ width: `${(remainingTime / SLIDE_DURATION) * 100}%` }}
            />
          </div>
          <span className="text-white/80 font-medium text-xs sm:text-sm md:text-base">
            {banners.length}
          </span>
        </div>

        <button
          onClick={nextSlide}
          className="p-1 sm:p-1.5 md:p-2 rounded-full bg-black/50 hover:bg-green-600/50 backdrop-blur-sm 
                    transition-all duration-300 group"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Scene Markers - Mobile Friendly */}
      <div
        className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-6 lg:bottom-12 lg:left-8 
                      z-40 flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-3"
      >
        {/* {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setRemainingTime(SLIDE_DURATION);
            }}
            className={`group relative h-6 sm:h-8 md:h-10 lg:h-12 transition-all duration-300 
                       ${
                         index === currentSlide
                           ? "w-12 sm:w-16 md:w-20 lg:w-24"
                           : "w-6 sm:w-8 md:w-10 lg:w-12"
                       }`}
          >
            <div
              className={`absolute inset-0 rounded-md md:rounded-lg overflow-hidden 
                           ${
                             index === currentSlide
                               ? "bg-pink-600"
                               : "bg-black/50 group-hover:bg-green-600/50"
                           } 
                           backdrop-blur-sm transition-all duration-300`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`text-[10px] sm:text-xs md:text-sm font-bold 
                                ${
                                  index === currentSlide
                                    ? "text-white"
                                    : "text-gray-400"
                                }`}
                >
                  {index + 1}
                </span>
              </div>
            </div>
          </button>
        ))} */}
      </div>


    </section>
  );
}
