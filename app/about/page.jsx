"use client"

import Link from "next/link"
import { User, Briefcase, Lightbulb, Heart } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const aboutCategories = [
  {
    title: "Personal Life",
    description: "Get to know Kumar Sumitt beyond the stage and screen",
    icon: <User className="h-8 w-8" />,
    link: "/about/personal",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Artistic Journey",
    description: "Explore the creative path and artistic achievements",
    icon: <Lightbulb className="h-8 w-8" />,
    link: "/about/artistic",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Professional Experience",
    description: "Discover the extensive career and industry experience",
    icon: <Briefcase className="h-8 w-8" />,
    link: "/about/experience",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Entrepreneurship",
    description: "Learn about business ventures and entrepreneurial spirit",
    icon: <Heart className="h-8 w-8" />,
    link: "/about/entrepreneurship",
    color: "from-red-500 to-red-600",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[40vh] py-28 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-16 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Kumar Sumitt
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the multifaceted personality behind the artist, entrepreneur, and visionary
            </p>
          </div>
        </div>
      </section>

      {/* About Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aboutCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl border border-gray-100">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
