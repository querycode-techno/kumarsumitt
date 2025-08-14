"use client"

import Image from "next/image"
import { Building2, TrendingUp, Users, Target, Lightbulb, Award } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const ventures = [
  {
    id: 1,
    name: "KANAK ENTERTAINMENTS",
    founded: "2017",
    type: "Event & Film Production Company",
    status: "Active",
    description: "An innovative event and film production company dedicated to artistic excellence and cultural impact in the entertainment industry.",
    achievements: [
      "Over 25 High-profile Events Executed",
      "Series of Impactful Short Films",
      "Dynamic Platform for Performers",
      "Nurturing Emerging Talent",
      "Distinguished Industry Contribution"
    ],
    // Replace the problematic placeholder URLs with simple ones
    image: "/assets/kanak.jpg",
  },
  {
    id: 2,
    name: "Kumar Sumitt School of Acting Foundation",
    founded: "2025",
    type: "Premier Acting Institution",
    status: "Launching Soon",
    description: "A premier institution dedicated to high-quality acting training, offering structured full-time residential courses for aspiring actors in India and around the world.",
    achievements: [
      "Full-time Residential Courses",
      "Stage & Screen Acting Focus",
      "Practical Learning Emphasis",
      "Variety of Acting Methods",
      "Led by 20+ Years of Experience",
      "Center of Excellence for Aspiring Actors"
    ],
    // Replace the problematic placeholder URLs with simple ones
    image: "/coming.jpg",
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
    year: "Coming Soon", 
    event: "Launch of Kumar Sumitt School of Acting Foundation - Empowering the next generation of performers", 
    icon: Lightbulb 
  },
]

export default function EntrepreneurPortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Dynamic Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <Image src="/assets/banner2.jpg" alt="Director at work" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">Entrepreneur</h1>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              Building sustainable ventures that transform the entertainment landscape
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="text-sm">Companies Founded</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm">Events Executed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="text-sm">Industry Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Kumar Sumitt is not only an accomplished actor, director and mentor but also a visionary entrepreneur in the field of performing arts. His entrepreneurial journey reflects a deep commitment to artistic excellence and cultural impact in the entertainment industry.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Artistic Excellence</h3>
              <p className="text-gray-600">
                Dedicated to maintaining the highest standards in event production, filmmaking, and performing arts education
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Talent Development</h3>
              <p className="text-gray-600">
                Creating platforms and opportunities for emerging talent to learn, grow, and showcase their abilities
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cultural Impact</h3>
              <p className="text-gray-600">
                Contributing to the evolving landscape of the entertainment industry through innovative initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Entrepreneurial Ventures</h2>

          <div className="space-y-16">
            {ventures.map((venture) => (
              <div key={venture.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image 
                      src={venture.image} 
                      alt={venture.name} 
                      width={500}
                      height={500}
                      className="object-cover" 
                    />
                  </div>

                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl font-bold text-gray-800">{venture.name}</h3>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        venture.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'
                      } text-white`}>
                        {venture.status}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">{venture.description}</p>

                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-2">Founded: {venture.founded}</p>
                      <p className="text-sm text-gray-500">Type: {venture.type}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        {venture.id === 1 ? "Key Achievements" : "Key Features"}
                      </h4>
                      {venture.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center">
                          <Award className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Entrepreneurial Journey</h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-pink-500" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className="w-1/2" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-green-500 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-500" />
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="text-2xl font-bold text-green-500 mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
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
