"use client"

import Image from "next/image"
import { Building2, TrendingUp, Users, Target, Lightbulb, Award, Instagram, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const ventures = [
  {
    id: 1,
    name: "KANAK ENTERTAINMENTS",
    founded: "2017",
    type: "Event & Film Production House",
    status: "Active",
    description: "An innovative event and film production house dedicated to artistic excellence and cultural impact in the entertainment industry.",
    achievements: [
      "Over 25 High-profile Events Executed",
      "Series of Impactful Short Films",
      "Dynamic Platform for Performers",
      "Nurturing Emerging Talent",
      "Distinguished Industry Contribution"
    ],
    image: "/assets/kanak.jpg",
    social: {
      facebook: "https://www.facebook.com/share/1HUvzR8qUp/?mibextid=wwXIfr",
    },
  },
  {
    id: 2,
    name: "Kumar Sumitt School of Acting Foundation",
    founded: "2025",
    type: "Premier Acting School",
    status: "Active",
    description: "A premier school dedicated to high-quality acting training, offering structured full-time residential courses for aspiring actors in India and around the world.",
    achievements: [
      "Full-time Residential Courses",
      "Stage & Screen Acting Focus",
      "Practical Learning Emphasis",
      "Variety of Acting Methods",
      "Led by 20+ Years of Experience",
      "Center of Excellence for Aspiring Actors"
    ],
    // Replace the problematic placeholder URLs with simple ones
    image: "/school.jpeg",
    social: {
      instagram: "https://www.instagram.com/kumarsumittschoolofacting?igsh=ZTh1MTI4MGllMHNo&utm_source=qr",
      facebook: "https://www.facebook.com/share/19B6fNF4kJ/?mibextid=wwXIfr",
      x: "https://x.com/kssa_official",
      linkedin: "https://www.linkedin.com/in/kumar-sumitt-school-of-acting-foundation-9137b5415/"
    }
  },
]

const milestones = [
  { 
    year: "2017", 
    event: "Established KANAK ENTERTAINMENTS", 
    icon: Building2 
  },
  { 
    year: "2017-2023", 
    event: "Successfully executed 25+ high-profile events and produced impactful short films", 
    icon: TrendingUp 
  },
  { 
    year: "2023", 
    event: "Expanded vision to include artistic education and talent nurturing", 
    icon: Target 
  },
  { 
    year: "2024", 
    event: "Development of Kumar Sumitt School of Acting Foundation initiative", 
    icon: Users 
  },
  { 
    year: "2025", 
    event: "Launch of Kumar Sumitt School of Acting Foundation - Empowering the next generation of performers", 
    icon: Lightbulb 
  },
]

export default function EntrepreneurPortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Dynamic Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] lg:h-[90vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <Image src="/assets/banner2.jpg" alt="Director at work" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6">Entrepreneur</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto px-2">
              Building sustainable ventures that transform the entertainment landscape
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 lg:mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">2</div>
                <div className="text-xs md:text-sm">Companies Founded</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">25+</div>
                <div className="text-xs md:text-sm">Events Executed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">20+</div>
                <div className="text-xs md:text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">2</div>
                <div className="text-xs md:text-sm">Industry Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2">
            Kumar Sumitt is not only an accomplished actor, director and mentor but also a visionary entrepreneur in the field of performing arts. His entrepreneurial journey reflects a deep commitment to artistic excellence and cultural impact in the entertainment industry.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Artistic Excellence</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Dedicated to maintaining the highest standards in event production, filmmaking, and performing arts education
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Talent Development</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Creating platforms and opportunities for emerging talent to learn, grow, and showcase their abilities
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-pink-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Cultural Impact</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Contributing to the evolving landscape of the entertainment industry through innovative initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Showcase */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-800">Entrepreneurial Ventures</h2>

          <div className="space-y-8 md:space-y-16">
            {ventures.map((venture) => (
              <div key={venture.id} className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image 
                      src={venture.image} 
                      alt={venture.name} 
                      width={1000}
                      height={1000}
                      className="object-cover" 
                      priority={venture.id === 1}
                    />
                  </div>

                  <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 break-words">{venture.name}</h3>
                      <span className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap ${
                        venture.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'
                      } text-white`}>
                        {venture.status}
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{venture.description}</p>

                    <div className="mb-4 md:mb-6">
                      <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">Founded: {venture.founded}</p>
                      <p className="text-xs md:text-sm text-gray-500">Type: {venture.type}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-2 md:mb-3">
                        {venture.id === 1 ? "Key Achievements" : "Key Features"}
                      </h4>
                      {venture.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start sm:items-center">
                          <Award className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 mt-0.5 sm:mt-0 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-gray-600 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {venture.social && (
                      <div className="mt-4 md:mt-6 flex items-center space-x-3 md:space-x-4">
                        {venture.social.instagram && (
                          <Link 
                            href={venture.social.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-2.5 md:p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                          >
                            <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                          </Link>
                        )}
                        {venture.social.facebook && (
                          <Link 
                            href={venture.social.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-2.5 md:p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                          >
                            <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                          </Link>
                        )}
                        {venture.social.x && (
                          <Link
                            href={venture.social.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X"
                            className="inline-flex items-center justify-center p-2.5 md:p-3 bg-black text-white rounded-lg hover:bg-black/90 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="h-4 w-4 md:h-5 md:w-5"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M18.244 2H21l-6.51 7.44L22.5 22h-6.63l-5.19-6.82L4.72 22H2l7.02-8.02L1.5 2h6.8l4.7 6.2L18.244 2Zm-1.16 18h1.53L7.72 3.91H6.08L17.084 20Z" />
                            </svg>
                          </Link>
                        )}
                        {venture.social.linkedin && (
                          <Link
                            href={venture.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="inline-flex items-center justify-center p-2.5 md:p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                          >
                            <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-800">Entrepreneurial Journey</h2>

          <div className="relative">
            {/* Vertical line - hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-pink-500" />
            
            {/* Mobile: Simple vertical line on left */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-pink-500" />

            <div className="space-y-6 md:space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                return (
                  <div key={index} className="relative">
                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-start">
                      <div className="absolute left-0 w-8 h-8 bg-white rounded-full border-4 border-green-500 flex items-center justify-center z-10">
                        <Icon className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="ml-12 flex-1">
                        <div className="bg-white rounded-xl shadow-lg p-4">
                          <div className="text-lg font-bold text-green-500 mb-2">{milestone.year}</div>
                          <p className="text-sm text-gray-700 leading-relaxed">{milestone.event}</p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className={`hidden md:flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                      <div className="w-1/2" />
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-green-500 flex items-center justify-center z-10">
                        <Icon className="h-6 w-6 text-green-500" />
                      </div>
                      <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <div className="text-2xl font-bold text-green-500 mb-2">{milestone.year}</div>
                          <p className="text-gray-700">{milestone.event}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  )
}
