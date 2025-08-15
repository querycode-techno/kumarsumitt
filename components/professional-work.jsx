"use client"

import Image from "next/image"
import Link from "next/link"

const professionalWork = [
  {
    id: 1,

    image: "/gallery/national/IMG_2209.JPG",
    category: "Film",
  },
  {
    id: 2,

    image: "/gallery/new/e.JPG",
    category: "Theatre",
  },
  {
    id: 3,

    image: "/gallery/new/f.JPG",
    category: "Performance",
  },
  {
    id: 4,

    image: "/gallery/new/g.jpeg",
    category: "Performance",
  },
  {
    id: 5,

    image: "/gallery/new/h.jpeg",
    category: "Performance",
  },
  {
    id: 6,

    image: "/gallery/new/k.JPG",
    category: "Performance",
  },
]

export default function ProfessionalWork() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-pink-500">Professional Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Showcasing a diverse range of work spanning films, television, and Theatre
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {professionalWork.map((work) => (
            <div key={work.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.category}
                  width={400}
                  height={300}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/portfolio/actor">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
              View Full Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
