"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Clock, MapPin, Users, Award, BookOpen, Target, Globe } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const internationalTrainingVideos = [
  // Method Acting & Techniques
  {
    id: 1,
    title: "Broadway Method Acting - New York",
    description: "International collaboration with Broadway artists, exploring advanced Meisner and Strasberg techniques",
    duration: "4:20:15",
    date: "2024",
    category: "Method Acting",
    level: "Advanced",
    location: "New York Acting Studio",
    participants: 18,
    country: "USA",
    thumbnail: "/placeholder.svg?height=300&width=400&query=broadway method acting new york",
  },
  {
    id: 2,
    title: "Classical Theatre Workshop - London",
    description: "Intensive workshop at Royal Academy of Dramatic Arts focusing on Shakespearean and classical techniques",
    duration: "3:45:30",
    date: "2024",
    category: "Classical",
    level: "Advanced",
    location: "Royal Academy of Dramatic Arts",
    participants: 15,
    country: "UK",
    thumbnail: "/placeholder.svg?height=300&width=400&query=classical theatre london rada",
  },
  {
    id: 3,
    title: "Cultural Expression & Storytelling - Tokyo",
    description: "Cross-cultural acting techniques and traditional Japanese performance methods integration",
    duration: "2:30:45",
    date: "2024",
    category: "Cultural",
    level: "Intermediate",
    location: "Tokyo International Arts Centre",
    participants: 22,
    country: "Japan",
    thumbnail: "/placeholder.svg?height=300&width=400&query=cultural storytelling tokyo",
  },
  
  // Contemporary & Modern Techniques
  {
    id: 4,
    title: "Contemporary Performance - Berlin",
    description: "Modern European acting approaches, physical theatre, and experimental performance techniques",
    duration: "3:15:20",
    date: "2023",
    category: "Contemporary",
    level: "Advanced",
    location: "Berlin Theatre Academy",
    participants: 20,
    country: "Germany",
    thumbnail: "/placeholder.svg?height=300&width=400&query=contemporary performance berlin",
  },
  {
    id: 5,
    title: "Screen Acting Masterclass - Los Angeles",
    description: "Hollywood techniques for film and television, camera work, and industry-standard practices",
    duration: "5:10:30",
    date: "2023",
    category: "Screen Acting",
    level: "Professional",
    location: "Los Angeles Film School",
    participants: 12,
    country: "USA",
    thumbnail: "/placeholder.svg?height=300&width=400&query=screen acting los angeles hollywood",
  },
  {
    id: 6,
    title: "Voice & Movement Integration - Paris",
    description: "French theatrical tradition combining voice work, physical expression, and emotional authenticity",
    duration: "2:45:15",
    date: "2023",
    category: "Voice & Movement",
    level: "Intermediate",
    location: "Paris Conservatory",
    participants: 25,
    country: "France",
    thumbnail: "/placeholder.svg?height=300&width=400&query=voice movement paris conservatory",
  },
  
  // Specialized International Training
  {
    id: 7,
    title: "International Accent Training - Toronto",
    description: "Comprehensive dialect coaching covering North American, European, and international accents",
    duration: "2:20:45",
    date: "2023",
    category: "Dialect",
    level: "Intermediate",
    location: "Toronto Acting Academy",
    participants: 28,
    country: "Canada",
    thumbnail: "/placeholder.svg?height=300&width=400&query=accent training toronto",
  },
  {
    id: 8,
    title: "Multicultural Theatre - Sydney",
    description: "Exploring diverse cultural perspectives in performance and character development",
    duration: "3:35:20",
    date: "2023",
    category: "Multicultural",
    level: "Advanced",
    location: "Sydney Theatre Company",
    participants: 16,
    country: "Australia",
    thumbnail: "/placeholder.svg?height=300&width=400&query=multicultural theatre sydney",
  },
  {
    id: 9,
    title: "Digital Performance - Stockholm",
    description: "Modern technology integration in acting, motion capture, and digital storytelling techniques",
    duration: "1:55:30",
    date: "2022",
    category: "Digital",
    level: "Advanced",
    location: "Stockholm Digital Arts",
    participants: 14,
    country: "Sweden",
    thumbnail: "/placeholder.svg?height=300&width=400&query=digital performance stockholm",
  },
  {
    id: 10,
    title: "Immersive Acting - Vancouver",
    description: "Virtual reality and immersive performance techniques for modern storytelling",
    duration: "2:40:30",
    date: "2022",
    category: "Immersive",
    level: "Professional",
    location: "Vancouver VR Studio",
    participants: 10,
    country: "Canada",
    thumbnail: "/placeholder.svg?height=300&width=400&query=immersive acting vancouver",
  },
]

