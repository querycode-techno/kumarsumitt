"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

const trainingSessions = [
  {
    id: 0,
    title: "SITA RAM",
    instructor: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/Qi5DZwaqUFM?si=9JYK8e8DZ_u1dzS3",
   
  },
  {
    id: 1,
    title: "ILLUSION OF WALL",
    instructor: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/yRUneRP3dtg?si=kJMMXTK0Yvygyfkq",
   
  },
]

export default function TrainingSessions() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-pink-500">Training Sessions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Educational workshops and masterclasses for aspiring actors and performers
          </p>
        </div>

        {/* Training Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          {trainingSessions.map((session) => (
            <div key={session.id} className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <iframe
                  src={session.iframe}
                  title={session.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-48 md:h-64 lg:h-72 xl:h-80 object-cover rounded-t-lg"
                  style={{ border: 0 }}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{session.title}</h3>
                <p className="text-sm text-gray-600 mb-1">Instructor: {session.instructor}</p>
                {/* Optionally, you can add more details here if available */}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/events/training">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
              View All Training Sessions
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
