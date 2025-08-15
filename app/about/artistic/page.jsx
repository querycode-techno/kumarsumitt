"use client"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ArtisticDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden pt-16 md:pt-0">
      

        {/* Background Image Grid */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-1 opacity-20">
          <div className="relative h-full">
            <Image src="/assets/joker.jpg" alt="Stage Performance" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/assets/gg10.jpg" alt="Theatre" fill className="object-cover" />
          </div>
          <div className="relative h-full hidden md:block">
            <Image src="/gallery/new/191.JPG" alt="Cinema" fill className="object-cover" />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Artistic
              <span className="block mt-2 bg-gradient-to-r from-pink-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                Philosophy & Vision
              </span>
            </h1>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-500 to-pink-500 mx-auto rounded-full mb-6 md:mb-8" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-justify px-2">
              The creative vision and artistic approach that bridges ancient wisdom with contemporary storytelling techniques
            </p>
            
            {/* Quick Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 max-w-4xl mx-auto">
              <div className="p-3 md:p-4 backdrop-blur-sm bg-white/10 rounded-lg">
                <div className="text-xl md:text-3xl font-bold text-green-400 mb-1 md:mb-2">7+</div>
                <div className="text-xs md:text-sm text-gray-300">Languages</div>
              </div>
              <div className="p-3 md:p-4 backdrop-blur-sm bg-white/10 rounded-lg">
                <div className="text-xl md:text-3xl font-bold text-pink-400 mb-1 md:mb-2">2</div>
                <div className="text-xs md:text-sm text-gray-300">Art Forms</div>
              </div>
              <div className="p-3 md:p-4 backdrop-blur-sm bg-white/10 rounded-lg col-span-2 md:col-span-1">
                <div className="text-xl md:text-3xl font-bold text-green-400 mb-1 md:mb-2">PhD</div>
                <div className="text-xs md:text-sm text-gray-300">Research Scholar</div>
              </div>
            </div>

            {/* Scroll Indicator */}
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

      {/* Acting Style Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-gray-800">Acting Philosophy & Techniques</h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                Kumar Sumitt's artistic approach is deeply rooted in both classical Indian theatre traditions and modern Western techniques. Currently pursuing his PhD on 'Acting Techniques of Bharata's Natyashastra and Stanislavsky's Realism on Stage and Cinema: An Analytical Study', he represents a unique bridge between ancient wisdom and contemporary practice.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                His performances seamlessly blend the emotional depth of Bharata's Natyashastra with the psychological realism of Stanislavsky's method. This synthesis creates a distinctive style that honors traditional Indian performance while embracing modern storytelling techniques.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                Kumar's proficiency in Mimetic arts adds another dimension to his performances. His ability to convey complex narratives through mime and gesture, without relying on spoken language, has made his work accessible to international audiences and contributed to his success in multilingual productions.
              </p>
            </div>

            <div className="flex justify-center order-1 lg:order-2">
                <div className="w-[280px] max-w-[280px] h-[400px] sm:h-[400px] md:h-[500px] rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/assets/joker.jpg" 
                    alt="Acting Philosophy" 
                    fill
                    className="object-cover scale-x-[-1]" 
                    priority
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-400 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L60 40L95 40L68 60L78 95L50 75L22 95L32 60L5 40L40 40Z' fill='%23ffffff' fillOpacity='0.1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="text-lg md:text-2xl lg:text-3xl font-light italic mb-6 md:mb-8 leading-relaxed px-2">
            "True artistry lies in understanding the soul of ancient traditions while speaking the language of contemporary audiences."
          </blockquote>
          <div className="inline-block bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-md">
            <cite className="font-semibold not-italic text-sm md:text-base">— Kumar Sumitt</cite>
          </div>
        </div>
      </section>

      {/* Directorial Vision Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-gray-800">Multilingual Directorial Excellence</h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="flex justify-center order-1 lg:order-1">
                <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/assets/gg10.jpg" 
                    alt="Directorial Excellence" 
                    fill
                    className="object-cover" 
                    priority
                  />
                </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-2 lg:order-2">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                Kumar Sumitt's directorial prowess extends across multiple languages and cultures. He has successfully directed productions in Hindi, Maithili, Telugu, Punjabi, English, Kazakh, Russian, and Mime, showcasing his remarkable ability to adapt storytelling techniques to diverse linguistic and cultural contexts.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                His most notable recent works include "Sita Ram - A Tale of Indian Mythology Ramayana" performed in Kazakh and Russian in Kazakhstan (2024), and "Karma - A dramatic interpretation of the Iconic conversation between Krishna and Arjun from the Indian Epic Mahabharata" in Kazakh language in Almaty (2025).
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                These productions have been highly appreciated by the Director of Swami Vivekananda Cultural Centre, Embassy of India, Astana and ICCR Astana, demonstrating his ability to present Indian mythology and philosophy to international audiences with authenticity and cultural sensitivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Influences Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-gray-800">Artistic Research & Influences</h2>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Classical Indian */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800">Classical Indian Traditions</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-700">
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Bharata's Natyashastra principles</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Maithili cultural heritage</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Regional folk theatre traditions</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Sanskrit dramatic literature</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Classical Indian mime traditions</span>
                </li>
              </ul>
            </div>

            {/* Modern Techniques */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800">Modern Acting Methods</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-700">
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Stanislavsky's realistic approach</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Bertolt Brecht's technique</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Chekhov in various philosophers methodology</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Contemporary mime and movement</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Cross-cultural performance techniques</span>
                </li>
              </ul>
            </div>

            {/* Research Focus */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800">Academic Research</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-700">
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>PhD in Acting Techniques (Final Year)</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>National & international publications</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Comparative theatrical studies</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Cultural adaptation methodologies</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Educational theatre research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
