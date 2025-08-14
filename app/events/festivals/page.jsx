"use client"

import Image from "next/image"
import { Award, Users, Star, BookOpen, Mic } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const keyFestivals = [
  {
    name: "Vidyapati Smriti Parv Samaroh",
    years: ["2009", "2013", "2016"],
    type: "Cultural Heritage",
    description: "A prestigious celebration of Bihar's theatrical heritage"
  },
  {
    name: "Patna Theatre Festival",
    edition: "23rd edition",
    type: "Regional Theatre",
    description: "Premier theatre event featuring groundbreaking performances"
  },
  {
    name: "Patliputra Natya Mahotsav",
    editions: ["26th", "27th", "33rd"],
    type: "Classical Theatre",
    description: "Long-running festival celebrating dramatic arts excellence"
  },
  {
    name: "Akhil Bhartiya Atihasik Natyotsav",
    year: "2012",
    type: "Historical Theatre",
    description: "National festival showcasing historical narratives"
  },
  {
    name: "Dwidiwasiya Nukkad Natya Mahotsav",
    year: "2012",
    type: "Street Theatre",
    description: "Dynamic street theatre festival"
  },
  {
    name: "Thahaka Festival – Bhangima",
    type: "Contemporary Theatre",
    description: "Modern theatrical expressions and innovations"
  },
  {
    name: "Bihar Divas",
    years: ["2012", "2018"],
    type: "State Festival",
    description: "State-level cultural celebration"
  },
  {
    name: "Rang Yatra",
    organizer: "Kala Sanskriti & Bihar Sangeet Natak Academy",
    type: "Cultural Tour",
    description: "Touring showcase of theatrical excellence"
  },
  {
    name: "Bikhari Thakur Natya Utsav",
    type: "Folk Theatre",
    description: "Celebration of folk theatrical traditions"
  }
];

const festivalHighlights = [
  {
    icon: Users,
    title: "Dynamic Collaborations",
    description: "Partnering with esteemed directors and theatre personalities"
  },
  {
    icon: Star,
    title: "Artistic Innovation",
    description: "Blending classical theatrical roots with contemporary flair"
  },
  {
    icon: BookOpen,
    title: "Mentorship",
    description: "Leading workshops and nurturing emerging artists"
  },
  {
    icon: Mic,
    title: "Versatile Performances",
    description: "Delivering powerful narratives across various theatrical styles"
  }
];

export default function FestivalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/banner.jpg"
            alt="Festival Banner"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-black/30" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Festival Participation
            </h1>
            <p className="text-xl text-[#C8A655] max-w-3xl mx-auto mb-8 leading-relaxed">
              Showcasing at Theatre Festivals
            </p>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto mb-12">
              Kumar Sumitt has performed at leading national festivals, bringing powerful theatrical narratives to diverse audiences.
            </p>
            <blockquote className="max-w-2xl mx-auto p-6 border-l-4 border-[#C8A655] bg-black/20 rounded-r-lg backdrop-blur-sm">
              <p className="text-xl italic text-white">
                "Acting taught me to live many lives—but most importantly, to be fully present in my own."
              </p>
              <footer className="mt-2 text-emerald-200">– Kumar Sumitt</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Festival Highlights Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-emerald-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            <span className="relative">
              Festival Highlights
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#C8A655] to-emerald-400"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {festivalHighlights.map((highlight, index) => (
              <div key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#C8A655]/30 hover:border-emerald-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C8A655]/20 to-emerald-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <highlight.icon className="h-8 w-8 text-[#C8A655]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{highlight.title}</h3>
                <p className="text-emerald-100 text-center leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Festivals Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-emerald-50/30 to-[#C8A655]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            <span className="relative">
              Key Festival Participations
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-[#C8A655]"></span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFestivals.map((festival, index) => (
              <div key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C8A655]/20 hover:border-emerald-200 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C8A655]/10 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#8B7355] group-hover:text-emerald-700 transition-colors">
                      {festival.name}
                    </h3>
                    
                    <div className="space-y-1">
                      {festival.years && (
                        <div className="flex flex-wrap gap-2">
                          {festival.years.map(year => (
                            <span key={year} className="bg-gradient-to-r from-[#C8A655]/10 to-emerald-50 text-emerald-700 text-sm px-3 py-0.5 rounded-full">
                              {year}
                            </span>
                          ))}
                        </div>
                      )}
                      {festival.edition && (
                        <span className="bg-gradient-to-r from-[#C8A655]/10 to-emerald-50 text-emerald-700 text-sm px-3 py-0.5 rounded-full">
                          {festival.edition}
                        </span>
                      )}
                      {festival.editions && (
                        <div className="flex flex-wrap gap-2">
                          {festival.editions.map(edition => (
                            <span key={edition} className="bg-gradient-to-r from-[#C8A655]/10 to-emerald-50 text-emerald-700 text-sm px-3 py-0.5 rounded-full">
                              {edition}
                            </span>
                          ))}
                        </div>
                      )}
                      {festival.year && (
                        <span className="bg-gradient-to-r from-[#C8A655]/10 to-emerald-50 text-emerald-700 text-sm px-3 py-0.5 rounded-full">
                          {festival.year}
                        </span>
                      )}
                      {festival.organizer && (
                        <p className="text-sm text-gray-600">
                          by {festival.organizer}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 mt-2">{festival.description}</p>
                      <span className="inline-block text-sm text-[#C8A655] bg-[#C8A655]/5 px-3 py-0.5 rounded-full mt-2">
                        {festival.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="inline-block text-lg italic font-semibold bg-gradient-to-r from-[#C8A655] to-emerald-600 bg-clip-text text-transparent">
              And many more prestigious festivals...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