export default function InternationalTrainingPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "All Categories", count: internationalTrainingVideos.length },
    { id: "Method Acting", label: "Method Acting", count: internationalTrainingVideos.filter(v => v.category === "Method Acting").length },
    { id: "Classical", label: "Classical", count: internationalTrainingVideos.filter(v => v.category === "Classical").length },
    { id: "Cultural", label: "Cultural", count: internationalTrainingVideos.filter(v => v.category === "Cultural").length },
    { id: "Contemporary", label: "Contemporary", count: internationalTrainingVideos.filter(v => v.category === "Contemporary").length },
    { id: "Screen Acting", label: "Screen Acting", count: internationalTrainingVideos.filter(v => v.category === "Screen Acting").length },
    { id: "Voice & Movement", label: "Voice & Movement", count: internationalTrainingVideos.filter(v => v.category === "Voice & Movement").length },
    { id: "Dialect", label: "Dialect", count: internationalTrainingVideos.filter(v => v.category === "Dialect").length },
    { id: "Multicultural", label: "Multicultural", count: internationalTrainingVideos.filter(v => v.category === "Multicultural").length },
    { id: "Digital", label: "Digital", count: internationalTrainingVideos.filter(v => v.category === "Digital").length },
    { id: "Immersive", label: "Immersive", count: internationalTrainingVideos.filter(v => v.category === "Immersive").length },
  ]

  // Filter videos based on selected category
  const filteredVideos = activeFilter === "all" 
    ? internationalTrainingVideos 
    : internationalTrainingVideos.filter(video => video.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Banner */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/international-film-festival-stage.png"
            alt="International Training Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L60 40L95 40L68 60L78 95L50 75L22 95L32 60L5 40L40 40Z' fill='%23ffffff' fillOpacity='0.1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/gallery" className="flex items-center text-white/80 hover:text-white mr-4 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Gallery
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-8 w-8 text-pink-200" />
              <span className="text-pink-200 font-medium">Global Training Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              International Training Videos
            </h1>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Explore Kumar Sumitt's international acting training journey across prestigious institutions worldwide. These advanced sessions showcase global techniques and cross-cultural performance methods.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-pink-200" />
                <div className="text-2xl font-bold">Learn</div>
                <div className="text-sm text-pink-200">Global Techniques</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-pink-200" />
                <div className="text-2xl font-bold">Practice</div>
                <div className="text-sm text-pink-200">International Methods</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-pink-200" />
                <div className="text-2xl font-bold">Transform</div>
                <div className="text-sm text-pink-200">World-Class Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm">Training Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">180+</div>
              <div className="text-gray-600 text-sm">International Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600 mb-2">30+</div>
              <div className="text-gray-600 text-sm">Training Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fuchsia-600 mb-2">8</div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all border ${
                  activeFilter === category.id
                    ? "bg-purple-500 text-white shadow-lg border-purple-500"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 border-gray-200"
                }`}
              >
                {category.label}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === category.id
                    ? "bg-purple-400 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {activeFilter === "all" ? "Global Training Collection" : `${activeFilter} Training Videos`}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {activeFilter === "all"
                ? "Experience world-class training from renowned international institutions and learn from diverse cultural approaches to acting and performance."
                : `Showing ${filteredVideos.length} ${activeFilter.toLowerCase()} training ${filteredVideos.length === 1 ? 'video' : 'videos'} from prestigious international institutions.`
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.category}
                  </div>
                  
                  {/* Country Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    {video.country}
                  </div>
                  
                  {/* Level Badge */}
                  <div className="absolute bottom-3 right-3 bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {video.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {video.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {video.participants} participants
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{video.date}</span>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Play className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No videos found</h3>
              <p className="text-gray-500">No training videos match the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Experience World-Class Training</h2>
          <p className="text-xl text-purple-100 mb-8">
            Access exclusive international training methods and techniques from prestigious institutions around the globe.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Begin Global Journey
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
