"use client"

import Link from "next/link"
import { Drama, Film, Mic2, Users, Heart, Star, GraduationCap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const eventCategories = [
  {
    title: "Stage Shows",
    description: "Theatre performances and live stage productions",
    icon: <Drama className="h-8 w-8" />,
    link: "/events/stage",
    color: "from-green-500 to-green-600",
    count: "100+",
  },
  {
    title: "On Screen",
    description: "Film projects, music videos, and digital content",
    icon: <Film className="h-8 w-8" />,
    link: "/events/screen",
    color: "from-pink-500 to-pink-600",
    count: "50+",
  },
  {
    title: "Open Air Performances",
    description: "Outdoor events and public performances",
    icon: <Mic2 className="h-8 w-8" />,
    link: "/events/open-air",
    color: "from-green-500 to-pink-500",
    count: "1500+",
  },
  {
    title: "Public Interaction",
    description: "Meet and greet events, fan interactions",
    icon: <Users className="h-8 w-8" />,
    link: "/events/interaction",
    color: "from-pink-500 to-green-500",
    count: "100+",
  },
  {
    title: "Spiritual Visits",
    description: "Cultural and spiritual event participations",
    icon: <Heart className="h-8 w-8" />,
    link: "/events/spiritual",
    color: "from-green-600 to-pink-600",
    count: "50+",
  },
  {
    title: "Festival Participation",
    description: "Film festivals and cultural celebrations",
    icon: <Star className="h-8 w-8" />,
    link: "/events/festivals",
    color: "from-pink-600 to-green-600",
    count: "50+",
  },
  {
    title: "Training Sessions",
    description: "Workshops, masterclasses, and educational events",
    icon: <GraduationCap className="h-8 w-8" />,
    link: "/events/training",
    color: "from-green-500 to-pink-500",
    count: "500+",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl mt-8 font-bold mb-6 bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
              Events & Shows
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our diverse range of performances, events, and public appearances
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl border border-gray-100">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="text-2xl font-bold text-gray-700">{category.count}</div>
                    <div className="text-sm text-gray-500">Events</div>
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
