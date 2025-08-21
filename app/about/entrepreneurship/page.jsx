"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Users, Building } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const ventures = [
  {
    name: "Kanak Entertainments",
    year: "2017",
    description: "A production house focused on creating meaningful content across various media platforms.",
    website: "https://facebook.com/kanakentertainment",
    employees: "25+",
    projects: "25+",
    image: "/assets/kanak.jpg",
  },
  // {
  //   name: "Kumar Sumitt School of Acting (KSSA)",
  //   year: "2025",
  //   description: "Premier acting school dedicated to nurturing the next generation of performers.",
  //   website: "#",
  //   employees: "15+",
  //   projects: "100+ Students",
  //   image: "/placeholder.svg?height=300&width=400&query=acting school classroom students",
  // },
]

export default function EntrepreneurshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        {/* Background Image Grid */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-20">
          <div className="relative h-full">
            <Image src="/gallery/new/191.JPG" alt="Production" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/gallery/162.JPG" alt="Business" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/gallery/83.JPG" alt="Success" fill className="object-cover" />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-pink-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                Entertainment Venture
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-justify px-2 sm:px-0">
              Fostering industry growth through innovative business initiatives that bridge traditional theatre with modern entertainment platforms
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-12">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">2017</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">25+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400">Team Members</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">25+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400">Projects Delivered</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div 
              className="absolute -bottom-12 md:-bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() => {
                const nextSection = document.querySelector('#ventures');
                nextSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1 sm:p-2 hover:border-white/80 transition-colors">
                <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-white/50 rounded-full animate-scroll" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
              Our Venture
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto text-justify">
              Building sustainable entertainment businesses that create value for artists, audiences, and the industry
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {ventures.map((venture, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-green-100 rounded-2xl transform -rotate-3 transition-transform group-hover:rotate-0" />
                    <div className="relative">
                      <Image
                        src={venture.image || "/placeholder.svg"}
                        alt={venture.name}
                        width={400}
                        height={300}
                        className="w-full rounded-2xl shadow-lg transform transition-transform group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{venture.name}</h2>
                      <span className="bg-gradient-to-r from-green-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold w-fit">
                        Est. {venture.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">{venture.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-green-50 p-3 md:p-4 rounded-xl text-center">
                      <Users className="h-5 w-5 md:h-6 md:w-6 text-green-600 mx-auto mb-2" />
                      <div className="font-bold text-green-800 text-sm md:text-base">{venture.employees}</div>
                      <div className="text-xs md:text-sm text-green-600">Team Size</div>
                    </div>
                    <div className="bg-pink-50 p-3 md:p-4 rounded-xl text-center">
                      <Building className="h-5 w-5 md:h-6 md:w-6 text-pink-600 mx-auto mb-2" />
                      <div className="font-bold text-pink-800 text-sm md:text-base">{venture.projects}</div>
                      <div className="text-xs md:text-sm text-pink-600">Projects</div>
                    </div>
                  </div>

                  {venture.website !== "#" && (
                    <Link href={venture.website} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <button className="bg-gradient-to-r from-green-500 to-pink-500 hover:from-green-600 hover:to-pink-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors inline-flex items-center text-sm md:text-base">
                        Visit
                        <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Initiatives */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Future Initiatives
          </h2>
          
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl">
              <div className="text-3xl md:text-4xl mb-4">🌐</div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">Global Theatre Academy</h3>
              <p className="text-gray-700 text-sm md:text-base text-justify">
                Establishing an international platform for cross-cultural acting education, bringing together students and faculty from around the world.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-2xl">
              <div className="text-3xl md:text-4xl mb-4">📱</div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">Digital Learning Platform</h3>
              <p className="text-gray-700 text-sm md:text-base text-justify">
                Creating online resources and virtual workshops to make traditional Indian theatre techniques accessible to global audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exciting new venture on the horizon that will revolutionize theatre education and cultural exchange
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* KSSA */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎭</div>
                    <div className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">Coming Soon</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  2025
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Kumar Sumitt School of Acting Foundation</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Premier acting school dedicated to nurturing the next generation of performers with a unique blend of classical Indian techniques and modern international methods.
                </p>
                

                {/* <div className="space-y-3">
                  <h4 className="font-bold text-gray-800">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Classical Indian Theatre", "Modern Acting Methods", "International Exchange", "Industry Partnerships"].map((feature, index) => (
                      <span key={index} className="bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  )
}
