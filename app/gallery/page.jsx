"use client"

import Link from "next/link"
import { Camera, Video, Mic, Newspaper } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const galleryCategories = [
  {
    title: "Photos & Videos",
    description: "Visual journey through performances and behind-the-scenes moments",
    icon: <Camera className="h-8 w-8" />,
    link: "/gallery/photos",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Posters",
    description: "Posters of the plays and shows",
    icon: <Video className="h-8 w-8" />,
    link: "/gallery/poster",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Training Videos - National/International",
    description: "Workshops and training sessions across India",
    icon: <Video className="h-8 w-8" />,
    link: "/gallery/training/national",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Print Media",
    description: "Newspaper articles, magazine features, and press coverage",
    icon: <Newspaper className="h-8 w-8" />,
    link: "/gallery/media/print",
    color: "from-green-600 to-pink-600",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[40vh] py-28 px-4 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-16 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
              Gallery
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our comprehensive collection of photos, videos, training sessions, and media coverage
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
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
