"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function PersonalDetailsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
    transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)',
    willChange: 'transform'
  };

  const maskParallaxLeft = {
    transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
    transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)',
    willChange: 'transform'
  };

  const maskParallaxRight = {
    transform: `translate3d(0, ${scrollY * -0.2}px, 0)`,
    transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)',
    willChange: 'transform'
  };

  const contentParallax = {
    transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
    transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)',
    willChange: 'transform'
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            ...parallaxStyle,
            backgroundImage: 'url("/assets/banner.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backfaceVisibility: 'hidden',
          }}
        />

        Overlay Gradient
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Floating Elements - Parallax - Hidden on mobile for better performance */}
        {/* <div 
          className="absolute left-4 md:left-10 top-32 md:top-40 opacity-20 md:opacity-30 hidden sm:block"
          style={maskParallaxLeft}
        >
          <Image
            src="/placeholder.svg"
            alt="Decorative Mask"
            width={100}
            height={100}
            className="md:w-[150px] md:h-[150px] rotate-[-15deg]"
          />
        </div>

        <div 
          className="absolute right-4 md:right-10 bottom-32 md:bottom-40 opacity-20 md:opacity-30 hidden sm:block"
          style={maskParallaxRight}
        >
          <Image
            src="/placeholder.svg"
            alt="Decorative Mask"
            width={100}
            height={100}
            className="md:w-[150px] md:h-[150px] rotate-[15deg]"
          />
        </div> */}

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div 
            className="space-y-4 md:space-y-6"
            style={contentParallax}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 opacity-0 animate-fade-in-up">
              Personal Journey
            </h1>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-500 to-pink-500 mx-auto rounded-full mb-6 md:mb-8" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up delay-200 text-justify px-2">
              Exploring the artistic evolution and personal philosophy of Kumar Sumitt - 
              where passion meets performance, and creativity knows no bounds.
            </p>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-300">
              <div className="p-3 md:p-4 backdrop-blur-sm bg-white/10 rounded-lg">
                <div className="text-xl md:text-3xl font-bold text-green-400 mb-1 md:mb-2">20+</div>
                <div className="text-xs md:text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="p-3 md:p-4 backdrop-blur-sm bg-white/10 rounded-lg">
                <div className="text-xl md:text-3xl font-bold text-pink-400 mb-1 md:mb-2">100+</div>
                <div className="text-xs md:text-sm text-gray-300">Productions</div>
              </div>
              <div className="p-3 md:p-4 backdrop-blur-sm bg-white/10 rounded-lg">
                <div className="text-xl md:text-3xl font-bold text-green-400 mb-1 md:mb-2">25+</div>
                <div className="text-xs md:text-sm text-gray-300">Awards</div>
              </div>
              <div className="p-3 md:p-4 backdrop-blur-sm bg-white/10 rounded-lg">
                <div className="text-xl md:text-3xl font-bold text-pink-400 mb-1 md:mb-2">5000+</div>
                <div className="text-xs md:text-sm text-gray-300">Students</div>
              </div>
            </div>

            {/* Scroll Indicator - Hidden on very small screens */}
            <div 
              className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block"
              onClick={() => {
                const nextSection = document.querySelector('section:nth-of-type(2)');
                nextSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 hover:border-white/80 transition-colors">
                <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">About Kumar Sumitt</h2>
                <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-sm md:text-base text-justify">
                    Kumar Sumitt (Sumit Kumar Thakur) is a versatile Actor, Director, Educator and Entrepreneur who made significant contributions to the Indian Entertainment Industry. Born in a Hindu Brahmin family of the Mithila region (Madhubani) Bihar, Kumar's journey in the arts began from humble beginnings rooted in rich cultural traditions.
                  </p>
                  <p className="text-sm md:text-base text-justify">
                    In his childhood, he shifted to Patna, the capital city of Bihar, where he continued his studies. At the age of 14, he was deeply inspired by a play staged during Kali Puja in Madhubani and simultaneously influenced by cinema in Patna. This pivotal moment led him to decide to make his career in Theatre, Cinema, and the Entertainment industry.
                  </p>
                  <p className="text-sm md:text-base text-justify">
                    Kumar Sumitt joined Patna theatre in 2004, starting from the grassroots as a backstage worker at Premchand Rangshala, Patna. This humble beginning taught him every aspect of theatre production and instilled in him a deep appreciation for collaborative artistic work.
                  </p>
                  <p className="text-sm md:text-base text-justify">
                    Beyond his artistic pursuits, Kumar is deeply committed to education and cultural exchange. His work has been appreciated by the Indian Council for Cultural Relations (ICCR) Pune, Ministry of External Affairs, Government of India, and Swami Vivekananda Cultural Centre Embassy of India, Indian Council for Cultural Relations (ICCR) Astana, Kazakhstan, reflecting his dedication to spreading Indian cultural heritage globally.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-6">
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 md:p-6 rounded-2xl">
                  <h3 className="font-bold text-green-800 mb-1 md:mb-2 text-sm md:text-base">Experience</h3>
                  <p className="text-green-700 text-xs md:text-sm">20+ Years</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-4 md:p-6 rounded-2xl">
                  <h3 className="font-bold text-pink-800 mb-1 md:mb-2 text-sm md:text-base">Performances</h3>
                  <p className="text-pink-700 text-xs md:text-sm">100+ Stage Shows</p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 md:p-6 rounded-2xl">
                  <h3 className="font-bold text-green-800 mb-1 md:mb-2 text-sm md:text-base">Open-Air Shows</h3>
                  <p className="text-green-700 text-xs md:text-sm">1500+ Performances</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-4 md:p-6 rounded-2xl">
                  <h3 className="font-bold text-pink-800 mb-1 md:mb-2 text-sm md:text-base">Languages</h3>
                  <p className="text-pink-700 text-xs md:text-sm">7+ Languages</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative z-10">
                <Image
                  src="/assets/about1.jpg"
                  alt="Kumar Sumitt"
                  width={500}
                  height={600}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-full h-full bg-gradient-to-br from-green-200 to-pink-200 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Middle Banner */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-green-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            "Theatre taught me discipline, cinema taught me dreams, and education taught me to share both with the world."
          </h2>
          <p className="text-lg md:text-xl opacity-90">- Kumar Sumitt</p>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
              Personal Philosophy
            </h2>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-lg md:text-2xl">🎭</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-green-800">Cultural Heritage</h3>
              <p className="text-green-700 text-sm md:text-base leading-relaxed">
                Rooted in the rich Mithila tradition of Bihar, bringing authentic cultural values to every performance and connecting with diverse audiences worldwide.
              </p>
            </div>

            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-lg md:text-2xl">🌟</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-pink-800">Grassroots Approach</h3>
              <p className="text-pink-700 text-sm md:text-base leading-relaxed">
                Starting from backstage work to center stage, understanding every aspect of production and maintaining humility in artistic excellence.
              </p>
            </div>

            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white text-lg md:text-2xl">🤝</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-green-800">Global Vision</h3>
              <p className="text-green-700 text-sm md:text-base leading-relaxed">
                Bridging Indian cultural heritage with international audiences through collaborative projects and educational initiatives across continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
