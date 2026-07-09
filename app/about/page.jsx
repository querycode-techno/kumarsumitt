"use client"

import Link from "next/link"
import Image from "next/image"
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
      <section className="relative overflow-hidden py-20 md:py-28 px-4 bg-gradient-to-br from-blue-50 via-stone-50 to-purple-50">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-100/50 to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-100/80 to-neutral-50/90" />
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Kumar Sumitt
              </h1>
              <p className="text-gray-600 text-lg max-w-xl md:mx-0 mx-auto leading-relaxed">
                Discover the multifaceted personality behind the artist, entrepreneur, and visionary
              </p>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm md:max-w-md">
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-200/30 via-stone-100/60 to-purple-200/30 rounded-3xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-stone-50 to-neutral-100 shadow-xl border border-white/80">
                  <Image
                    src="/assets/about/kumar-sumitt.png"
                    alt="Kumar Sumitt"
                    width={480}
                    height={640}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
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
