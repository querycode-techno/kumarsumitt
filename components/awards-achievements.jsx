"use client"

import Image from "next/image"
import Link from "next/link"

const awards = [
  {
    id: 1,
    image: "/gallery/new/181.jpeg",
    // year: "2024",
  },
  {
    id: 2,
    image: "/gallery/new/182.JPG",
    // year: "2023",
  },
  {
    id: 3,
    image: "/gallery/new/183.JPG",
    // year: "2023",
  },
  {
    id: 4,
    image: "/gallery/new/a.jpg",
    // year: "2024",
  },
  {
    id: 5,
    image: "/gallery/new/b.jpg",
    // year: "2023",
  },
  {
    id: 6,
    image: "/gallery/new/c.jpg",
    // year: "2023",
  },
]

export default function AwardsAchievements() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-pink-500">Awards & Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Recognizing excellence in acting, directing, and contributions to the performing arts
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {awards.map((award) => (
            <div key={award.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <Image
                  src={award.image || "/placeholder.svg"}
                  alt={`Award ${award.image}`}
                  width={350}
                  height={450}
                  className="w-full h-80 object-cover"
                />
                {/* <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {award.year}
                </div> */}
              </div>
              {/* <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed">{award.image}</p>
              </div> */}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/awards/actor">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
              View All Awards
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
