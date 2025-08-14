"use client"

import { Award, Calendar, Trophy, Users, Globe, BookOpen, Star, Eye, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const majorAwards = [
  {
    id: 1,
    title: "Bihar Yuva Rangmanch Ratna Shri Samman",
    year: "2025",
    description:
      "Awarded by Rashtriya Rang Lok for outstanding contributions to youth theatre and cultural development. This prestigious recognition highlights Kumar Sumitt's dedication to nurturing young talent and preserving theatrical traditions.",
    category: "Youth Theatre Excellence",
    ceremony: "Rashtriya Rang Lok",
    date: "2025",
    icon: <Users className="h-8 w-8 text-white" />,
  },
  {
    id: 2,
    title: "Jannayika Sarla Sriwas Samman",
    year: "2024",
    description:
      "Conferred by Sarla Shriwas Samajik Sanskritik Shodh Sansthan in recognition of his impactful contributions to theatre arts and cultural education, acknowledging his role in social and cultural research.",
    category: "Cultural Education",
    ceremony: "Sarla Shriwas Samajik Sanskritik Shodh Sansthan",
    date: "2024",
    icon: <BookOpen className="h-8 w-8 text-white" />,
  },
  {
    id: 3,
    title: "ICCR Appreciation - Ministry of External Affairs",
    year: "2024",
    description:
      "Honored by Indian Council for Cultural Relations (ICCR), Pune, under the Ministry of External Affairs, Government of India, for promoting Indian theatre (particularly Mime Art) and cultural values at national and international forums.",
    category: "International Recognition",
    ceremony: "ICCR, Pune - Ministry of External Affairs, Govt. of India",
    date: "2024",
    icon: <Globe className="h-8 w-8 text-white" />,
  },
  {
    id: 4,
    title: "Embassy of India, Astana Recognition",
    year: "2024",
    description:
      "Special recognition by the Director, Swami Vivekanand Cultural Centre, Embassy of India, Astana, for advancing intercultural understanding and fostering global collaboration through the performing arts.",
    category: "International Collaboration",
    ceremony: "Swami Vivekanand Cultural Centre, Embassy of India, Astana",
    date: "2024",
    icon: <Star className="h-8 w-8 text-white" />,
  },
]

const timelineAwards = [
  {
    year: "2025",
    title: "Bihar Yuva Rangmanch Ratna Shri Samman",
    organization: "Rashtriya Rang Lok",
    description: "Outstanding contributions to youth theatre and cultural development",
    color: "bg-pink-500",
  },
  {
    year: "2024",
    title: "Jannayika Sarla Sriwas Samman",
    organization: "Sarla Shriwas Samajik Sanskritik Shodh Sansthan",
    description: "Recognition for impact on theatre arts and cultural education",
    color: "bg-pink-500",
  },
  {
    year: "2024",
    title: "ICCR Appreciation",
    organization: "Ministry of External Affairs, Govt. of India",
    description: "Promoting Indian theatre and cultural values internationally",
    color: "bg-pink-500",
  },
  {
    year: "2024",
    title: "Embassy Recognition",
    organization: "Embassy of India, Astana",
    description: "Advancing intercultural understanding through performing arts",
    color: "bg-pink-500",
  },
  {
    year: "2022",
    title: "Guest Faculty Honour",
    organization: "Multiple Theatre Training Institutions",
    description: "Excellence in theatre education and workshop facilitation",
    color: "bg-pink-500",
  },
  {
    year: "2022",
    title: "Gusto Fest Recognition",
    organization: "Sri Prakash Educational Institutions, Andhra Pradesh",
    description: "Theatre in Education - innovative educational theatre models",
    color: "bg-pink-500",
  },
]

const recognitionAreas = [
  {
    title: "Excellence in Acting & Performance",
    description:
      "Commanding stage presence, expressive mime performances, and powerful acting bringing emotional depth to every character",
    icon: <Trophy className="h-12 w-12 text-pink-500" />,
    achievements: ["Theatre Direction", "Mime Art", "Character Performance", "Stage Presence"],
  },
  {
    title: "Theatre Education Innovation",
    description: "Developing immersive training programs and conducting transformative acting and mime workshops",
    icon: <BookOpen className="h-12 w-12 text-pink-500" />,
    achievements: ["Workshop Development", "Actor Training", "Educational Models", "Mentorship Programs"],
  },
  {
    title: "Cultural Advocacy & Preservation",
    description: "Preserving India's rich folk, classical, and regional theatrical traditions",
    icon: <Award className="h-12 w-12 text-pink-500" />,
    achievements: ["Folk Theatre", "Classical Arts", "Regional Traditions", "Contemporary Integration"],
  },
  {
    title: "International Recognition",
    description: "Honored at global theatre festivals and academic platforms for promoting Indian performing arts",
    icon: <Globe className="h-12 w-12 text-pink-500" />,
    achievements: ["Global Festivals", "Academic Forums", "Cultural Exchange", "Research Contributions"],
  },
]

const timelineData = [
  { year: "2025", award: "Bihar Yuva Rangmanch Ratna Shri Samman", organization: "Rashtriya Rang Lok" },
  {
    year: "2024",
    award: "Jannayika Sarla Sriwas Samman",
    organization: "Sarla Shriwas Samajik Sanskritik Shodh Sansthan",
  },
  { year: "2024", award: "ICCR Appreciation", organization: "Ministry of External Affairs, Govt. of India" },
  { year: "2024", award: "Embassy Recognition", organization: "Embassy of India, Astana" },
  { year: "2022", award: "Guest Faculty Honour", organization: "Multiple Theatre Training Institutions" },
  { year: "2022", award: "Gusto Fest Recognition", organization: "Sri Prakash Educational Institutions" },
]

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const carouselItems = [
    {
      id: 1,
    
      image: "/gallery/new/a.jpg",
    
    },
    {
      id: 2,
      image: "/gallery/new/b.jpg",
    },
    {
      id: 3,
      image: "/gallery/new/c.jpg",
    },
    {
      id: 4,
      image: "/gallery/new/d.jpg",
    },
    {
      id: 5,
      image: "/gallery/new/181.jpeg",
    },
    {
      id: 6,
      image: "/gallery/new/183.JPG",
    },
  ]

  const nextSlide = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

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
                Awards & Recognitions
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-justify px-2 sm:px-0">
            Kumar Sumitt's journey in theatre, film, and education has been marked by numerous awards, certifications,
            recognitions, and heartfelt appreciations that reflect his impactful contributions to the arts and society.
            </p>
       
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">A Lifelong Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            These awards are not just symbols of achievement—they are milestones in a lifelong mission to use the power
            of theatre as a tool for transformation, education, and cultural enrichment.
          </p>
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Key Awards & Honors</h2>
          <div className="space-y-8">
            {majorAwards.map((award, index) => (
              <div
                key={award.id}
                className="bg-gradient-to-r from-gray-50 to-pink-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{award.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center bg-pink-100 px-3 py-1 rounded-full">
                            <Calendar className="h-4 w-4 mr-1" />
                            {award.year}
                          </div>
                          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                            <Award className="h-4 w-4 mr-1" />
                            {award.category}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          setSelectedImage(`/placeholder.svg?height=600&width=800&text=Award+Certificate+${award.id}`)
                        }
                        className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View Award</span>
                      </button>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{award.description}</p>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
                      <div className="text-sm text-gray-600">Awarded by</div>
                      <div className="font-semibold text-gray-800">{award.ceremony}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Areas */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Areas of Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {recognitionAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4 mb-6">
                  {area.icon}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {area.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="bg-pink-50 text-pink-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Recognition Timeline</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-300"></div>
            <div className="space-y-12">
              {timelineAwards.map((award, index) => (
                <div key={index} className="relative flex items-start">
                  <div className={`w-4 h-4 ${award.color} rounded-full border-4 border-white shadow-md z-10`}></div>
                  <div className="ml-8 bg-white rounded-lg shadow-lg p-6 flex-1 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{award.title}</h3>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-pink-600 font-medium mb-2">{award.organization}</p>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Visual Timeline of Recognition</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Year</th>
                    <th className="px-6 py-4 text-left font-semibold">Award / Appreciation</th>
                    <th className="px-6 py-4 text-left font-semibold">Organization / Body</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-pink-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-bold">
                          {item.year}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-800">{item.award}</td>
                      <td className="px-6 py-4 text-gray-600">{item.organization}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Press Mentions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Awards & Recognitions</h2>
          <p className="text-center text-gray-600 mb-8">
            Award photos, certificates, media clippings, and performance images
          </p>

          {/* Simple Image Carousel */}
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-96 md:h-[600px]">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentCarouselIndex * 100}%)` }}
              >
                {carouselItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 relative">
                    <div className="h-full flex items-center justify-center p-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`Award ${index + 1}`}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentCarouselIndex ? "bg-pink-500" : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-2">
            {carouselItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentCarouselIndex(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentCarouselIndex ? "ring-4 ring-pink-500" : "hover:ring-2 hover:ring-pink-300"
                }`}
              >
                <img src={item.image || "/placeholder.svg"} alt={`Award ${index + 1}`} className="w-full h-20 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Global Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-pink-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-pink-100">Awards & Recognitions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-pink-100">Students Mentored</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-pink-100">Countries Reached</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-96 h-96 max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Award Certificate"
              className="w-full h-full object-contain rounded-lg shadow-2xl bg-white"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
