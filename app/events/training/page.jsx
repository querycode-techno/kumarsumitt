"use client"


import Link from "next/link"
import { ArrowLeft, Play, ExternalLink, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const trainingVideos = [
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
  {
    id: 2,
    title: "ILLUSION OF ROPE PULLING",
    instructor: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/hznf0bc7y0Y?si=x20y3EfrV943DiRk",
   
  },
  {
    id: 3,
    title: "Emotional Range Expansion P-1",
    instructor: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/Y39_Rch1tZ8?autoplay=1&mute=1&si=6HwBmCtu4DCEn5h6",
   
  },
  {
    id: 4,
    title: "Emotional Range Expansion P-2",
    instructor: "Kumar Sumitt",
    thumbnail: "/training-script-analysis.png",
    iframe: "https://www.youtube.com/embed/Ao1x-w55WEM?autoplay=1&mute=1&si=ITvYJgeCTIVrOanM",
    
  },
  {
    id: 5,
    title: "Character Development Workshop",
    instructor: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/VIDEO_ID_8?si=example3",
   
  },
  {
    id: 6,
    title: "Stage Presence & Movement",
    instructor: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/VIDEO_ID_8?si=example4",
   
  },

  {
    id: 7,
    title: "Method Acting Fundamentals",
    instructor: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/VIDEO_ID_8?si=example1",
   
  },
  {
    id: 8,
    title: "Voice Modulation Masterclass",
    instructor: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/VIDEO_ID_8?si=example2",
   
  },
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Single Banner Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/hero/b1.webp")`,
              backgroundRepeat: "no-repeat",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/events" className="flex items-center text-white hover:text-gray-200 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Events
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Training Sessions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Master the craft of acting with Kumar Sumitt's comprehensive training videos. Learn professional
              techniques, develop your skills, and unlock your potential as a performer.
            </p>
          </div>
        </div>
      </section>

      {/* Training Videos Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-200">
                  <iframe
                    src={video.iframe}
                    title={`${video.title} - ${video.instructor}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                  <p className="text-green-600 text-sm font-medium mb-2">Instructor: {video.instructor}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {video.duration}
                    </div>
                    <div className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {video.level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
